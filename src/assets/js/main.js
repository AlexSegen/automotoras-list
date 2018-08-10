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
        "km": 1713,
        "price": "$5607666.58",
        "dp": 12,
        "dpv": 78,
        "mails": 29,
        "calls": 20,
        "health": 41,
        "vistas": 118
      }, {
        "id": 2,
        "km": 6989,
        "price": "$30815220.46",
        "dp": 3,
        "dpv": 74,
        "mails": 22,
        "calls": 20,
        "health": 92,
        "vistas": 196
      }, {
        "id": 3,
        "km": 1646,
        "price": "$18170213.06",
        "dp": 66,
        "dpv": 69,
        "mails": 11,
        "calls": 4,
        "health": 29,
        "vistas": 238
      }, {
        "id": 4,
        "km": 1493,
        "price": "$14973288.62",
        "dp": 57,
        "dpv": 32,
        "mails": 18,
        "calls": 14,
        "health": 53,
        "vistas": 129
      }, {
        "id": 5,
        "km": 5250,
        "price": "$12006762.98",
        "dp": 38,
        "dpv": 76,
        "mails": 16,
        "calls": 16,
        "health": 93,
        "vistas": 207
      }, {
        "id": 6,
        "km": 8419,
        "price": "$23243993.95",
        "dp": 16,
        "dpv": 93,
        "mails": 9,
        "calls": 6,
        "health": 71,
        "vistas": 62
      }, {
        "id": 7,
        "km": 7728,
        "price": "$6807922.89",
        "dp": 82,
        "dpv": 37,
        "mails": 29,
        "calls": 5,
        "health": 41,
        "vistas": 179
      }, {
        "id": 8,
        "km": 5880,
        "price": "$27125039.45",
        "dp": 30,
        "dpv": 79,
        "mails": 17,
        "calls": 20,
        "health": 15,
        "vistas": 34
      }, {
        "id": 9,
        "km": 2800,
        "price": "$4244919.26",
        "dp": 14,
        "dpv": 79,
        "mails": 14,
        "calls": 1,
        "health": 16,
        "vistas": 295
      }, {
        "id": 10,
        "km": 4249,
        "price": "$34752821.58",
        "dp": 90,
        "dpv": 80,
        "mails": 11,
        "calls": 9,
        "health": 2,
        "vistas": 132
      }]

    }
  })