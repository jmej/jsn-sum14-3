// General Factory Pattern:
function factory(inits) {
	var instance = {};
	instance.method = factory.method;
	//...
	return instance;
}
factory.method = function() {
	// this means instance
}
var instance = factory();
instance.method();

// 1a) still more playing cards
function makeCard(id) {
	var card = {id:id};
	card.rank = makeCard.rank;
	card.suit = makeCard.suit;
	card.cardID = makeCard.cardId;
	card.color = makeCard.color;
	card.name = makeCard.name;
	card.precedes = makeCard.precedes;
	card.sameColor = makeCard.sameColor;
	//...
	return card;
}

makeCard.rank = function() {
		var id = this.id;
      	var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      	var index = Math.floor(id / 4);
      	return (ranks[index]);
	}
makeCard.suit = function() {
		var id = this.id;
        var suits = [1, 2, 3, 4];
        return (suits[(id % 4)]);
	}
makeCard.cardId = function() {
      	var id = this.id;
      	return(id);
	}
makeCard.color = function() {
		var colors = ["red", "red", "black", "black"];
      	var id = this.id;
      	return(colors[(id % 4)]);
	}
makeCard.name = function() {
       var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
       var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
       var rank = ranks[(this.rank()-1)];
       var suit = suits[(this.suit()-1)];
       return (rank + " of " + suit);
	}
makeCard.precedes = function(cardObj) {
       var A = this.rank();
       var B = cardObj.rank();
       if (A === (B-1)){
          return (true);
       }else if ((A === 13) && (B === 1)){
          return(true);
         }
        return(false);        
	}
makeCard.sameColor = function(cardObj) {
        return(this.color(cardA)===this.color(cardB));
	}

makeCard.nextInSuit = function() {
    if (this.id<48){
       return(this.id+4);
    }else{
       return(this.id-48);
       }
	}

makeCard.prevInSuit = function() {
    if (this.id>3){
       return(this.id-4);
    }else{
        return(this.id+48);
         }
	}
}

var card34 = makeCard(34);
var card13 = makeCard(13);
console.log(card34.rank());
console.log(card34.suit());
console.log(card34.cardID());
console.log(card34.color());
//console.log(card34.name()); //getting card.name a function error ?
console.log(card13.precedes(card34));

