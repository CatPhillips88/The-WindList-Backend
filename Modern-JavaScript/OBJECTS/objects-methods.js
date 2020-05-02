// Object Methods
// A method is an object property which its value is a function
// the 'this' keyword allows object properties to be accessed with a method

// CHALLENGE THIRTEEN 

// Create methods for seatParty where partysize is added to the guestCount
// and removePart where partysize is removed from guestCount

// seatParty - partysize + guestcount
// removeParty - partysize - guestcount

let restaurant = {
    name: 'Hisar',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
      this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
      this.guestCount = this.guestCount - partySize
    }


}



restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
