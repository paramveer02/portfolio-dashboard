import { userGreeting, getUserInitials } from "../../src/utils/helper.js";

test('testing user greetings', () => {
    const name = 'Veer';
    const greeting = userGreeting(name);
    expect(greeting).toBe('Namastey Veer');
})

test('testing user greetings for undefined', () => {
    const greeting = userGreeting();
    expect(greeting).toBe('Namastey Guest');
})

test('testing user initials', () => {
    const name = 'Param Marwah'
    const initials = getUserInitials(name)
    expect(initials).toBe('P M');
})
