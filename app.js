'use strict'

let leftImageElement = document.getElementById('leftImage');

let middleImgeElement = document.getElementById('middleImage');

let rightimgeElement = document.getElementById('rightImage');

console.log(leftImageElement, middleimgeElement, rightImageElement)


let maxAttempts = 10;
let userAttempetsCounter = 0

let leftImageElement;
let middleImgeElement;
let rightingalement;
function fov(name, src) {
    this.name = name;
    this.sourse = src;
    this.votes = 0;
    this.shown = 0;
    favourites.push(this);
}
let favourites = [];
console.log(favourites);


new favouriteThings('bag', 'img/bag.jpg')
new favouriteThings('banana', 'img/banana.jpg')
new favouriteThings('boots', 'img/boots.jpg')
new favouriteThings('bathroom', 'img/bathroom.jpg')
new favouriteThings('breakfast', 'img/breakfast.jpg')
new favouriteThings('bubblegum', 'img/bubblegum.jpg')
new favouriteThings('chair', 'img/chair.jpg')
new favouriteThings('cthulhu', 'img/cthulhu.jpg')
new favouriteThings('dog-duck', 'img/dog-duck.jpg')
new favouriteThings('dragon', 'img/dragon.jpg')
new favouriteThings('pen', 'img/pen.jpg')
new favouriteThings('pet-sweep', 'img/pet-sweep.jpg')
new favouriteThings('scissors', 'img/scissors.jpg')
new favouriteThings('sweep.png', 'img/sweep.png')
new favouriteThings('tauntaun', 'img/tauntaun.jpg')
new favouriteThings('unicorn', 'img/unicorn.jpg')
new favouriteThings('water-can', 'img/water-can.jpg')
new favouriteThings('wine-glass', 'img/wine-glass.jpg')


function getRandomIndex() {
    return Math.floor(Math.random() * favourites.length)
}
console.log(getRandomIndex());
function renderThreeImages() {
    leftImageIndex = getRandomIndex();
    middleImgeElement = getRandomIndex();
    rightImageElement = getRandomIndex();



    while (leftImageIndex === rightImageIndex || leftImageIndex === middleImgeElement) {
        leftImageIndex = getRandomIndex();
        middleImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();

    }

    leftImageElement.src = favourites[leftImageIndex].sourse;
    middleImgeElement.src = favourites[middleIndex].sourse;
    rightImageElement.src = favourites[rightImageIndex].sourse;

    favourites[leftImageIndex].shown++;
    favourites[middleImageIndex].shown++;
    favourites[rightImageIndex].shown++;


    leftImageElement = favourites[leftImageIndex].name;
    middleimgeElement = favourites[middleImageIndex].name;
    favourites[rightImageIndex].name;

}
renderThreeImages();
let button;

let imagesDiv - document.getElementById('images-div');
imagesDiv.addEventListener('click' , handleUserClick);

function handleUserClick(event){
    console.log(event.target.id);
     if(userAttempetsCounter<=maxAttempts){
         if(event.target.id==='left-image'){favourites[leftImageIndex].votes++;}
         console.log(favourites[leftImageIndex])
     }
     else if (event.target.id==='middle.image'){
     favourites[middleImageIndex].votes++;
     console.log(favourites[middleImageIndex]);
     }
     else if (event.target.id==='right.image'){
        favourites[rightImageIndex].votes++;
      console.log(favourites[rightImageIndex]);


      renderThreeImages();
    }else{ 
        imagesDiv.removeEventListener('click',handleUserClick);
        button-document.createElement('button')
        console.log(div);
        button.textContent='show result';
        button.addEventListener('click',buttonResult);

        let list =document.getElementById('results-list');
        for (let i = 0; i < favourites.length; i++) {
            let lustItem=document.createElement('li');
            list.appendChild(listItem);

          
        }


        

}




