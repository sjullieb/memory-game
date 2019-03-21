import Card from './card.js';

export default class Board{
  constructor (width, height){
    this.width = width;
    this.height = height;
    this.cards = [];
    this.tempCard = null;
    this.potentialImages = [1,1,2,2,3,3,4,4,5,5,6,6]
  }

  // initializeImages()
  // {
  //   let arr = [];
  //   // for(let i=0; i<this.width*this.height; i++)
  //   //   arr.push(i);
  //   //
  // }

  createCards()
  {
    const numCards = this.width*this.height;
    for(let i=0; i<numCards; i++)
    {
      let card = new Card(i, "img");

      this.giveImage(card);
      this.cards.push(card);
    }
  }

  giveImage(card)
  {
    let int = Math.floor(Math.random()*this.potentialImages.length);
    card.image = this.potentialImages[int];
    this.potentialImages.splice(int, 1);

  }

  getMatch(card){
    if (this.tempCard != null && this.tempCard != card)
    {
      console.log('not empty ' + card);
      this.checkMatch(this.tempCard, card);
      this.tempCard = null;
    }
    else
    {
      console.log('empty ' + card);
      this.tempCard = card;
    }
    console.log(this.tempCard);
  }

  checkMatch(card, card2){
    if(card.image == card2.image)
    {
      card.pairFound = true;
      card2.pairFound = true;
    }
  }

  gameOver(){
    let gameIsOver = true;
    this.cards.forEach(function(card){
      if(card.hasPair==false)
      {
        gameIsOver=false;
        //break;
      }
    });
    return gameIsOver;
  }
  // initializeCards()
  // {
  //   images = [];
  //   getRandomImages();
  //   for(let i=0; i<this.height; i++)
  //   {
  //     this.cards[i] = new Array[this.width];
  //     for(let j=0; j<this.width; j++)
  //     {
  //       this.cards[i][j] = new Card(i, j, );
  //     }
  //   }
  //}
}
