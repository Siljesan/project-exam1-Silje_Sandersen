const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getDetails(recipeId) {
    try {
        const response = await fetch('https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/' + recipeId);
        const result = await response.json();
        console.log(result);
        console.log(result.content.rendered)

            document.querySelector('main').innerHTML += `
            <h1>${result.title.rendered}</h1>
            <section>
                ${result.content.rendered}
            </section>`

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger');
    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
}

getDetails(id);