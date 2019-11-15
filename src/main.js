import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { User } from './galacticAge.js';

$(document).ready(function() {
  $('#gone').click(function(){
    this.value = '';
  });
  $('.userInput').submit(function(event){
    event.preventDefault();
    let age = $('#gone').val();
    console.log(age);
    let gender = $('#gender').val();
    console.log(gender);
    let lifestyle = $('#lifestyle').val();
    console.log(lifestyle);
    let residence = $('#location').val();
    console.log(residence);
    let input = new User(age, gender, lifestyle, residence);
    console.log(input);
    $('.load').show();
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        $('#earthTime').text('You have a life expectancy of '+input.earthExpectancy()+' years. That means you will be alive about '+input.timeLeft()+' more years. Have a nice life!');
        $('#mercury').text('On Mercury, you are '+input.mercuryAge()+' solar years old and you will probably live about '+input.mercuryExpectancy()+' more solar years there.');
        $('#venus').text('On Venus, you are '+input.venusAge()+' solar years old and you will probably live about '+input.venusExpectancy()+' more solar years there.');
        $('#mars').text('On Mars, you are '+input.marsAge()+' solar years old and you will probably live about '+input.marsExpectancy()+' more solar years there.');
        $('#jupiter').text('On Jupiter, you are '+input.jupiterAge()+' solar years old and you will probably live about '+input.jupiterExpectancy()+' more solar years there.');
      } else {
        width += .5;
        elem.style.width = width + '%';
      }
    }
  });
});
