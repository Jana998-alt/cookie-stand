function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// // // Seattle location
// const seattle = {
//     location: 'Seattle',
//     minCustomer:23,
//     maxCustomer:65,
//     avgCookiePerCustomer:6.3,
//     numOfCustomersPerHour: [],
//     cookiesArray: [],
//     totalCookies:0,
//     customersPerHour:function (){
//         let i=0;
//         let randomCustomers = 0;
//         for(i; i<14;i++){
//             randomCustomers=randomValue(23, 65);
//             this.numOfCustomersPerHour.push(randomCustomers);
//         }
        
//     },
//     cookiesPerHour:function(){
//         let i = 0;
//         let clock='';
//         for(i; i<14;i++){
//             cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
//             cookies = Math.ceil(cookies);
//             if(i<6){
//                 clock = (i+6)+'am'
//             }
//             else if (i==6){
//                 clock= 12 + 'pm'
//             }
//             else {
//                 clock = (i-6) + 'pm'
//             }
//             this.totalCookies= this.totalCookies +cookies;
//             this.cookiesArray.push(clock);
//             this.cookiesArray.push(cookies);
//             console.log(this.totalCookies)
//         }
//     },
    
//     render:function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
//     }
// }
//  seattle.customersPerHour();
// // //console.log(seattle.numOfCustomersPerHour);
//  seattle.cookiesPerHour();
// // //console.log(seattle.cookiesArray);
//   seattle.render ();

// // Tokyo location
// const tokyo = {
//     location: 'Tokyo',
//     minCustomer:3,
//     maxCustomer:24,
//     avgCookiePerCustomer:1.2,
//     numOfCustomersPerHour: [],
//     cookiesArray: [],
//     totalCookies:0,
//     customersPerHour:function (){
//         let i=0;
//         let randomCustomers = 0;
//         for(i; i<14;i++){
//             randomCustomers=randomValue(23, 65);
//             this.numOfCustomersPerHour.push(randomCustomers);
//         }
        
//     },
//     cookiesPerHour:function(){
//         let i = 0;
//         let clock='';
//         for(i; i<14;i++){
//             cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
//             cookies = Math.ceil(cookies);
//             if(i<6){
//                 clock = (i+6)+'am'
//             }
//             else if (i==6){
//                 clock= 12 + 'pm'
//             }
//             else {
//                 clock = (i-6) + 'pm'
//             }
//             this.totalCookies= this.totalCookies +cookies;
//             this.cookiesArray.push(clock);
//             this.cookiesArray.push(cookies);
//             console.log(this.totalCookies)
//         }
//     },
    
//     render:function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
//     }
// }
// tokyo.customersPerHour();
// tokyo.cookiesPerHour();
// tokyo.render ();

// // //Dubai Location
// const dubai = {
//     location: 'Dubai',
//     minCustomer:11,
//     maxCustomer:38,
//     avgCookiePerCustomer:3.7,
//     numOfCustomersPerHour: [],
//     cookiesArray: [],
//     totalCookies:0,
//     customersPerHour:function (){
//         let i=0;
//         let randomCustomers = 0;
//         for(i; i<14;i++){
//             randomCustomers=randomValue(23, 65);
//             this.numOfCustomersPerHour.push(randomCustomers);
//         }
        
//     },
//     cookiesPerHour:function(){
//         let i = 0;
//         let clock='';
//         for(i; i<14;i++){
//             cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
//             cookies = Math.ceil(cookies);
//             if(i<6){
//                 clock = (i+6)+'am'
//             }
//             else if (i==6){
//                 clock= 12 + 'pm'
//             }
//             else {
//                 clock = (i-6) + 'pm'
//             }
//             this.totalCookies= this.totalCookies +cookies;
//             this.cookiesArray.push(clock);
//             this.cookiesArray.push(cookies);
//             console.log(this.totalCookies)
//         }
//     },
    
//     render:function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
//     }
// }
// dubai.customersPerHour();
// dubai.cookiesPerHour();
// dubai.render ();

