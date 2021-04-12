function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Seattle location
const seattle = {
    location: 'Seattle',
    minCustomer:23,
    maxCustomer:65,
    avgCookiePerCustomer:6.3,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    totalCookies:0,
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
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
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
            console.log(this.totalCookies)
        }
    },
    
    render:function(){
    let h2 = document.createElement('h2');
    h2.textContent = this.location; 
    let container = document.getElementById('container');
    let lists = document.createElement('ul')
    container.appendChild(h2);
    container.appendChild(lists)
    console.log(lists);
    let listElement= document.createElement('li');
    for(let i=0;i<28;i=i+2){
        listElement = document.createElement('li');
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        lists.appendChild(listElement)
        console.log(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = `total: ${this.totalCookies} cookies`;
    lists.appendChild(listElement);
    }
}
 seattle.customersPerHour();
// //console.log(seattle.numOfCustomersPerHour);
 seattle.cookiesPerHour();
// //console.log(seattle.cookiesArray);
  seattle.render ();

// Tokyo location
const tokyo = {
    location: 'Tokyo',
    minCustomer:3,
    maxCustomer:24,
    avgCookiePerCustomer:1.2,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    totalCookies:0,
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
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
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
            console.log(this.totalCookies)
        }
    },
    
    render:function(){
    let h2 = document.createElement('h2');
    h2.textContent = this.location; 
    let container = document.getElementById('container');
    let lists = document.createElement('ul')
    container.appendChild(h2);
    container.appendChild(lists)
    console.log(lists);
    let listElement= document.createElement('li');
    for(let i=0;i<28;i=i+2){
        listElement = document.createElement('li');
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        lists.appendChild(listElement)
        console.log(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = `total: ${this.totalCookies} cookies`;
    lists.appendChild(listElement);
    }
}
tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.render ();

//Dubai Location
const dubai = {
    location: 'Dubai',
    minCustomer:11,
    maxCustomer:38,
    avgCookiePerCustomer:3.7,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    totalCookies:0,
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
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
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
            console.log(this.totalCookies)
        }
    },
    
    render:function(){
    let h2 = document.createElement('h2');
    h2.textContent = this.location; 
    let container = document.getElementById('container');
    let lists = document.createElement('ul')
    container.appendChild(h2);
    container.appendChild(lists)
    console.log(lists);
    let listElement= document.createElement('li');
    for(let i=0;i<28;i=i+2){
        listElement = document.createElement('li');
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        lists.appendChild(listElement)
        console.log(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = `total: ${this.totalCookies} cookies`;
    lists.appendChild(listElement);
    }
}
dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.render ();

//Paris location
const paris = {
    location: 'Paris',
    minCustomer:20,
    maxCustomer:38,
    avgCookiePerCustomer:2.3,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    totalCookies:0,
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
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
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
            console.log(this.totalCookies)
        }
    },
    
    render:function(){
    let h2 = document.createElement('h2');
    h2.textContent = this.location; 
    let container = document.getElementById('container');
    let lists = document.createElement('ul')
    container.appendChild(h2);
    container.appendChild(lists)
    console.log(lists);
    let listElement= document.createElement('li');
    for(let i=0;i<28;i=i+2){
        listElement = document.createElement('li');
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        lists.appendChild(listElement)
        console.log(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = `total: ${this.totalCookies} cookies`;
    lists.appendChild(listElement);
    }
}
paris.customersPerHour();
paris.cookiesPerHour();
paris.render ();
//lima Lovation 
const lima = {
    location: 'Lima',
    minCustomer:2,
    maxCustomer:16,
    avgCookiePerCustomer:4.6,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    totalCookies:0,
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
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
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
            console.log(this.totalCookies)
        }
    },
    
    render:function(){
    let h2 = document.createElement('h2');
    h2.textContent = this.location; 
    let container = document.getElementById('container');
    let lists = document.createElement('ul')
    container.appendChild(h2);
    container.appendChild(lists)
    console.log(lists);
    let listElement= document.createElement('li');
    for(let i=0;i<28;i=i+2){
        listElement = document.createElement('li');
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        lists.appendChild(listElement)
        console.log(listElement);
    }
    listElement = document.createElement('li');
    listElement.textContent = `total: ${this.totalCookies} cookies`;
    lists.appendChild(listElement);
    }
}
lima.customersPerHour();
lima.cookiesPerHour();
lima.render ();