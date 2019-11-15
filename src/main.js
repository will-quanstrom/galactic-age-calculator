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
    $('.load').show();
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
      } else {
        width += .5;
        elem.style.width = width + '%';
      }
    }
  });
});
