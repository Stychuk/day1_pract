var if_else = new Vue ({
    el: '#if_else',
    data: {
        users: [
            {
                login: 'toma',
                password: '123'
            },
            {
                login: 'petya',
                password: '777'
            },
            {
                login: 'olya',
                password: '456'
            },
        ],
        number:'',
        login:'',
        password:'',
        age:'',
        experience:''
    },
    methods: {
        // IF ELSE ЗАВДАННЯ 1
        entrance: function() {
            if (this.number.trim() == ''){
                alert('Введіть номер квартири!');
                this.number = '';
            }
            else if (Number(this.number.trim()) > 90 || Number(this.number.trim()) < 1)
            {
                alert('Такої квартири немає...');
                this.number = '';
            }
            else if (Number(this.number.trim()) <= 20){
                alert('Ваш під їзд №1');
                this.number = '';
            }
            else if (Number(this.number.trim()) <= 48){
                alert('Ваш під їзд №2');
                this.number = '';
            }
            else if (Number(this.number.trim()) <= 90){
                alert('Ваш під їзд №3');
                this.number = '';
            }
        },

        // IF ELSE ЗАВДАННЯ 2
        authorization: function() {
            let i = 0;
            while (this.users[i]){
                if (this.login.trim() == this.users[i].login && this.password.trim() == this.users[i].password)
                {
                    alert(`Ласкаво просимо`);
                    this.login = '';
                    this.password = '';
                    break;
                }
                i++;
            };
            if (!this.users[i])
            {
                alert('Помилка входу');
                this.login = '';
                this.password = '';
            }           
        },

        // IF ELSE ЗАВДАННЯ 3
        check_age: function() 
        {
            if (2023 - this.age >= 16){
                alert(`Ласкаво просимо`);
                this.age = '';
            }
            else {
                alert(`Вхід заборонено`);
                this.age = '';
            }
        },

        // IF ELSE ЗАВДАННЯ 4
        allowance: function()
        {
            if (this.experience.trim() == ''){
                alert('Вкажіть стаж роботи!');
                this.experience = '';
            } 
            else if (this.experience.trim() < 0){
                alert('Вкажіть вірний формат!');
                this.experience = '';
            }   
            else if (this.experience.trim() < 3 ){
                alert('Ваша надбавка 0%');
                this.experience = '';
            }
            else if (this.experience.trim() < 10){
                alert('Ваша надбавка 10%');
                this.experience = '';
            }
            else if (this.experience.trim() < 20){
                alert('Ваша надбавка 20%');
                this.experience = '';
            }
            else if (this.experience.trim() > 20){
                alert('Ваша надбавка 25%');
                this.experience = '';
            }            
        }        
    }
});

document.addEventListener('DOMContentLoaded', function(){
const cycleFirst = document.querySelector(".cycle_1");
const cycleSecond = document.querySelector(".cycle_2");
const cycleThird = document.querySelector(".cycle_3");
const cycleFourth = document.querySelector(".cycle_4");
const cycleFifth = document.querySelector(".cycle_5");

// CYCLES ЗАВДАННЯ 1
    function cycles1(){
        let step = 0;
        for (step = 4; step <= 400; step++) {    
            console.log(step);
        }
    };
    cycleFirst.addEventListener('click', function(){
        cycles1();
    });

// CYCLES ЗАВДАННЯ 2
    function cycles2(){
        let second = 1;
        for (step = 0; step < 4; step++) {    
            second = second + 3;
            console.log(second);
        };
    };
    cycleSecond.addEventListener('click', function(){
        cycles2();
    });
    
// CYCLES ЗАВДАННЯ 3
    function cycles3(){
        for (step = 654; step >= 0; step--) { 
            console.log(step);
        };
    };
    cycleThird.addEventListener('click', function(){
        cycles3();
    });

// CYCLES ЗАВДАННЯ 4
    function cycles4(){
        for (step = 1983; step <=2017; step++) {    
            console.log(step + ' рік');
        };
    };
    cycleFourth.addEventListener('click', function(){
        cycles4();
    });

// CYCLES ЗАВДАННЯ 5
    function cycles5(){
        for (step = -4; step <=100; step+=2) {  
            console.log(step);
        };
    };
    cycleFifth.addEventListener('click', function(){
        cycles5();
    });
});

// CYCLES ЗАВДАННЯ 6
var cycles = new Vue ({
    el: '#cycles',
    data: {
        multiplication_on_five: '',
    },
    methods: {
        multiplication: function(){
            this.multiplication_on_five = '';
            for (let i = 1; i < 10; i++){
                this.multiplication_on_five += `5 * ${i} = ${i*5} \n`
            }
        }
    }
});

// FUNCTION ЗАВДАННЯ 1
let imageshadow = document.querySelectorAll('img');
Array.prototype.forEach.call(imageshadow, function(el) {
    el.style.height = '300px';
    el.style.boxShadow = '5px 5px 10px black';
});

// FUNCTION ЗАВДАННЯ 2
let paragraf = document.querySelectorAll('p');
let paragrafNumber = 0;
Array.prototype.forEach.call(paragraf, function(el) {
    paragrafNumber += 1;
    el.innerHTML = `${paragrafNumber}. ${el.innerHTML}`;
});

