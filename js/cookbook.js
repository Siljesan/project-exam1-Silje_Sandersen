const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        document.querySelector('.loading').classList.add('hide');

        result.forEach(element => {
            document.querySelector('.cookbook').innerHTML +=  `
            <a href="recipe.html?id=${element.id}"><div class="cookbook__post">
            <div class="cookbook__post--img"><img class="featured--img" src="${element.better_featured_image.source_url}"></div>
            <h2>${element.title.rendered}</h2>
            <a href="recipe.html?id=${element.id}"><button class="cookbook__post--btn">Check out recipe</button></a>
            </div></a>`
            
        });

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getPosts(baseUrl);

document.querySelector('.cookbook__more').onclick = function (){
getPosts(baseUrl + '?page=2');
document.querySelector('.cookbook__more').style.display = 'none';
};