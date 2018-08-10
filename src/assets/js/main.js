//Delete this
//import Vue from 'vue'

$(document).ready(function(){
    console.log('Hello from main.js!');

    $(function () {
       $('[data-toggle="popover"]').popover()
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
  })

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Automotoras',
      cars:[{
        "id": 1,
        "km": 5160,
        "price": "$5190903.75",
        "dp": 60,
        "dpv": 2,
        "mails": 20,
        "calls": 14,
        "health": 48,
        "vistas": 142,
        "carmodel": "Nubira",
        "carmark": "Daewoo",
        "caryear": 2001,
        "auto": true
      }, {
        "id": 2,
        "km": 5455,
        "price": "$33029609.57",
        "dp": 36,
        "dpv": 37,
        "mails": 5,
        "calls": 20,
        "health": 52,
        "vistas": 226,
        "carmodel": "Lucerne",
        "carmark": "Buick",
        "caryear": 2007,
        "auto": true
      }, {
        "id": 3,
        "km": 6780,
        "price": "$26673323.95",
        "dp": 11,
        "dpv": 82,
        "mails": 10,
        "calls": 4,
        "health": 95,
        "vistas": 253,
        "carmodel": "Alero",
        "carmark": "Oldsmobile",
        "caryear": 1999,
        "auto": true
      }, {
        "id": 4,
        "km": 5681,
        "price": "$17066275.49",
        "dp": 96,
        "dpv": 47,
        "mails": 8,
        "calls": 1,
        "health": 97,
        "vistas": 170,
        "carmodel": "Daytona",
        "carmark": "Dodge",
        "caryear": 1984,
        "auto": false
      }, {
        "id": 5,
        "km": 2564,
        "price": "$9003234.87",
        "dp": 65,
        "dpv": 24,
        "mails": 5,
        "calls": 3,
        "health": 2,
        "vistas": 50,
        "carmodel": "S40",
        "carmark": "Volvo",
        "caryear": 2005,
        "auto": true
      }, {
        "id": 6,
        "km": 8942,
        "price": "$18977657.56",
        "dp": 92,
        "dpv": 5,
        "mails": 5,
        "calls": 20,
        "health": 90,
        "vistas": 15,
        "carmodel": "Sonoma",
        "carmark": "GMC",
        "caryear": 1994,
        "auto": false
      }, {
        "id": 7,
        "km": 2815,
        "price": "$10370393.69",
        "dp": 19,
        "dpv": 41,
        "mails": 11,
        "calls": 16,
        "health": 84,
        "vistas": 135,
        "carmodel": "S10",
        "carmark": "Chevrolet",
        "caryear": 1997,
        "auto": false
      }, {
        "id": 8,
        "km": 2028,
        "price": "$15252246.30",
        "dp": 2,
        "dpv": 34,
        "mails": 4,
        "calls": 6,
        "health": 86,
        "vistas": 48,
        "carmodel": "XJ Series",
        "carmark": "Jaguar",
        "caryear": 1999,
        "auto": true
      }, {
        "id": 9,
        "km": 7888,
        "price": "$3742843.95",
        "dp": 35,
        "dpv": 27,
        "mails": 8,
        "calls": 10,
        "health": 80,
        "vistas": 11,
        "carmodel": "Dakota Club",
        "carmark": "Dodge",
        "caryear": 1993,
        "auto": true
      }, {
        "id": 10,
        "km": 6812,
        "price": "$21613819.97",
        "dp": 36,
        "dpv": 68,
        "mails": 15,
        "calls": 19,
        "health": 85,
        "vistas": 142,
        "carmodel": "Coupe GT",
        "carmark": "Audi",
        "caryear": 1986,
        "auto": false
      }]

    }
  })