/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

const randomReview = require('./random')

test('generates a random number not equal to previous number', () => {
    expect(randomReview(1)).not.toEqual(1)
})