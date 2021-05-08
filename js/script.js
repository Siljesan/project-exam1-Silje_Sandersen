const baseUrl = 'http://api.siljes.tech/wp-json/wp/v2/posts/';

async function getPosts(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        //console.log(result);

        result.forEach(element => {
            //console.log(element);
            for(let i = 0; i < element.title.length; i++){
                console.log(element.title[i])
             document.querySelector('main').innerHTML += `
            <div>
            <h2>${element.title}</h2>
            <p>${element.id}</p>
            </div>`   
            }
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