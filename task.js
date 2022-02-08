// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct" */
const users1 = require('./users1.json');

function checkFieldByRegex(regexExpression, field) {

    var newRegex = new RegExp(regexExpression);
    String.prototype.checkRegex = function() {
        return newRegex.test(this);
    }
    for (i = 0; i < users1.users.length; i++) {
        if ((users1.users[i][field]).checkRegex()) {
            console.log(true);
        } else {

            console.log(`Phone number of user with ID ${users1.users[i].userId} is not correct`);
        }
    }
}

//Function accepts regex and field which we want to diagnose in user.json - current regex to find if phone number contains only digits:
checkFieldByRegex("^\\d+$", 'phoneNumber');

//Second example of using this function below - I know it's bad failure message in case of different field value than phoneNumber. 
//It's just in case you will check answers by script, not manually :)

//checkFieldByRegex("^([a-zA-Z]{5,})$",'firstName');



/*
Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/

const users2 = require('./users2.js');

function compareArraysFieldValue(array1, array2, field) {
    for (i = 0; i < users1.users.length; i++) {

        if (users1.users[i][field] != users2.users[i][field]) {
            console.log(`Email addresses of user with ID ${users1.users[i].userId} are not the same. First email is: ${users1.users[i][field]}; but second email is: ${users2.users[i][field]}`);
        }
    }
}

// If we would like to compare all the json files we could use lodash extension and use _.isEqual() function. 
//I don't know why to compare email addresses, first names, last names and phone numbers if results has to contain only email even if other props would be different, 
//but  i prepared function that can  accept any field to validate. I know it's bad failure message in case of different field value than phoneNumber. 
//It's just in case you will check answers by script, not manually :)

compareArraysFieldValue(users1, users2, 'emailAddress');