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
	card.nextInSuit = makeCard.nextInSuit;
	card.prevInSuit = makeCard.prevInSuit;
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
        return(this.color()===cardObj.color());
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

var card34 = makeCard(34);
var card13 = makeCard(13);
console.log(card34.rank());
console.log(card34.suit());
console.log(card34.cardID());
console.log(card34.color());
//console.log(card34.name()); //getting card.name is not a function error ?
console.log(card13.precedes(card34));

//1b) assertions

var card0 = makeCard(0);
var card3 = makeCard(3);
var card51 = makeCard(51);
var card1 = makeCard(1);
var card2 = makeCard(2);
var card4 = makeCard(4);
var card13 = makeCard(13);
var card3 = makeCard(3);
var card30 = makeCard(30);
var card5 = makeCard(5);
var card51 = makeCard(51);
var card4 = makeCard(4);
var card50 = makeCard(50);
var card48 = makeCard(48);

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(card0.rank()===1,"Test 1 failed");
assert(card3.rank()===1,"Test 2 failed");
assert(card51.rank()===13,"Test 3 failed");
assert(card0.suit()===1,"Test 4 failed");
assert(card5.suit()===2,"Test 5 failed");
assert(card51.suit()===4,"Test 6 failed");
assert(card0.cardID()===0,"Test 7 failed");
assert(card51.cardID()===51,"Test 8 failed");
assert(card30.cardID()===30,"Test 9 failed");
assert(card0.color()==='red',"Test 10 failed");
assert(card2.color()==='black',"Test 11 failed");
//assert(alias.name(5)==='Two of Diamonds',"Test 12 failed");
//assert(alias.name(51)==='King of Clubs',"Test 13 failed");
assert(!card0.precedes(card1),"Test 14 failed");
assert(card0.precedes(card5),"Test 15 failed");
assert(card51.precedes(card0),"Test 16 failed");
assert(card50.precedes(card2),"Test 17 failed");
assert(card0.sameColor(card1),"Test 18 failed");
assert(!card1.sameColor(card2),"Test 19 failed");
assert(card0.nextInSuit()===4,"Test 20 failed");
assert(card51.nextInSuit()===3,"Test 21 failed");
assert(card48.nextInSuit()===0,"Test 22 failed");
assert(card0.prevInSuit()===48,"Test 23 failed");
assert(card3.prevInSuit()===51,"Test 24 failed");
assert(card5.prevInSuit()===1,"Test 25 failed");

//1c) assertions that functions are shared / not copies

assert((card5.prevInSuit===card0.prevInSuit),"Test 26 failed");
assert((card5.prevInSuit===makeCard.prevInSuit),"Test 27 failed");
assert((card1.rank===makeCard.rank),"Test 28 failed");
assert((card1.rank===card51.rank),"Test 28 failed");

//2) Stacking the Deque

function makeDeque(inputValues){
 	var deque = {};
 	deque.values = [];
 	for (var i = 0; i < inputValues.length; i++){
 		deque.values[i] = inputValues[i];
 	}
 	deque.top = makeDeque.top;
 	deque.bottom = makeDeque.bottom;
 	deque.push = makeDeque.push;
 	deque.pop = makeDeque.pop;
 	deque.shift = makeDeque.shift;
 	deque.unshift = makeDeque.unshift;
 	deque.cut = makeDeque.cut;
 	deque.sort = makeDeque.sort;
 	deque.map = makeDeque.map;
 	return deque;

}
makeDeque.top = function() {
	o = this.values[(this.values.length)-1]
	console.log(o);
	return o;
}
makeDeque.bottom = function() {
	o = this.values[0]
	return o;
}

makeDeque.pop = function() {
	this.values.pop();
}
makeDeque.push = function(val) {
	this.values.push(val);
    return val;
}

makeDeque.shift = function() {
	//...
};
makeDeque.unshift = function(val) {
	//...
};

makeDeque.cut = function(offset) {
	//...
};

makeDeque.map = function(convertValFn) {
	//...
};

makeDeque.sort = function(compareValsFn) {
	//...
};

//testing
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deque1 = makeDeque(arr1);
console.logt(deque1.top());


var someCards = /* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1

//-------
// Part b): build a deque instance:
var deckOfCards = makeDeque(someCards);
// sort it:
deckOfCards.sort(/* something here */);
// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(/* something different here */);

//-------
// Part c): build another deque instance:
var someNames = /* make array of student/TA names here */;
var deckOfNames = makeDeque(someNames);
deckOfNames.sort(/* something here */);

