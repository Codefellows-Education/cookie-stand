'use strict'

function numberCustomer(min, max) { //generate a random inclusize number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function Locations (min, max, averageCookieSale, totalCookies, randomCustomerArray, averageCookiesArray) {
  this.min = min;
  this.max = max;
  this.averageCookieSale = averageCookieSale;
  this.totalCookies = totalCookies;
  this.randomCustomerArray = randomCustomerArray;
  this.averageCookiesArray = averageCookiesArray;
  this.customersHour = function () {
      for (var i = 0; i < timeArray.length; i++) {  
        this.randomCustomerArray.push(numberCustomer(this.min, this.max));
      }
    };
    this.averageCookieSaleGenerator = function () { //generates the number of cookies sold each hour based on teh average cookie sales and the randomCustomerArray
    for (var i=0; i < timeArray.length; i++) {
      var mult = Math.floor(this.randomCustomerArray[i] * this.averageCookieSale);
      this.averageCookiesArray.push(mult);
    }
  };
  this.totalNumCookies = function() { //generates the total number of cookies
    for (var i = 0; i < this.averageCookiesArray.length; i++) {
      this.totalCookies += this.averageCookiesArray[i];
    }
  };
};

var firstPike = new Locations (23, 65, 6.3, 0, [], []);
var seaTacAirport = new Locations (3, 24, 1.2, 0, [], []);
var seattleCenter = new Locations (11, 38, 63.7, 0, [], []);
var capitolHill = new Locations (20, 38, 2.3, 0, [], []);
var alki = new Locations (2, 16, 4.6, 0, [], []);

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


//////////////////////////////old code///////////////////////////
//first and Pike
var newLi;
var parentEl;
for (var i=0; i < timeArray.length; i++) {
  newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + firstPike.averageCookiesArray[i] + ' cookies ';
  parentEl = document.getElementById('Pikes');
  parentEl.appendChild(newLi);
}

var lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + firstPike.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Sea Tac Airport
for (i=0; i < timeArray.length; i++) {
  newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + seaTacAirport.averageCookiesArray[i] + ' cookies ';
  parentEl = document.getElementById('seaTac');
  parentEl.appendChild(newLi);
}
lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + seaTacAirport.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Seattle Center
for (i=0; i < timeArray.length; i++) {
  newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + seattleCenter.averageCookiesArray[i] + ' cookies ';
  parentEl = document.getElementById('seattleCenter');
  parentEl.appendChild(newLi);
}
lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + seattleCenter.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Capitol Hill
for (i=0; i < timeArray.length; i++) {
  newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + capitolHill.averageCookiesArray[i] + ' cookies ';
  parentEl = document.getElementById('capitolHill');
  parentEl.appendChild(newLi);
}
lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + capitolHill.totalCookies + 'cookies';
parentEl.appendChild(lastLi);

//Alki
for (i=0; i < timeArray.length; i++) {
  newLi = document.createElement('li');
  newLi.textContent = timeArray[i] + ': ' + alki.averageCookiesArray[i] + ' cookies ';
  parentEl = document.getElementById('alki');
  parentEl.appendChild(newLi);
}
lastLi = document.createElement('li');
lastLi.textContent = 'Total: ' + alki.totalCookies + 'cookies';
parentEl.appendChild(lastLi);
