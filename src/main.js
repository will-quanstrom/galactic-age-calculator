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
    let gender = $('#gender').val();
    let lifestyle = $('#lifestyle').val();
    let residence = $('#location').val();
    let input = new User(age, gender, lifestyle, residence);
    $('.load').show();
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        if(input.age > input.earthExpectancy()){
          let diff = input.age - input.earthExpectancy();
          let mercuryDiff = diff / .24;
          let venusDiff = diff / .62;
          let marsDiff = diff / 1.88;
          let jupiterDiff = diff/ 11.86;
          $('#earthTime').text(`Wow! You outlived everybody! You are ${diff} years older than your estimated life span in earth time. That means you're ${mercuryDiff} over your average lifespan on Mercury, ${venusDiff} over on Venus, ${marsDiff} over on Mars, and only ${jupiterDiff} years over your average lifespan on Jupiter.`);
          $('#planetRow').hide();
        } else{
        $('#earthTime').text('You have a life expectancy of '+input.earthExpectancy()+' years. That means you will be alive about '+input.timeLeft()+' more years. Have a nice rest of life!');
        $('#mercury').text('On Mercury, you are '+input.mercuryAge()+' solar years old and you will probably live about '+input.mercuryExpectancy()+' more solar years there.');
        $('#venus').text('On Venus, you are '+input.venusAge()+' solar years old and you will probably live about '+input.venusExpectancy()+' more solar years there.');
        $('#mars').text('On Mars, you are '+input.marsAge()+' solar years old and you will probably live about '+input.marsExpectancy()+' more solar years there.');
        $('#jupiter').text('On Jupiter, you are '+input.jupiterAge()+' solar years old and you will probably live about '+input.jupiterExpectancy()+' more solar years there.');
        $('#planetRow').show();
      }
      } else {
        width += .5;
        elem.style.width = width + '%';
      }
    }
  });
});
