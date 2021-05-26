
async function getSlide(url) {
    try{
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        result.forEach(element => {
            document.querySelector('.mySlide').innerHTML += `
            <div class="sliderCard"><a href="recipe.html?id=${element.id}">
            <img src="${element.better_featured_image.source_url}">
            <div class="sliderCard__title"><h3>${element.title.rendered}</h3></div
            </a></div>`
        });

        slider();

    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser('An error occured','danger')
    } finally {
        setTimeout(function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};

getSlide(baseUrl);

function slider(){
    $('.mySlide').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });  
}