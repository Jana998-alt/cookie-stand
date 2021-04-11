function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const seattle = {
    location: 'seattle',
    minCustomer:23,
    maxCustomer:65,
    avgCookiePerCustomer:6.3,
    numOfCustomersPerHour: [],
    cookiesArray: [],
    customersPerHour:function (){
        let i=0;
        let randomCustomers = 0;
        for(i; i<14;i++){
            randomCustomers=randomValue(23, 65);
            this.numOfCustomersPerHour.push(randomCustomers);
        }
        
    },
    cookiesPerHour:function(){
        let cookies = 1
        let i = 0;
        let clock='';
        for(i; i<14;i++){
            cookies=(this.numOfCustomersPerHour[i])*(this.avgCookiePerCustomer);
            if(i<6){
                clock = (i+6)+'am'
            }
            else if (i=6){
                clock= 12 + 'pm'
            }
            else {
                clock = (i-6) + 'pm'
            }
            this.cookiesArray.push(clock);
            this.cookiesArray.push(cookies);
        }
    },
    writeData:function(){
    let seattleList = document.getElementById('seattleList');
    let child =document.createElement('ul');
    console.log(child);
    let listElement= document.createElement('li');
    for(let i=0;i<14;i=i+2){
        
        listElement.textContent = `${this.cookiesArray[i]}: ${this.cookiesArray[i+1]} cookies`;
        console.log(listElement);
    }
    seattleList.appendChild(child);
    
    }
}
seattle.customersPerHour();
console.log(seattle.numOfCustomersPerHour);
seattle.cookiesPerHour();
console.log(seattle.cookiesArray);
seattle.writeData()