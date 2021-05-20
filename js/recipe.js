const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getDetails(recipeId) {
    try {
        const response = await fetch('https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/' + recipeId);
        const result = await response.json();
        console.log(result);
        
        for (let i = 0; i < result.content.length; i++){
            console.log(result.content[i])
            document.querySelector('main') += `
            <div>
                ${result.content[i].rendered}
            </div>`
        };
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger');
    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
}

getDetails(id);