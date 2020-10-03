// ------------ слои ----------------
const proprortion = 1.8;
const appFon = document.querySelector('.app-fon');
const appPotolokShadow = document.querySelector('.app-potolok__shadow');
const appPotolokOboi= document.querySelector('.app-potolok__oboi');
const appPolOboi= document.querySelector('.app-pol__oboi');
const appOboi= document.querySelector('.app-oboi');

const appColorLevel1= document.querySelector('.app-color__level1'); // блок с кнопками цвета потолка и заголовком
const blockColorPotolokButton = document.querySelector(".block-color-potolok__button"); // блок где формируются кнопки для потолка
const blockColorOboi = document.querySelector('.block-color__oboi'); // Блок с кнопками для изменения цвета стен
const blockColorOboiButton = document.querySelector(".block-color-oboi__button"); // блок где формируются кнопки для потолка

const colorPotolok = {
    '1': 'black',
    '2': 'red',
    '3': 'blue',
    '4': 'white',
    '5': 'yellow',
    '6': 'green',
    '7': 'gray',
    '8': 'orange',
    '9': 'cadetblue',
    '10': 'darkgray',
    '11': 'darkblue',
    '12': 'darkgray',
    '13': 'cadetblue',
    '14': 'darkgreen',
    '15': 'darkorange',
    '16': 'darkgray',
    '17': 'cadetblue',
    '18': 'darkgreen',
    '19': 'darkblue',
    }



// ---------кнопки------------
const appColorPotolokLevel1= document.querySelector('.app-select__colorPotolokLevel1');
const appColorOboi= document.querySelector('.app-select__oboi');


// ------- обработка событий нажатия кнопок скрытия и сокрытия слоев
appColorPotolokLevel1.addEventListener('click',function () {
    blockColorOboi.style.display = 'none';
    appColorLevel1.style.display = ((appColorLevel1.style.display == 'none') || (appColorLevel1.style.display == '')) ? 'block' :  'none';
});

appColorOboi.addEventListener('click',function () {
    appColorLevel1.style.display = 'none';
    blockColorOboi.style.display = ((blockColorOboi.style.display == 'none') || (blockColorOboi.style.display == '')) ? 'block' :  'none';

});

// ----------- Перерисовка размеров окна ------------
window.addEventListener('resize',  resizeWindow);





window.onload = function() {
    resizeWindow();

    drawButtons(blockColorPotolokButton, colorPotolok,'main-app__colorButton');
    drawButtons(blockColorOboiButton, colorPotolok, 'main-app__colorOboiButton');

    // --- Назначаем обработчик событий на нажатие кнопок выбора цвета потолка уровень 1
    var butttonsPotolokLevel1 = document.querySelectorAll('.main-app__colorButton');
    for (let i = 0 ; i < butttonsPotolokLevel1.length; i++){
        butttonsPotolokLevel1[i].addEventListener('click', changeColorPotolokLevel1);
    }
    // --- Назначаем обработчик событий на нажатие кнопок выбора цвета стен
    var butttonsOboi = document.querySelectorAll('.main-app__colorOboiButton');
    for (let i = 0 ; i < butttonsOboi.length; i++){
        butttonsOboi[i].addEventListener('click', changeColorOboi);
    }
};

function  resizeWindow() {
    let w = appFon.clientWidth;
    let h = (w / proprortion)+'px';
    appFon.style.height = h;
    appPotolokShadow.style.height = h;
    appPotolokOboi.style.height = h;
    appPolOboi.style.height = h;
    appOboi.style.height = h;
    appColorLevel1.style.height = h;
    blockColorOboi.style.height = h;

}



function drawButtons(nameDrawObject, nameMassiveColor, nameStyle) {
    for (let colorPotolokKey in nameMassiveColor) {
        let box = document.createElement('button');
        box.style.backgroundColor = colorPotolok[colorPotolokKey];
        box.innerText =  colorPotolokKey;
        box.setAttribute('data-color', colorPotolok[colorPotolokKey]);
        box.setAttribute('data-color-number', colorPotolokKey);
        nameDrawObject.insertAdjacentElement('beforeend',box);
        box.classList.add('col-4', 'col-md-2',nameStyle);
    }
}


function changeColorPotolokLevel1(){
     appPotolokOboi.style.backgroundColor = this.getAttribute('data-color');
 }
 function changeColorOboi(){
     appOboi.style.backgroundColor = this.getAttribute('data-color');
 }

 function changeColor(nameObject, buttonObject) {
     nameObject.style.backgroundColor = buttonObject.getAttribute('data-color');
 }