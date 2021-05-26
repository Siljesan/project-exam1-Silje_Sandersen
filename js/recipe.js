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

            const imgUrl = result.better_featured_image.source_url;
            const imgAlt = result.better_featured_image.alt_text;
            document.getElementById('img01').innerHTML += `<img class="modal-content" src="${imgUrl}" alt="${imgAlt}">`;

            document.querySelector('.recipeHero--img').onclick = function(){
                document.getElementById('myModal').style.display = 'block';
            };

            document.querySelector('#myModal').onclick = function(){
                document.getElementById('myModal').style.display = 'none';
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