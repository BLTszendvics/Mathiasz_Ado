var home = document.getElementById('idekellfeltolteni');

function upload() {

    let t = "";

    for (let i = 0; i < 10; i++) {

        let x = '';

        if (i == 0) {

            x = 'active';

        }

        t += '<div class="carousel-item ' + x + '" data-bs-interval="10000"><img src="images/galeria/img' + i + '.jpg" class="d-block w-100" alt="Galéria Fénykép"></div>'

    }

    home.innerHTML = t;

}

window.addEventListener('load', upload);