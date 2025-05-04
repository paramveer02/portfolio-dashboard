import { jest } from '@jest/globals';

jest.unstable_mockModule('../../src/utils/helper.js', () => ({
    getUserInitials: jest.fn(() => 'XYZ'),
    userGreeting: jest.fn(() => 'Hello'),
}));

test('introduceUser uses mocked helper functions', async () => {
    // 🔄 Only import AFTER mocking is in place
    const { introduceUser } = await import('../../src/services/userService.js');

    const result = introduceUser('Anything');

    expect(result).toBe('Hello | your initials are XYZ');
});
