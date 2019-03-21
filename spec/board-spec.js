import Board from './../src/board.js';
import Card from './../src/card.js';

describe('board', function(){
  let board;

  beforeEach(function() {
    board = new Board(4, 4);
  });

  it('initializes all cards', function(){
    board.createCards();
    expect(board.cards.length).toEqual(16);
  });

  it('checkMatch fail', function(){
    let card1 = new Card('img1');
    let card2 = new Card('img2');
    board.checkMatch(card1, card2);
    expect(card1.pairFound).toEqual(false);
  });

  it('checkMatch pass', function(){
    let card1 = new Card('img');
    let card2 = new Card('img');
    board.checkMatch(card1, card2);
    expect(card1.pairFound).toEqual(true);
  });
});
