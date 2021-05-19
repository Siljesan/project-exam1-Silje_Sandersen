const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        result.forEach(element => {
            //count++
            document.querySelector('.cookbook').innerHTML += `
            <a href="recipe.html?id=${element.id}"><div class="cookbook__post">
            <div class="cookbook__post--img"><img href=""></div>
            <h2>${element.title.rendered}</h2>
            <a href="recipe.html?id=${element.id}"><button class="cookbook__post--btn">Check out recipe!</button></a>
            </div></a>`
        });

            //for(let i = 0; i < result.length; i++){
            //    console.log(result[i])
            //    if(i==2){
            //        break
            //    }
            // document.querySelector('main').innerHTML += `
            //<div class="home__post">
            //<div class="home__post--info">
            //<h2>${result[i].title}</h2>
            //<p>${result[i].id}</p>
            //</div>
            //<div class="home__post--img"></div>
            //</div>`   
            //};

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getPosts(baseUrl);