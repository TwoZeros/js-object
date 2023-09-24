let name = "Kirill"
let age = 26

let name1 = "Petya"
let age1 = 24;


let hero1 = {
    name: "kirill",
    age: 26,
    health:100,
    hello: function() {
        alert("hello i am " + this.name)
    }
}

let hero2 = {
    name: "Petya",
    age: 24,
    health:120,
    hello: function(hero) {
        alert("hello "+ hero.name +" i am " + this.name)
    }
}

class RPGHero {
    constructor(name, age, health) {
        this.name = name,
        this.ahe = age,
        this.health = health
    }
    hello(hero) {
        alert("hello "+ hero.name +" i am " + this.name)
    }

}
hero1.age= "36dfcf";
hero1.hello()
hero2.hello(hero1)
alert(hero1.age)
alert(hero2.age)

let kirillHero = new RPGHero("kirill",26,120)
let kateHero = new RPGHero("Katy",23,120)
kateHero.hello(kirillHero)