var func = new Vue ({
    el: '#function',
    data: {        
        RanNumber: parseInt((Math.random()*10)),
        tryNum: 0,
        param_number:'',
        param_pow:'',
        random_number:'',
        age_user:'',
    },
    methods: {
        // FUNCTION ЗАВДАННЯ 5
        number_pow: function(){
            if (this.param_number.trim() == '' || this.param_pow.trim() == '' || !Number(this.param_number.trim()) || !Number(this.param_pow.trim())){
                alert('Введіть число!');
            }
            else{
                alert( ` ${this.param_number.trim()} ^ ${this.param_pow.trim()} = ${Math.pow(this.param_number, this.param_pow)}`);
                this.param_number = '';
                this.param_pow = '';
            }
        }, 
        
        // FUNCTION ЗАВДАННЯ 7
        check_age_user: function(){
            if (this.age_user.trim() > 16){
                alert('ласкаво просимо');
                this.age_user = '';
            }
            else if (this.age_user.trim() <=16 && this.age_user.trim() > 0){
                alert('ви ще молоді');
                this.age_user = '';
            }
        },

        // FUNCTION ЗАВДАННЯ 11
        guess_number: function(){
            console.log(`Загадане число - ${this.RanNumber}`)            
            if (this.tryNum <3){
                this.tryNum++;
                if(Number(this.random_number.trim()) > this.RanNumber){
                    alert ('Загадане число менше');
                    this.random_number = '';
                }
                else if(Number(this.random_number.trim()) < this.RanNumber){
                    alert ('Загадане число більше');
                    this.random_number = '';
                }
                else if(Number(this.random_number.trim()) == this.RanNumber){
                    alert (`Ви вгадали! Загадане число - ${this.RanNumber}! Кількість ${this.tryNum} спроб.`)
                    this.tryNum = 4;
                    this.random_number = '';
                }                
            }
            if (this.tryNum == 4){
                this.tryNum = 0;
                this.RanNumber = parseInt((Math.random()*10));
            }
            else if (this.tryNum >=3 ){
                alert("Ви не вгадали число...");
                this.tryNum = 0;
                this.RanNumber = parseInt((Math.random()*10));
            }
        }
    }
});

var line_task = new Vue ({
    el: '#line_task',
    data: {
        // LINE ЗАВДАННЯ 2
        img: [
            {
                name: 'turtle',
                link: 'img/1.jpg'
            },
            {
                name: 'butterfly',
                link: 'img/2.jpg'
            },
            {
                name: 'moon',
                link: 'img/3.jpg'
            }            
        ],
        accountNew: {
            name: '',
            surname: '',
            password: '',
            email: ''
        },
        line_len:'',
        name_domen:'',

    },
    methods: {
        // LINE ЗАВДАННЯ 1
        line_length: function(){
            alert(`Довжина рядка = ${this.line_len.length}`);
            this.line_len = '';
        },

        // LINE ЗАВДАННЯ 3
        URL: function(){           
            if ((this.name_domen.trim().slice(0,8) == "https://")||( this.name_domen.trim().slice(0,7) == "http://")) {
                alert(`URL - ${this.name_domen.trim().slice(8)}`);
                this.name_domen = '';
            }
            else{
                alert("Невірний формат вводу URL!");
                this.name_domen = '';
            }
        },

        // LINE ЗАВДАННЯ 4
        create_new_account: function(e){
            e.preventDefault();  

            this.accountNew.name = this.accountNew.name.trim();
            this.accountNew.surname = this.accountNew.surname.trim();
            this.accountNew.password = this.accountNew.password.trim();
            this.accountNew.email = this.accountNew.email.trim();

            if (this.accountNew.name == '' || this.accountNew.surname == '' || this.accountNew.password == '' || this.accountNew.email == ''){
                alert('Заповніть всі поля!');
                return;
            }
            if (this.accountNew.password.length < 5){
                alert('Занадто короткий пароль!');
                return;
            }            
            let emailcount = 0;
            for (let i = 0; i < this.accountNew.email.length; i++){
                if (i != this.accountNew.email.length && this.accountNew.email.slice(i,i + 1) == '@'){
                    emailcount++;                    
                }
                if (i != this.accountNew.email.length && this.accountNew.email.slice(i,i + 1) == ' '){
                    alert('Введіть коректний email!');
                    return;
                }     
            }
            if (emailcount < 1) {
                alert('Введіть коректний email!');
                return;
            }
            alert(`Новий аккаунт створений: \n Ім я: ${this.accountNew.name} \n Прізвище: ${this.accountNew.surname} \n Email: ${this.accountNew.email} `);
        }
    }
});

// LOCAL STORAGE ЗАВДАННЯ 2, 4
const restaurant = [
    {name: 'Pizza', cost: '150 грн', stars:'5.0'},
    {name: 'Syshi', cost: '200 грн', stars:'4.8'},
    {name: 'Rolls', cost: '125 грг', stars:'4.7'},
    {name: 'Dessert', cost: '95 грг', stars:'5.0'},
    {name: 'Vareniki', cost: '145 грн', stars:'4.9'},
];
const numder = 1234;
const vegetables = {
    name: 'Apple',
    color:'red',
    wight: 5
};

const local_second = document.querySelector(".local_2");
const local_fourth = document.querySelector(".local_4");

localStorage.setItem('restaurant', JSON.stringify(restaurant));
localStorage.setItem('vegetables', JSON.stringify(vegetables));

let restaurantArr = localStorage.getItem('restaurant');
let vegetablesObj = localStorage.getItem('vegetables');

local_second.addEventListener('click', function(){
    restaurantArr = JSON.parse(restaurantArr);
    console.log(restaurantArr);
});

local_fourth.addEventListener('click', function(){ 
    restaurantArr = JSON.parse(restaurantArr);
    vegetablesObj = JSON.parse(vegetablesObj);
    console.log(restaurantArr);
    console.log(localStorage.getItem('numder'));
    console.log(vegetablesObj);
});