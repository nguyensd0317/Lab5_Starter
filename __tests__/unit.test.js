// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('isPhoneNumber - valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - invalid: too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber - invalid: letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail tests
test('isEmail - valid simple email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail - valid email with numbers', () => {
  expect(isEmail('test123@domain.org')).toBe(true);
});

test('isEmail - invalid: missing @ symbol', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('isEmail - invalid: missing domain', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword - valid: starts with letter, 8 chars', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('isStrongPassword - valid: exactly 4 chars', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('isStrongPassword - invalid: starts with number', () => {
  expect(isStrongPassword('1abcdef')).toBe(false);
});

test('isStrongPassword - invalid: too short (2 chars)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate tests
test('isDate - valid date MM/DD/YYYY', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('isDate - valid date single digit M/D/YYYY', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('isDate - invalid: wrong separator', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('isDate - invalid: two digit year', () => {
  expect(isDate('12/25/24')).toBe(false);
});

// isHexColor tests
test('isHexColor - valid 6-char hex with #', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});

test('isHexColor - valid 3-char hex without #', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('isHexColor - invalid: contains G', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('isHexColor - invalid: wrong length (4 chars)', () => {
  expect(isHexColor('#ABCD')).toBe(false);
});
