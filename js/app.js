'use strict';

function numberCustomer(min, max) { //generate a random inclusize number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

//accessing the form DOM node
var addLocationForm = document.getElementById('addLocation');
var table = document.getElementById('table');

//holds the instances of the objects entered in the constructor function
var storesAll = [];

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//constructor funciton
function Locations (name, min, max, averageCookieSale) 
{
  this.name                 = name;
  this.min                  = min;
  this.max                  = max;
  this.averageCookieSale    = averageCookieSale;
  this.totalCookies         = 0;
  this.randomCustomerArray  = [];
  this.averageCookiesArray  = [];

  storesAll.push(this);
}

//prototypes
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

Locations.prototype.render = function() {
  this.customersHour();
  this.averageCookieSaleGenerator();
  this.totalNumCookies();
};

//object instances
new Locations ('1st and Pike', 23, 65, 6.3);
new Locations ('SeaTac Airport', 3, 24, 1.2);
new Locations ('Seattle Center', 11, 38, 3.7);
new Locations ('Capitol Hill', 20, 38, 2.3);
new Locations ('Alki', 2, 16, 4.6);

var position = document.getElementsByTagName('thead')[0];
var tbodyPosition = document.getElementsByTagName('tbody')[0];

//top row
function headerRow (){
  //blank cell
  var newTh = document.createElement('th');
  position.appendChild(newTh);
  table.appendChild(position);

  //times
  for (var j = 0; j < timeArray.length; j++) {
    var timeArrayText = document.createTextNode(timeArray[j]);
    newTh = document.createElement('th');
    newTh.appendChild(timeArrayText);
    position.appendChild(newTh);
  }

  //total at end
  newTh = document.createElement('th');
  var totalWord = document.createTextNode('Totals');
  newTh.appendChild(totalWord);
  position.appendChild(newTh);
}

//cookie data
Locations.prototype.renderInnerTableData = function () {

  var newTr = document.createElement('tr');
  tbodyPosition.appendChild(newTr);

  var newTd = document.createElement('td');
  var cellText = document.createTextNode(this.name);
  newTd.appendChild(cellText);
  newTr.appendChild(newTd);

  for(var i = 0; i < timeArray.length; i++) {
    newTd = document.createElement('td');
    cellText = document.createTextNode(this.averageCookiesArray[i]); 
    newTd.appendChild(cellText);
    newTr.appendChild(newTd);
  }

  newTd = document.createElement('td');
  cellText = document.createTextNode(this.totalCookies);
  newTd.appendChild(cellText);
  newTr.appendChild(newTd);

  table.appendChild(tbodyPosition);
};

// function footerRow () {

// };

function callAllFunctions (){
  // footerRow();
  for (var i = 0; i < storesAll.length; i++) {
    storesAll[i].render();
    storesAll[i].renderInnerTableData();
  }
}

function addNewLocation(event){
  event.preventDefault();

  var newName = event.target.name.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newAverageCookieSale = parseFloat(event.target.averageCookieSale.value);

  new Locations (newName, newMin, newMax, newAverageCookieSale);

  // console.log(storesAll[storesAll.length-1]);
  tbodyPosition.innerHTML = '';
  callAllFunctions();



}

addLocationForm.addEventListener('submit', addNewLocation);
headerRow();
callAllFunctions();

