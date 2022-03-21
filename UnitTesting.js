//create a function that takes an argument name and greets the person
function Greeting(name){
    //function must display generic greeting if no name provided
    if (name == null) {
        return "Hi there!";
    }
    
    //if someone inputs all caps, greeting should shout back
    if (name === name.toString().toUpperCase()){
        return "HI, " + name;
    }
    
    //if multiple names are included, must greet all of them
    if (typeof name === typeof[]){
        let greetMultiple = 'Hi';
        name.forEach((element) => {greetMultiple += ', ' + element;});
        return greetMultiple;
    }

    //last case is straightforward scenario from description
    else
    return 'Hi,' + name; 
}

module.exports = Greeting;
