//Build a Card Counting Assistant
//In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

//Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

//Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

//User Stories:

//You should use let to declare a global variable named count and set it to 0.
//You should have a function called cardCounter.
//The cardCounter function should receive a card parameter which can either be a number or string.
//For values between 2 to 10, the card parameter will be a number.
//For all other values, the card parameter will be a string.
//The cardCounter function should modify the global count variable based on certain criteria.
//The global count variable should be increased by 1 for the cards 2, 3,4, 5, or 6
//The global count variable should remain unchanged for the cards 7, 8, 9.
//The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
//The cardCounter function should return a string with current count and the string Bet if the count is positive.
//The cardCounter function should return a string with current count and the string Hold if the count is less than or equal to 0.
//In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold.

let count = 0;
const cardCounter = card => {
  if(card>=2 && card<=6){
    count++;
  }else if(card>=7 && card<=9){
    //no change
  }else {
    count--;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cardCounter(6));
