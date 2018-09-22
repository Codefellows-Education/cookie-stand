'use strict';

var addLocationForm = document.getElementById('addLocation');
//var table = document.getElementById('table');

//holds the instances of the objects entered in the constructor function
var storesAll = [];

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//constructor funciton
function Locations (name, min, max, averageCookieSale) 
{
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.averageCookieSale = averageCookieSale;
  this.populate();

  storesAll.push(this);
  return this;
}

//prototypes

Locations.prototype.populateCustomersPerHour = function() {
  this.randomCustomerArray = [];
  for (var i = 0; i < timeArray.length; i++) {  
    var randomNumberOfCustomers = randomNumber(
      this.minCustomers,
      this.maxCustomers
    );
    this.randomCustomerArray.push(randomNumberOfCustomers);
  }
};

Locations.prototype.averageCookieSaleGenerator = function() {
  this.averageCookiesArray = [];
  for (var i=0; i < timeArray.length; i++) {
    var cookiesSold = Math.floor(this.randomCustomerArray[i] * this.averageCookieSale);
    this.averageCookiesArray.push(cookiesSold);
  }
};

Locations.prototype.totalNumCookies = function() {
  this.totalCookies = 0;
  for (var i = 0; i < this.averageCookiesArray.length; i++) {
    this.totalCookies += this.averageCookiesArray[i];
  }
};

Locations.prototype.populate = function() {
  this.populateCustomersPerHour();
  this.averageCookieSaleGenerator();
  this.totalNumCookies();
};

//object instances
new Locations ('1st and Pike', 23, 65, 6.3);
new Locations ('SeaTac Airport', 3, 24, 1.2);
new Locations ('Seattle Center', 11, 38, 3.7);
new Locations ('Capitol Hill', 20, 38, 2.3);
new Locations ('Alki', 2, 16, 4.6);

//functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//top row
function renderHeader (){
  //blank cell
  var thead = document.getElementsByTagName('thead')[0];
  var newTh = addElement('th', false, thead);

  //times
  for (var j = 0; j < timeArray.length; j++) {
    addElement('th', timeArray[j], thead);
  }

  //total at end
  addElement('th', 'Totals', newTh);
}

//cookie data
Locations.prototype.renderInnerTableData = function () {

  var tbody = document.getElementsByTagName('tbody')[0];
  var newTr = addElement('tr', false, tbody);

  addElement('td', this.name, newTr);

  for(var i = 0; i < timeArray.length; i++) {
    addElement('td', this.averageCookiesArray[i], newTr);
  }

  addElement('td', this.totalCookies, newTr);
};

//DOM magic function
function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  if (content) {
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  }
  parent.appendChild(newElement);
  return newElement;
}

//footer row
function renderFooter () {
  //ensures the footer is empty
  document.getElementsByTagName('tfoot')[0].innerHTML = '';
  var hourSum = [];
  var grandTotal = 0;
  for (var i = 0; i < timeArray.length; i++) {
    var hourTotal =0;
    for(var j = 0; j < storesAll.length; j++) {
      hourTotal += storesAll[j].averageCookiesArray[i];
      grandTotal += storesAll[j].averageCookiesArray[i];
    }
    hourSum.push(hourTotal);
  }
  //total hours
  //putting in the tr
  var tfoot = document.getElementsByTagName('tfoot')[0];
  var newTr = document.createElement('tr');
  tfoot.appendChild(newTr);

  var newTd = document.createElement('td');
  newTd.innerHTML='Totals';
  newTr.appendChild(newTd);

  //totals by hour
  for (var k = 0; k < hourSum.length; k++) {
    newTd = document.createElement('td');
    newTd.innerHTML = hourSum[k];
    newTr.appendChild(newTd);
  }
  //grand total
  newTd = document.createElement('td');
  newTd.innerHTML = grandTotal;
  newTr.appendChild(newTd);
}


function renderTable (){
  //clears all values from the table
  document.getElementsByTagName('tbody')[0].innerHTML = '';

  //renders each location
  for (var i = 0; i < storesAll.length; i++) {
    storesAll[i].renderInnerTableData();
  }
}


function addNewLocation(event){
  event.preventDefault();

  var newName = event.target.name.value;
  var newMin = event.target.min.value;
  var newMax = event.target.max.value;
  var newAverageCookieSale = parseFloat(event.target.averageCookieSale.value);

  var locationInstance = new Locations (newName, Number(newMin), Number(newMax), newAverageCookieSale);

  //render the last location that was entered and put into storesAll
  
  locationInstance.renderInnerTableData();
  renderFooter();
}

addLocationForm.addEventListener('submit', addNewLocation);

renderHeader();
renderTable();
renderFooter();
