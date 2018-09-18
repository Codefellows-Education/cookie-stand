'use strict';

function numberCustomer(min, max) { //generate a random inclusize number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object for 1st and Pike
var firstPike = {
  min: 23,
  max: 65,
  averageCookieSale: 6.3,
  totalCookies: 0,
  randomCustomerArray: [], //random number of cust per hour used to calc average cookies per hour
  averageCookiesArray: [],
  
  customersHour: function () {//generates a randome number of cust each hour and populates the randomCustomerArray 
    for (var i = 0; i < timeArray.length; i++) {  
      this.randomCustomerArray.push(numberCustomer(this.min, this.max));
      //console.log (this.randomCustomerArray[i]);
    }
  },

  averageCookieSaleGenerator: function(){ //generates the number of cookies sold each hour based on teh average cookie sales and the randomCustomerArray
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.randomCustomerArray[i] * this.averageCookieSale);
      this.averageCookiesArray.push(mult);
      //console.log(this.averageCookiesArray[i]);
    }
  },

  totalNumCookies: function () {
    for (var i = 0; i < this.averageCookiesArray.length; i++) {
      this.totalCookies += this.averageCookiesArray[i];
    }
    //console.log(totalCookies);
  }
};

//console.log(firstPike.salesArray);

//console.log(firstPike.averageCookieSaleGenerator());

//Object for seaTac

var seaTacAirport = {
  min: 3,
  max: 24,
  averageCookieSale: 1.2, 
  totalCookies: 0,
  customerArray: [], //random number of cust per hour used to calc average cookies per hour
  cookiesArray: [],
  
  customersHour: function() {
    for (var i = 0; i < timeArray.length; i++) {
      this.customerArray.push(numberCustomer(this.min, this.max));
      //console.log(this.randomCustomerArray);
    }
  },

  averageCookieSaleGenerator: function(){
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.customerArray[i] * this.averageCookieSale);
      this.cookiesArray.push(mult); 
      //console.log(this.mult);
    }
  },

  totalNumCookies: function () {
    for (var i = 0; i < this.cookiesArray.length; i++) {
      this.totalCookies += this.cookiesArray[i];
    }
    //console.log(totalCookies);
  }
};


//object for seattle center

var seattleCenter = {
  min: 11,
  max: 38,
  averageCookieSale: 3.7,
  totalCookies: 0,
  customerArray: [], //random number of cust per hour used to calc average cookies per hour
  cookiesArray: [],
  customersHour: function() {
    for (var i = 0; i < timeArray.length; i++) {
      this.customerArray.push(numberCustomer(this.min, this.max));
      //console.log(this.randomCustomerArray);
    }
  },

  averageCookieSaleGenerator: function(){
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.customerArray[i] * this.averageCookieSale);
      this.cookiesArray.push(mult); 
      //console.log(this.mult);
    }
  },

  totalNumCookies: function () {
    for (var i = 0; i < this.cookiesArray.length; i++) {
      this.totalCookies += this.cookiesArray[i];
    }
    //console.log(totalCookies);
  }
};


//capital Hill object
var capitolHill = {
  min: 20,
  max: 38,
  averageCookieSale: 2.3,
  totalCookies: 0,
  customerArray: [], 
  cookiesArray: [],
  
  customersHour: function (){
    for (var i = 0; i < timeArray.length; i++) {
      this.customerArray.push(numberCustomer(this.min, this.max));
      //console.log(this.randomCustomerArray);
    }
  },

  averageCookieSaleGenerator: function() {
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.customerArray[i] * this.averageCookieSale);
      this.cookiesArray.push(mult); 
      //console.log(this.mult);
    }
  },

  totalNumCookies: function () {
    for (var i = 0; i < this.cookiesArray.length; i++) {
      this.totalCookies += this.cookiesArray[i];
    }
    //console.log(totalCookies);
  }
}

//Alki
var alki = {
  min: 2,
  max: 16,
  averageCookieSale: 4.6,
  totalCookies: 0,
  customerArray: [],
  cookiesArray: [],
  customersHour: function (){
    for (var i = 0; i < timeArray.length; i++) {
      this.customerArray.push(numberCustomer(this.min, this.max));
      //console.log(this.randomCustomerArray);
    }
  },

  averageCookieSaleGenerator: function() {
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.customerArray[i] * this.averageCookieSale);
      this.cookiesArray.push(mult); 
      //console.log(this.mult);
    }
  }, 

  totalNumCookies: function () {
    for (var i = 0; i < this.cookiesArray.length; i++) {
      this.totalCookies += this.cookiesArray[i];
    }
    //console.log(totalCookies);
  }
}

//calling my functions

firstPike.customersHour();
firstPike.averageCookieSaleGenerator();
firstPike.totalNumCookies();
seaTacAirport.customersHour();
seaTacAirport.averageCookieSaleGenerator();
seaTacAirport.totalNumCookies();
seattleCenter.customersHour();
seattleCenter.averageCookieSaleGenerator();
seattleCenter.totalNumCookies();
capitolHill.customersHour();
capitolHill.averageCookieSaleGenerator();
capitolHill.totalNumCookies();
alki.customersHour();
alki.averageCookieSaleGenerator();
alki.totalNumCookies();

//DOM interaaction
//first and Pike
for (var i=0; i < timeArray.length; i++) {
  var newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + firstPike.averageCookiesArray[i] + ' cookies ';
  var parentEl = document.getElementById('firstPike');
  parentEl.appendChild(newLi);
};
var lastLi = document.createElement('li');
  lastLi.textContent = 'Total: ' + firstPike.totalCookies + 'cookies';
  parentEl.appendChild(lastLi);

//Sea Tac Airport
for (var i=0; i < timeArray.length; i++) {
  var newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + seaTacAirport.cookiesArray[i] + ' cookies ';
  var parentEl = document.getElementById('seaTac');
  parentEl.appendChild(newLi);
};
var lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + seaTacAirport.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Seattle Center
for (var i=0; i < timeArray.length; i++) {
  var newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + seattleCenter.cookiesArray[i] + ' cookies ';
  var parentEl = document.getElementById('seattleCenter');
  parentEl.appendChild(newLi);
};
var lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + seattleCenter.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Capitol Hill
for (var i=0; i < timeArray.length; i++) {
  var newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + capitolHill.cookiesArray[i] + ' cookies ';
  var parentEl = document.getElementById('capitolHill');
  parentEl.appendChild(newLi);
};
var lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + capitolHill.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Alki
for (var i=0; i < timeArray.length; i++) {
  var newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + alki.cookiesArray[i] + ' cookies ';
  var parentEl = document.getElementById('alki');
  parentEl.appendChild(newLi);
};
var lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + alki.totalCookies + 'cookies';
parentEl.appendChild(lastLi);