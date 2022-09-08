const giftGivers = ["Adam", "Madeleine", "Doug"];
const event = "housewarming";

function writeCards(giftGivers, event) {

    let customCards = [];
    for (let i = 0; i < giftGivers.length; i++) {
        customCards.push(`Thank you, ${giftGivers[i]}, for the amazing ${event} gift!`);
    }
    return customCards;
    
  }

 console.log(writeCards(giftGivers, event));


function countDown(posNumber){
    while(posNumber >= 0) {
        console.log(posNumber);
        posNumber--;
    }
}
console.log(countDown(10));