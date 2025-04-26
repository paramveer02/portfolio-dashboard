import { userGreeting, getUserInitials } from "../src/helper.js";

console.log('Testing user greetings');
const greetUser = userGreeting('Paramveer');
const greetUserNoUser = userGreeting();
greetUser === 'Namastey Paramveer' ? console.log('Greetings Test Passed') : console.error('Test Failed', greetUser);
greetUserNoUser === 'Namastey Guest' ? console.log('Greeting without user Test Passed') : console.error('Test Failed', greetUser);

console.log('Testing user initials');
const greetUseInitials = getUserInitials('Paramveer');
greetUseInitials === 'P--A--R--A--M--V--E--E--R' ? console.log('Initials Test Passed') : console.error('Test Failed', greetUseInitials);