
function createbankaccount(accountnumber,name,type,balance){
    this.accountnumber =accountnumber,
    this.name =name,
    this.type =type,
    this.balance=balance
    this.deposit = function(amount){
       this.balance += amount
    }
    this.widraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount
        }
        else{
            console.log("insufficent amount you have only ",this.balance)
        }
    }

    this.checkBalance = function(){
             console.log(this.balance)
    }

    
    
}

let ac1 =new createbankaccount(1234667,"Gaurav","saving",500);
let ac2 = new createbankaccount(12427247,"rahul","current",1000)

ac1.deposit(5000)
ac1.widraw(4100)

ac2.deposit(200)
ac2.widraw(250)


let account = [ac1,ac2]
let total=0
function totalbalace(account){
    for(let i=0;i<account.length;i++){
        total += account[i].balance
    }
    console.log( total)
}
totalbalace(account)