// // //Paris location
// const paris = {
//     location: 'Paris',
//     minCustomer:20,
//     maxCustomer:38,
//     avgCookiePerCustomer:2.3,
//     numOfCustomersPerHour: [],
//     cookiesArray: [],
//     totalCookies:0,
//     customersPerHour:function (){
//         let i=0;
//         let randomCustomers = 0;
//         for(i; i<14;i++){
//             randomCustomers=randomValue(23, 65);
//             this.numOfCustomersPerHour.push(randomCustomers);
//         }
        
//     },
//     cookiesPerHour:function(){
//         let i = 0;
//         let clock='';
//         for(i; i<14;i++){
//             cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
//             cookies = Math.ceil(cookies);
//             if(i<6){
//                 clock = (i+6)+'am'
//             }
//             else if (i==6){
//                 clock= 12 + 'pm'
//             }
//             else {
//                 clock = (i-6) + 'pm'
//             }
//             this.totalCookies= this.totalCookies +cookies;
//             this.cookiesArray.push(clock);
//             this.cookiesArray.push(cookies);
//             console.log(this.totalCookies)
//         }
//     },
    
//     render:function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
//     }
// }
// paris.customersPerHour();
// paris.cookiesPerHour();
// paris.render ();
// //lima Location 
// const lima = {
//     location: 'Lima',
//     minCustomer:2,
//     maxCustomer:16,
//     avgCookiePerCustomer:4.6,
//     numOfCustomersPerHour: [],
//     cookiesArray: [],
//     totalCookies:0,
//     customersPerHour:function (){
//         let i=0;
//         let randomCustomers = 0;
//         for(i; i<14;i++){
//             randomCustomers=randomValue(23, 65);
//             this.numOfCustomersPerHour.push(randomCustomers);
//         }
        
//     },
//     cookiesPerHour:function(){
//         let i = 0;
//         let clock='';
//         for(i; i<14;i++){
//             cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
//             cookies = Math.ceil(cookies);
//             if(i<6){
//                 clock = (i+6)+'am'
//             }
//             else if (i==6){
//                 clock= 12 + 'pm'
//             }
//             else {
//                 clock = (i-6) + 'pm'
//             }
//             this.totalCookies= this.totalCookies +cookies;
//             this.cookiesArray.push(clock);
//             this.cookiesArray.push(cookies);
//             console.log(this.totalCookies)
//         }
//     },
    
//     render:function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
//     }
// }
// lima.customersPerHour();
// lima.cookiesPerHour();
// lima.render ();

//Global useful variables
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);
let globalArray=[];
let counterOfLocations = 0;
let totalOfHours = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

//Constructor's function
function CreatingLocation(location, minCustomer, maxCustomer,avgCookiePerCustomer){
    this.location= location;
    this.minCustomer=minCustomer;
    this.maxCustomer=maxCustomer;
    this.avgCookiePerCustomer=avgCookiePerCustomer;
    this.numOfCustomersPerHour= [];
    this.cookiesArray= [];
    this.clock= [];
    this.totalCookies=0;
    globalArray.push(this);
}

// Method for calculating the number of customers that come per hour
CreatingLocation.prototype.customersPerHour=function(){
    let i=0;
    let randomCustomers = 0;
    for(i; i<14;i++){
        randomCustomers=randomValue(23, 65);
        this.numOfCustomersPerHour.push(randomCustomers);
    }
}
// method for calculating the number of cookies needed per hour based on the customers per hour
CreatingLocation.prototype.cookiesPerHour = function () {
        let i = 0;
        let clock='';
        for(i; i<14;i++){
            cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
            cookies = Math.ceil(cookies);
            if(i<6){
                clock = (i+6)+'am'
            }
            else if (i==6){
                clock= 12 + 'pm'
            }
            else {
                clock = (i-6) + 'pm'
            }
            this.totalCookies= this.totalCookies +cookies;
            this.clock.push(clock);
            this.cookiesArray.push(cookies);
            //console.log(this.totalCookies)
        }
}
// // displaying the data of cookies on the page
// CreatingLocation.prototype.render=function(){
//     let h2 = document.createElement('h2');
//     h2.textContent = this.location; 
//     let container = document.getElementById('container');
//     let lists = document.createElement('ul')
//     container.appendChild(h2);
//     container.appendChild(lists)
//     console.log(lists);
//     let listElement= document.createElement('li');
//     for(let i=0;i<28;i=i+2){
//         listElement = document.createElement('li');
//         listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
//         lists.appendChild(listElement)
//         console.log(listElement);
//     }
//     listElement = document.createElement('li');
//     listElement.textContent = `total: ${this.totalCookies} cookies`;
//     lists.appendChild(listElement);
// }

