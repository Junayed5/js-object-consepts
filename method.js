const student ={
    name:'Sakib Al Hasan',
    id:75,
    money: 100000,
    proffetion:'Cricketer',
    academy:'Sakib Playground',
    player:{
        name:'Tamim',
        proffetion:'Cricketer'
    },

    takingExam: function(){
        console.log(this.name, 'exam nibe');
    },

    giveMoney: function(give){
        this.money = this.money - give;
        return this.money
    }
}

student.takingExam();
const prize = student.giveMoney(100)
console.log(prize);