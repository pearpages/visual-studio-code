export function awesomeFunction () {
    console.log(getMeAnyMessage());
}

const myCar = 'Ferrari';

function getMeAnyMessage():string {
    return 'this is a message!';
}

class Person {
    
    name: string;
    height: number;
    
    constuct(name: string, height:number) {
        this.name = name;
        this.height = height;
    }
}