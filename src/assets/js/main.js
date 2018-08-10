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
      cars:[1,2,3,4,5,6,7,8,9,10,11]
    }
  })