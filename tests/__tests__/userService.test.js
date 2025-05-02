import { introduceUser, userWelcomeCard } from "../../src/services/userService.js";

test('introduceUser returns correct greeting and initials', () => {
    const intro = introduceUser('Sangita Marwah');

    expect(intro).toBe('Namastey Sangita Marwah | your initials are S M');
})

// ✅ Mock Date.toLocaleTimeString() to test predictable time values
// .toBe() checks exact string | .toMatch() checks if string contains expected pattern

test('userWelcomeCard returns valid structure', () => {
    const mockTime = '10:00:00 AM';
    const originalDate = global.Date;

    // Mock only the `toLocaleTimeString()` result
    global.Date = class extends Date {
        toLocaleTimeString() {
            return mockTime;
        }
    };

    // Now call the function
    const card = userWelcomeCard('Sapna Dave');

    expect(card).toMatch('Welcome Card: Name: Sapna Dave');
    expect(card).toMatch('Initials: S-D');
    expect(card).toMatch(`Login Time: ${mockTime}`);
    expect(card).toMatch('Status: Active');

    // Restore original Date
    global.Date = originalDate;
});
