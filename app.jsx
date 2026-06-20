import React, { useState, useEffect } from 'react';
import CountrySearch from './CountrySearch';
import StatsDisplay from './StatsDisplay';
import RiskAlert from './RiskAlert';
import '../styles/CovidTracker.css';

const CovidTracker = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [globalStats, setGlobalStats] = useState(null);

  // Fetch all countries on component mount
  useEffect(() => {
    fetchAllCountries();
    fetchGlobalStats();
  }, []);

  // Fetch list of all countries
  const fetchAllCountries = async () => {
    try {
      const response = await fetch('https://disease.sh/v3/covid-19/countries');
      const data = await response.json();
      const countryList = data.map(country => ({
        name: country.country,
        code: country.countryInfo.iso2,
        flag: country.countryInfo.flag
      }));
      setCountries(countryList);
    } catch (err) {
      console.error('Error fetching countries:', err);
      setError('Failed to load countries list');
    }
  };

  // Fetch global statistics
  const fetchGlobalStats = async () => {
    try {
      const response = await fetch('https://disease.sh/v3/covid-19/all');
      const data = await response.json();
      setGlobalStats(data);
    } catch (err) {
      console.error('Error fetching global stats:', err);
    }
  };

  // Fetch stats for selected country
  const fetchCountryStats = async (countryName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${countryName}`
      );
      if (!response.ok) {
        throw new Error('Country not found');
      }
      const data = await response.json();
      setStats(data);
      setSelectedCountry(countryName);
    } catch (err) {
      console.error('Error fetching country stats:', err);
      setError(`Failed to fetch data for ${countryName}`);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  // Determine risk level based on cases
  const getRiskLevel = (data) => {
    if (!data) return 'low';
    const casesPerMillion = data.casesPerOneMillion;
    if (casesPerMillion > 50000) return 'critical';
    if (casesPerMillion > 20000) return 'high';
    if (casesPerMillion > 5000) return 'moderate';
    return 'low';
  };

  const riskLevel = stats ? getRiskLevel(stats) : null;

  return (
    <div className="covid-tracker">
      <header className="tracker-header">
        <h1>🏥 COVID-19 & Health Stats Tracker</h1>
        <p className="header-subtitle">Real-time global health awareness dashboard</p>
      </header>

      {/* Global Stats Overview */}
      {globalStats && (
        <div className="global-stats-overview">
          <div className="stat-card global-stat">
            <div className="stat-value">{globalStats.cases.toLocaleString()}</div>
            <div className="stat-label">Global Cases</div>
          </div>
          <div className="stat-card global-stat">
            <div className="stat-value">{globalStats.deaths.toLocaleString()}</div>
            <div className="stat-label">Global Deaths</div>
          </div>
          <div className="stat-card global-stat">
            <div className="stat-value">{globalStats.recovered.toLocaleString()}</div>
            <div className="stat-label">Global Recovered</div>
          </div>
          <div className="stat-card global-stat">
            <div className="stat-value">{globalStats.active.toLocaleString()}</div>
            <div className="stat-label">Active Cases</div>
          </div>
        </div>
      )}

      <main className="tracker-main">
        {/* Search Section */}
        <section className="search-section">
          <CountrySearch
            countries={countries}
            onSelectCountry={fetchCountryStats}
            loading={loading}
          />
        </section>

        {/* Risk Alert */}
        {stats && riskLevel && (
          <section className="alert-section">
            <RiskAlert stats={stats} riskLevel={riskLevel} country={selectedCountry} />
          </section>
        )}

        {/* Error Message */}
        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Fetching data...</p>
          </div>
        )}

        {/* Stats Display */}
        {stats && !loading && (
          <section className="stats-section">
            <StatsDisplay stats={stats} country={selectedCountry} riskLevel={riskLevel} />
          </section>
        )}

        {/* Empty State */}
        {!stats && !loading && !error && (
          <div className="empty-state">
            <p>👇 Select a country to view detailed statistics</p>
          </div>
        )}
      </main>

      <footer className="tracker-footer">
        <p>Data source: disease.sh API | Last updated: {new Date().toLocaleString()}</p>
      </footer>
    </div>
  );
};

export default CovidTracker;