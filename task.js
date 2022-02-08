// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"
*/



const users1 = require('C:/Users/Admin/Documents/zadanko/js-task/users1.json');



function checkFieldByRegex (regexExpression, field){
    
    var newRegex = new RegExp(regexExpression);
    String.prototype.checkRegex = function(){return newRegex.test(this);}
       
    for (i = 0 ; i < users1.users.length; i++){
              
        if (result = ((users1.users[i].phoneNumber).checkRegex())){
            console.log(true);
        }
        else {
           
            console.log(`Phone number of user with ID ${users1.users[i].userId} is not correct`)
        }  
    }
}


// checkFieldByRegex("^\\d+$",'phoneNumber')

checkFieldByRegex("^\\d+$")


/*
Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/

const users2 = require('./users2.js');

function compareArraysFieldValue(array1, array2){
    for (i = 0 ; i < users1.users.length; i++){
    
        if(users1.users[i].emailAddress != users2.users[i].emailAddress){
            console.log(`Email addresses of user with ID ${users1.users[i].userId} are not the same. First email is: ${users1.users[i].emailAddress}; but second email is: ${users2.users[i].emailAddress}`)
        }
    }
}

compareArraysFieldValue(users1,users2)


        
    


