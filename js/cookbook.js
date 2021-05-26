const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts?per_page=100';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        let classChange = '';
        console.log(result);

        for(let i = 0; i < result.length; i++){

            if(i >= 10){
                classChange = 'hide'
            }
            
            document.querySelector('.cookbook__more').onclick = function(){ classChange = 'show' };

            for(let i = 0; i < result[i].title.length; i++){}
            for(let i = 0; i < result[i].excerpt.length; i++){}
            for(let i = 0; i < result[i].better_featured_image.length; i++){}
            
            document.querySelector('.cookbook').innerHTML +=  `
            <a href="recipe.html?id=${result[i].id}"><div class="cookbook__post ${classChange}">
            <div class="cookbook__post--img"><img class="featured--img" src="${result[i].better_featured_image.source_url}"></div>
            <h2>${result[i].title.rendered}</h2>
            <a href="recipe.html?id=${result[i].id}"><button class="cookbook__post--btn">Check out recipe!</button></a>
            </div></a>`
            
        };

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getPosts(baseUrl);