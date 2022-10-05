function whosPaying(names) {

    /******Don't change the code above*******/
    var names = ["ali", "bilal", "hassan"];

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to pay"

    /******Don't change the code below*******/
}
console.log(whosPaying());


