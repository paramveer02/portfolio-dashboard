import { userGreeting, getUserInitials } from "./utils/helper.js";
import { introduceUser, userWelcomeCard } from "./services/userService.js";

console.log(userGreeting('Paramvir'));
console.log(userGreeting());

console.log(getUserInitials('Paramvir Marwah'));
console.log(getUserInitials('Paramvir'));
console.log(getUserInitials());

console.log(introduceUser('Arjun Sharad'));
console.log(introduceUser('Arjun'));

console.log(userWelcomeCard('Sapna Dave'));
console.log(userWelcomeCard());