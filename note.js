const a = 5; // const : '상수' = 값이 바뀔 수 없다
const b = 2;

//변수명은 camel case로 표현하기
let myName = "mark";  //let : 값이 바뀔 수 있다

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

myName = "jeno"; //변수 값 업데이트 (let이라 가능함)

console.log("your name is " + myName);

// default : const, 변수 업데이트가 필요할 때 : let 사용

const amIFat = true;
console.log(amIFat);

const mark = null; //False와 Null은 다르다 (아닌 것과 없는 것)
let something; //변순은 만들었지만 값은 주고있지 않다 = undefined

console.log(mark);
console.log(something);

//null은 자연적으로 발생하지 않는다. 어떤 것이 없다는 걸 의도적으로 확실하게 하기 위해 쓰는 것.
//undefined는 variable이 메모리에 존재하지만 값은 없다.

const nctDream = ["mark", "renjen", "haechan", "jeno", "jaemin", "chenle"];

// Get Item from Array
console.log(nctDream[4]);

// Add one more member to the array
nctDream.push("jisung");
console.log(nctDream);

// make Object
const player = {
    name: "Mark",
    point: 802,
    fat : false
};

console.log(player);
console.log(player["name"]);

player.fat = true;
console.log(player.fat);
console.log(player);

player.lastName = "Lee";
console.log(player);

function sayHello(name, age){
    console.log("Hello, my name is " + name);
    console.log("I am "+ age + "years old");
}

sayHello("Mark", 10);

const player = {
  name : "Mark",
  sayHello : function(otherPersonsName){
      console.log("hello! " + otherPersonsName + "!!");
  }  
};

console.log(player.name);
player.sayHello("Jaemin");
player.sayHello("Jeno");


const calculator = {
    add : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    div : function(a, b){
        console.log(a / b);
    },
    multi : function(a, b){
        console.log(a * b);
    },
    powerOf : function(a, b){
        console.log(a ** b);
    }
};

calculator.add(1,4);
calculator.minus(10,2);
calculator.multi(3,4);
calculator.div(10,4);
calculator.powerOf(2,3);


const age = parseInt(prompt("how old are you?"));
const result = isNaN(age);

if(result){
    alert("Please write a number.");
}else if(age < 18){
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){
    console.log("you can drink");
}else{
    console.log("you can't drink");
};
