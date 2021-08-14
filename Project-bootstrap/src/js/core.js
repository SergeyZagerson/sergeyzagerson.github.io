"use strict"

let price = {
    type:{
        1: ["Лендинг", 600],
        2: ["Корпоротивный", 1200],
        3: ["Новости", 2000],
        4: ["Блог", 400],
    },
    disign:{
        1: ["Гибкий", 400],
        2: ["Динамический", 800],
        3: ["Полиграфический", 1000],
        4: ["Комбинированый", 500],
    },
    adaptability:{
        1: ["ПК, Ноутбуки, Нетбуки", 400],
        2: ["Смартфоны, Планшеты", 1200]
    }

};

function calc(type, disign, adaptability){
    return type + disign + adaptability;
}

let typeWeb,
    typeDisign,
    typeAdaptive;

while(true){

typeWeb = Number(prompt("Тип сайта?" + "\n 1 - " + price.type[1][0] + " : " + price.type[1][1] + "\n 2 - " + price.type[2][0] + " : " + price.type[2][1] 
                +  "\n 3 - " + price.type[3][0] + " : " + price.type[3][1] + "\n 4 - " + price.type[4][0] + " : " + price.type[4][1]));

    if(typeWeb > 0 && typeWeb < 5) {
        break;
    }
    else{
        alert("Введите корректное значение!");
        continue;
    }
};


while(true){

    typeDisign = Number(prompt("Дизайн?" + "\n 1 - " + price.disign[1][0] + " : " +  price.disign[1][1] + "\n 2 - " + price.disign[2][0] + " : " + price.disign[2][1] 
                    + "\n 3 - " + price.disign[3][0] + " : " +  price.disign[3][1] + "\n 4 - " +  price.disign[4][0] + " : " + price.disign[4][1]));

    if( typeDisign > 0 && typeDisign < 5){
        break;
    }
    else{
        alert("Введите корректное значение!");
        continue;
    }
};

while(true){

typeAdaptive = Number(prompt("Адаптивность?" + "\n 1 - " + price.adaptability[1][0] + " : " + price.adaptability[1][1] 
                        + "\n 2 - " + price.adaptability[2][0] + " : " + price.adaptability[2][1]));

    if( typeAdaptive > 0 && typeAdaptive < 3){
        break;
    } 
    else{
        alert("Введите корректное значение!");
        continue;
    }        
};

let result = calc(price.type[typeWeb][1], price.disign[typeDisign][1], price.adaptability[typeAdaptive][1]);

confirm("Правильно?\n" + price.type[typeWeb][0] + "\n" + price.disign[typeDisign][0] + "\n" + price.adaptability[typeAdaptive][0] + "\nНа сумму - " + result + "р");