import { userGreeting, getUserInitials } from "../utils/helper.js";

export const introduceUser = function (name) {
    const greetings = userGreeting(name);
    const initials = getUserInitials(name);

    return `${greetings} | your initials are ${initials}`;
}

// Create user greeting and initials based welcome card
export const userWelcomeCard = function (name = 'Guest') {
    const initials = getUserInitials(name)
    const timeNow = new Date().toLocaleTimeString()
    return `🧾 Welcome Card: Name: ${name} | Initials: ${initials} | Login Time: ${timeNow} | Status: Active`
}