// Write your solution in this file!
var customerName = 'bob';

// Function to return the customerName.

function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Output: 'not bob'

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}



 // Output: 'maybe bob'

const leastFavoriteCustomer = 'Alice';


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob'; // This will result in an error.
}

// Call the function (will throw a TypeError).