// funcation for table header
function tableHeader(){
    let headerRow = document.createElement('tr');
        table.appendChild(headerRow);
        let headerElement = document.createElement('th');
        headerElement.textContent = ' '; 
        table.appendChild(headerElement);
        for (let j=0; j<14; j++){
            headerElement = document.createElement('th');
            headerElement.textContent = globalArray[0].clock[j]; 
            table.appendChild(headerElement);
        }
        headerElement = document.createElement('th');
        headerElement.textContent = 'Total'; 
        table.appendChild(headerElement);
}

// a method for displaying the table of data (the same data but in the form of a table)
CreatingLocation.prototype.render=function(){
    
    table.setAttribute=('id', 'tableOfData');
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let dataEl = document.createElement('td'); 
    dataEl.textContent = this.location;
    table.appendChild(dataEl);
    for(let i=0; i<this.cookiesArray.length; i++){
        dataEl = document.createElement('td');
        dataEl.textContent = this.cookiesArray[i]; 
        table.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.textContent = this.totalCookies; 
    table.appendChild(dataEl);
    for(let i=0; i<14; i++){
        totalOfHours[i]=this.cookiesArray[i]+totalOfHours[i];
        //The line below is to calculat the "total of the total"
        totalOfHours[14]=totalOfHours[14]+ totalOfHours[i];
    }
}
// a function for table footer
function tableFooter(){
    let row = document.createElement('tr'); 
    table.appendChild(row);
    let dataEl = document.createElement('td');
    dataEl.textContent = 'Total'; 
    row.appendChild(dataEl);
    for(let i=0; i<15; i++){
        dataEl = document.createElement('td');
        dataEl.textContent = totalOfHours[i]; 
        row.appendChild(dataEl);
    }
    
}





//creating objects through constructor's function 'creatinglocation'
let seattle = new CreatingLocation('Seattle', 23 ,65 , 6.3 );
let tokyo = new CreatingLocation ('tokyo', 3 ,24 ,1.2);
let dubai = new CreatingLocation ('dubai', 11 , 38, 3.7);
let paris = new CreatingLocation ('paris', 20 , 38 , 2.3);
let lima = new CreatingLocation ('lima', 2 , 16 , 4.6);


//calling methods of objects
for (let i=0; i<globalArray.length; i++){ 
    globalArray[i].customersPerHour();
    globalArray[i].cookiesPerHour();
    counterOfLocations = counterOfLocations+1
}
//here, displaying the data in a table
tableHeader();
for(let i=0; i<globalArray.length; i++){ 
globalArray[i].render ();
}
tableFooter();


let form =document.getElementById("form");
form.addEventListener('submit', addNewData);
function addNewData(event){
    event.preventDefault();
    //console.log('add new data function');
    // here, assigning the new data into variables
    let locationName =event.target.locationFeild.value;
    //console.log(locationName);
    let minimumValue = parseInt(event.target.min.value);
    let maximumValue =parseInt(event.target.max.value);
    let averageOfCookies = parseFloat(event.target.avg.value); 

    //now, adding the data to the table 
    let newLocation = new CreatingLocation(locationName, minimumValue ,maximumValue , averageOfCookies );
    newLocation.customersPerHour();
    newLocation.cookiesPerHour();
    table.deleteRow(-1);
    newLocation.render ();
    tableFooter();
}