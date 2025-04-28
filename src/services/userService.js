import { userGreeting, getUserInitials } from "../utils/helper.js";

export const introduceUser = function (name) {
    const greetings = userGreeting(name);
    const initials = getUserInitials(name);

    return `${greetings} | your initials are ${initials}`;
}

