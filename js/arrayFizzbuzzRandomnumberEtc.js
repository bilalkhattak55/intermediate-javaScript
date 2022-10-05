
Arrays
var guests = ["bilal", "Ali", "Zaid", "Aziz", "Muzzamil"];
var guestName = prompt("write the name of guest")
if (guests.includes(guestName)) {
    alert("wellcome")
} else {
    alert("next time")
}





var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzBuzz")
        }
        else if (count % 3 === 0) {
            output.push("fizz")
        } else if (count % 5 === 0) {
            output.push("buzz")
        }
        else {
            output.push(count);
        }

        count++;


        console.log(output)
    }
}
fizzBuzz()







var arr = [3, 6, 2, 56, 32, 5, 89, 9, -99, 32];
var largest = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]
    }
}
console.log(largest);




var count = 1;
var outPut = [];

function fizzBuzz() {

    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            outPut.push("fizzBuzz")
        }
        else if (count % 3 === 0) {
            outPut.push("fizz")
        } else if (count % 5 === 0) {
            outPut.push("buzz")
        }

        else {
            outPut.push(count);
        }
        count++

    }

    console.log(outPut)

}
fizzBuzz()





var random = Math.floor(Math.random() * array.length);
console.log(array[random])

var r = Math.floor(Math.random() * 5)
console.log(r)

var name = prompt("enter name");

var array = ["Ali", "umer", "Zaid"];
function whoPay(array) {
    var random = Math.floor(Math.random() * array.length);
    var whospay = array[random]
    console.log(whospay)
    return whospay + " is going to pay"
}
whoPay()





var array = ["Ali", "umer", "Zaid"];
function whoPay(array) {
    var numberOfPeople = array.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = array[randomPersonPosition]
    return randomPerson + " is going to pay"

}
whoPay()







var array = [3, 6, 2, 56, 32, 5, 89, 9, -99, 32];
var largest = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);




var guestList = ['bilal', 'ali', 'umer', 'hassan', 'dabbu-1', 'dabbu-2'];
var guestName = prompt("enter your guestName");
if (guestList.includes(guestName)) {
    alert("wellcome")
} else {
    alert("sorry baby next time")
}

