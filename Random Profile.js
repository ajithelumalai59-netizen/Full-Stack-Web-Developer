    async function generateUser(){
        const userDiv= document.getElementById("user");
        try{
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];
            const name = `${user.name.first}, ${user.name.second}`;
            const email = user.email;
            const location =`${user.location.city}, ${user.location.country}`;
            const picture = user.picture.large;

            userDiv.innerHTML=`
            <img src="${picture}" alt="Profile picture">
            <h2>${name}</h2>
            <h4>Email: ${email}</h4>
            <h5>Location: ${location}<h5>`

        }
        
        catch (error) {
            userDiv.innerHTML = `<p>Failed to fetch user data. Please try again.</p>`;
        }
    } 