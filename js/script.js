const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        result.forEach(element => {
                document.querySelector('.postCard').innerHTML += `
                <a href="recipe.html?id=${element.id}"><div class="home__post">
                <div class="home__post--info">
                <h2>${element.title.rendered}</h2>
                <p>${element.excerpt.rendered}</p>
                </div>
                <div class="home__post--img"><img src="https://api.siljes.tech/wp-json/wp/v2/media/${element.featured_media}"></div>
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


