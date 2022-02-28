const student ={
    name:'Sakib Al Hasan',
    id:75,
    money: 100000,
    proffetion:'Cricketer',
   
    giveMoney: function(give){
        this.money = this.money - give;
        console.log(this);
        return this.money
    }
}

const teacher = {
    name:'Salauddin',
    id:01,
    money:20000,
    proffetion:'coatch'
}

student.giveMoney(1000)
const takeMoney = student.giveMoney.bind(teacher);
takeMoney(1000)