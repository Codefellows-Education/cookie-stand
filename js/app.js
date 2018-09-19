'use strict'

function numberCustomer(min, max) { //generate a random inclusize number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

var storesAll = [];

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function Locations (name, min, max, averageCookieSale, totalCookies, randomCustomerArray, averageCookiesArray) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.averageCookieSale = averageCookieSale;
  this.totalCookies = totalCookies;
  this.randomCustomerArray = randomCustomerArray;
  this.averageCookiesArray = averageCookiesArray;
  storesAll.push(this);
};

Locations.prototype.render = function() {
  this.customersHour();
  this.averageCookieSaleGenerator();
  this.totalNumCookies();
};


Locations.prototype.customersHour = function() {
  for (var i = 0; i < timeArray.length; i++) {  
    this.randomCustomerArray.push(numberCustomer(this.min, this.max));
    }
};

Locations.prototype.averageCookieSaleGenerator = function() {
  for (var i=0; i < timeArray.length; i++) {
    var mult = Math.floor(this.randomCustomerArray[i] * this.averageCookieSale);
    this.averageCookiesArray.push(mult);
  }
};

Locations.prototype.totalNumCookies = function() {
  for (var i = 0; i < this.averageCookiesArray.length; i++) {
    this.totalCookies += this.averageCookiesArray[i];
  }
};

new Locations ('1st and Pike', 23, 65, 6.3, 0, [], []);
new Locations ('SeaTac Airport', 3, 24, 1.2, 0, [], []);
new Locations ('Seattle Center', 11, 38, 63.7, 0, [], []);
new Locations ('Capitol Hill', 20, 38, 2.3, 0, [], []);
new Locations ('Alki', 2, 16, 4.6, 0, [], []);

for (var i = 0; i < storesAll.length; i++) {
  storesAll[i].render();
}

var newTr = document.createElement('tr');
var newTh = document.createElement('th');
var newTd = document.createElement('td');
var position = document.getElementsByTagName('thead')[0];
var tbodyPosition = document.getElementsByTagName('tbody')[0];

//top row
function headerRow (){
  //blank cell
  var newTh = document.createElement('th');
  var blank = document.createTextNode('');
  newTh.appendChild(blank);
  position.appendChild(newTh);

  //times
  for (var j = 0; j < timeArray.length; j++) {
  var timeArrayText = document.createTextNode(timeArray[j]);
  newTh = document.createElement('th');
  newTh.appendChild(timeArrayText);
  position.appendChild(newTh);
  };

  //total at end
  newTh = document.createElement('th');
  var totalWord = document.createTextNode('Totals');
  newTh.appendChild(totalWord);
  position.appendChild(newTh);
};

var cookiesNumber = function () {
  for (var l = 0; l < storesAll.length; l++) {
    var newTr = document.createElement('tr');
    tbodyPosition.appendChild(newTr);
    var name = document.createTextNode(storesAll[l].name);
    var newTd = document.createElement('td');
    newTr.appendChild(newTd);
    newTd.appendChild(name);
    for (var k = 0; k < storesAll[l].averageCookiesArray.length; k++) {
      var cookiesYum = document.createElement('td');
      var cookies = document.createTextNode(storesAll[l].averageCookiesArray[k]);
      cookiesYum.appendChild(cookies);
      newTr.appendChild(cookiesYum);
      };
    tbodyPosition.appendChild(newTr);
    var totalStore = document.createTextNode(storesAll[l].totalCookies);
    var newTdTwo = document.createElement('td');
    newTr.appendChild(newTdTwo);
    newTdTwo.appendChild(totalStore);
  };
};

function footerRow () {

};

cookiesNumber ();
headerRow();
footerRow();
