export const userGreeting = function (name) {
    return `Namastey ${name || 'Guest'}`;
}

export const getUserInitials = function (name) {
    if (!name) return 'G';
    return name
        .split(" ")
        .map(char => char.toUpperCase())
        .join("-");
}