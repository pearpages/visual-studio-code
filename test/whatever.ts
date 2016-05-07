import {awesomeFunction} from './whatever-dependency'

function whatever():number {
    awesomeFunction();
    return 3;
}

function greeting(myName:string):string {
    return 'Hello '+myName;
}