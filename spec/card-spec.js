import Board from './../src/board.js';
import Card from './../src/card.js';

describe('Card', function(){
  let board;
  beforeEach(function(){
    board = new Board(4, 4)
  })
  it('getImage gives card image', function(){
    let card = new Card();
    let potentialImages = [1,2,3,4,5];
    let int = Math.floor(Math.random()*potentialImages.length);
    let expectedImage = potentialImages[int];
    card.getImage(int, potentialImages);
    expect(card.image).toEqual(expectedImage);
  });

  it('getImage removes correct image from potentials', function(){
    let card = new Card();
    let potentialImages = [1,2,3,4,5];
    let int = Math.floor(Math.random()*potentialImages.length);
    let expectedImage = potentialImages[int];
    card.getImage(int, potentialImages);
    expect(potentialImages).not.toContain(int);
  });
});
