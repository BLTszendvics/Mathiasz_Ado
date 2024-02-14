class article {

    title;
    description;
    link;
    image;

    constructor(_title, _description, _link, _image) {

        this.title = _title;
        this.description = _description;
        this.link = _link;
        this.image = _image;

    }

    load(aIndex) {



        links[aIndex][0].src = "images/" + this.image;
        links[aIndex][2].innerHTML = this.title;
        links[aIndex][3].innerHTML = this.description;
        //links[aIndex][4].

        
        Rem(aIndex, "megnyomva");
        
        cardLinks[aIndex].classList.add('anim-fade');
        cardLinks[aIndex].style.animationPlayState = "running";

        

    }

}

function Rem(aIndex, g) {

    cardLinks[aIndex].style.animationPlayState = "paused";
    cardLinks[aIndex].style.opacity = "1";
    cardLinks[aIndex].classList.remove('anim-fade');
    cardLinks[aIndex].offsetWidth;

}

let articles = [
    
    new article("Ez egy cím 0", "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "google.com", "/galeria/img0.jpg"),
    new article("Ez egy cím 1", "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img1.jpg"),
    new article("Ez egy cím 2", "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img2.jpg"),
    new article("Ez egy cím 3", "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img3.jpg"),
    new article("Ez egy cím 4", "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img4.jpg"),
    new article("Ez egy cím 5", "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img5.jpg")
    ,new article("Ez egy cím 6", "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "/galeria/img6.jpg")

];

let links = [];
let cardLinks = document.getElementsByClassName('card-anim');

let fi = 0;
let li = 0;

let hirC = 1;

function Right() {

    fi += hirC;
    li += hirC;

    if (fi > articles.length-1) {

        fi = fi - articles.length;

    }

    if (li > articles.length-1) {

        li = li - articles.length;

    }

    let i = 0;

    for (let i = 0; i < hirC; i++) {

        if (fi + i > articles.length - 1) {
            
            articles[fi+i - articles.length].load(i);

        }
        else {

            articles[fi+i].load(i);

        }

    }

    /*for (let i = 0; i < cardLinks.length; i++) {

        cardLinks[i].style.animationPlayState = "paused";
        cardLinks[i].style.opacity = "1";
        cardLinks[i].classList.remove('anim-fade');

    }*/

    

}

function Left() {

    fi -= hirC;
    li -= hirC;

    if (fi < 0) {

        fi = articles.length + fi;

    }

    if (li < 0) {

        li = articles.length + li;

    }

    for (let i = 0; i < hirC; i++) {

        if (li - i < 0) {
            
            articles[articles.length + li-i].load(hirC-1-i);

        }
        else {

            articles[li-i].load(hirC-1-i);

        }

    }

    /*for (let i = 0; i < cardLinks.length; i++) {

        cardLinks[i].classList.add('anim-fade');
        cardLinks[i].style.animationPlayState = "running";

    }*/

}

let wC = -1;

function setDatas() {

    let a = window.innerWidth;

    if (a < 1300) {

        hirC = 1;

        li = fi;

    }
    else if (a < 1800) {

        li = fi + 1;

        hirC = 2;

        if (wC != -1 && wC < hirC) {

            for (let i = 1; i < hirC; i++) {

                articles[fi+i].load(i);

            }

        }

    }
    else {

        li = fi + 2;

        hirC = 3;

        if (wC != -1 && wC < hirC) {

            for (let i = 1; i < hirC; i++) {

                articles[fi+i].load(i);

            }

        }

    }

    wC = hirC;

}

window.addEventListener('resize', function(event){

    setDatas();

});

setDatas();

for (let i = 0; i < 3; i++) {

    links.push(document.getElementById('hir-' + i).children[0].children[0].children);
    
}

for (let i = 0; i < hirC; i++) {

    cardLinks[i].addEventListener('animationend',
            
        function (e) {
                
            Rem(i, "lejart");
            
    });

    articles[i].load(i);

}

function newPage(ii) {

    window.open(articles[fi+ii].link, '_blank');

}