const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getDetails(recipeId) {
    try {
        const response = await fetch('https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/' + recipeId);
        const result = await response.json();
        console.log(result);
        console.log(result.content.rendered)

        document.querySelector('.loading').classList.add('hide');

        document.title = `What's Cookin' | ${result.title.rendered}`;

            document.querySelector('main').innerHTML += `
            <h1>${result.title.rendered}</h1>
            <section class="recipe-container">
                ${result.content.rendered}
            </section>`

            document.getElementsByClassName('recipeHero--img').onclick = function(){
                document.getElementById('myModal').style.display = 'block';
                document.getElementById('img01').src = this.src;
            }

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger');
    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
}

getDetails(id);