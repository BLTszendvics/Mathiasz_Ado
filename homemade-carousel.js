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

        cardLinks[aIndex].classList.remove('anim-fade');
        cardLinks[aIndex].classList.add('anim-fade');

        cardLinks[aIndex].addEventListener('animationend',
            
            function (e) {
                
                cardLinks[aIndex].classList.remove('anim-fade');
            
            });

    }

}

let articles = [
    
    new article("Ez egy cím 0", "0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg"),
    new article("Ez egy cím 1", "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg"),
    new article("Ez egy cím 2", "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg"),
    new article("Ez egy cím 3", "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg"),
    new article("Ez egy cím 4", "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg"),
    new article("Ez egy cím 5", "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg")
    ,new article("Ez egy cím 6", "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid molestias, doloremque doloribus quibusdam est eveniet quidem inventore quo deserunt a cumque ea, iste in minus, voluptatem laboriosam neque nulla?", "#", "tesztt.jpeg")

];

let links = [];
let cardLinks = document.getElementsByClassName('hir-card');

let fi;
let li;

for (let i = 0; i < 3; i++) {

    links.push(document.getElementById('hir-' + i).children[0].children);
    
}

for (let i = 0; i < 3; i++) {

    articles[i].load(i);

}
fi = 0;
li = 2;

function Right() {

    fi += 3;
    li += 3;

    if (fi > articles.length-1) {

        fi = fi - articles.length;

    }

    if (li > articles.length-1) {

        li = li - articles.length;

    }

    let i = 0;

    for (let i = 0; i < 3; i++) {

        if (fi + i > articles.length - 1) {
            
            articles[fi+i - articles.length].load(i);

        }
        else {

            articles[fi+i].load(i);

        }

    }

}

function Left() {

    fi -= 3;
    li -= 3;

    if (fi < 0) {

        fi = articles.length + fi;

    }

    if (li < 0) {

        li = articles.length + li;

    }

    for (let i = 0; i < 3; i++) {

        if (li - i < 0) {
            
            articles[articles.length + li-i].load(2-i);

        }
        else {

            articles[li-i].load(2-i);

        }

    }

}