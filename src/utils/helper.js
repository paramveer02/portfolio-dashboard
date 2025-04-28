export const userGreetingTime = function (name) {
    const timeNow = new Date().toLocaleTimeString(); // HH:MM:SS
    return `Namastey ${name || 'Guest'} - sent at ${timeNow}`;
}

export const userGreeting = function (name) {
    const timeNow = new Date().toLocaleTimeString(); // HH:MM:SS
    return `Namastey ${name || 'Guest'}`;
}

export const getUserInitials = function (name) {
    if (!name) return 'G';

    return name.includes(" ")
        ? name.split(" ").map(word => word[0].toUpperCase()).join(" ")
        : name.split("").map(char => char.toUpperCase()).join(" ")
}