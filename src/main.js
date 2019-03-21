import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './board.js';
import Card from './card.js';
// import Charmander from './charmander.png';
//
//
//
// var myCharmander = new Image();
// myCharmander.src = Charmander;
//
// element.appendChild(myCharmander)
let board;
const image_links =["https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png",
"https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/1200px-025Pikachu.png",
"https://cdn.bulbagarden.net/upload/7/73/004Charmander.png",
"https://cdn.bulbagarden.net/upload/d/df/013Weedle.png",
"https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/1200px-001Bulbasaur.png",
"https://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/1200px-143Snorlax.png"];


$(document).ready(function(){

  let assignImages = function(){
    for(let i = 0; i<board.cards.length; i++)
    {
      console.log('images');
      $("#"+(i+1)).children().first().attr("src", image_links[board.cards[i].image -1]);
    }
  }

  board = new Board(4,3);
  board.createCards();
  console.log(board);
  assignImages();

  let reloadImages = function(){
    console.log('reloading');
    for(let i = 0; i<board.cards.length; i++)
    {
      if (board.cards[i].pairFound)
      {
        $("#"+(i+1)).children().first().removeClass("hidden");
      }
      else
      {
        $("#"+(i+1)).children().first().addClass("hidden");
      }
    }
    if (board.tempCard != null)
    {
      $("#"+(board.tempCard.id+1)).children().first().removeClass("hidden");
    }
  }

  $("#1").click(function(){
    board.getMatch(board.cards[0]);
    console.log("this is " + this)
    $("#1").children().first().removeClass("hidden");
    setTimeout(reloadImages, 2000);
    //$("#squirtle1").show();
  });


  $("#2").click(function(){
    board.getMatch(board.cards[1]);
    $("#2").children().first().removeClass("hidden");
    setTimeout(reloadImages, 2000);
  });

  $("#3").click(function(){
    board.getMatch(board.cards[2]);
    reloadImages();
  });

  $("#4").click(function(){
    board.getMatch(board.cards[3]);
    reloadImages();
  });

  $("#5").click(function(){
    board.getMatch(board.cards[4]);
    reloadImages();
  });

  $("#6").click(function(){
    board.getMatch(board.cards[5]);
    reloadImages();
  });

  $("#7").click(function(){
    board.getMatch(board.cards[6]);
    reloadImages();
  });

  $("#8").click(function(){
    board.getMatch(board.cards[7]);
    reloadImages();
  });

  $("#9").click(function(){
    board.getMatch(board.cards[8]);
    reloadImages();
  });

  $("#10").click(function(){
    board.getMatch(board.cards[9]);
    reloadImages();
  });

  $("#11").click(function(){
    board.getMatch(board.cards[10]);
    reloadImages();
  });

  $("#12").click(function(){
    board.getMatch(board.cards[11]);
    reloadImages();
  });


});
