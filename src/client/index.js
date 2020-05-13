//Import the needed functions from the javascript file.  
//The referenced file must have an export statement
//This is ES6 syntax and babel should be used to translate it
import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';

console.log(checkForName);

alert("I exist!")