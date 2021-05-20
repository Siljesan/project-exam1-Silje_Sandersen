const baseUrl = 'https://noroffcors.herokuapp.com/'+'http://api.siljes.tech/wp-json/wp/v2/posts/';
//let slideIndex = 0;
//showSlides();

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        result.forEach(element => {
    //count++
        document.querySelector('main').innerHTML += `
        <a href="recipe.html?id=${element.id}"><div class="home__post">
        <div class="home__post--info">
        <h2>${element.title.rendered}</h2>
        <p>${element.excerpt.rendered}</p>
        </div>
        <div class="home__post--img"><img href=""></div>
        </div></a>`
        });
        //    result.forEach(element => {
            //count++
        //    document.querySelector('.slide-container').innerHTML += `
        //    <div class="slide fade">
        //    <img class="slide__img" src="" alt="">
        //    <h3 class="slide__caption">${element.title.rendered}</h3>
        //    </div>`
        //    });

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getPosts(baseUrl);

//function showSlides() {
//    const slides = document.querySelector('.slide');
//    for (let i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if(slideIndex > slides.length) {slideIndex = 1}
//    slides[slideIndex-1].style.display = "block";
//    setTimeout(showSlides, 2000);
//}

