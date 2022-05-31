const rot13 = require('../Codewars/Rot13.js');

describe('Rot13', () => {
  test('Should convert string to rot13 strings', () => {
    expect(rot13('abcdefghijklmnopqrstuvwxyz')).toBe('nopqrstuvwxyzabcdefghijklm');
    expect(rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('NOPQRSTUVWXYZABCDEFGHIJKLM');
  });

  test('Should convert rot13 strings to readable strings', () => {
    expect(rot13('grfg')).toBe('test');
    expect(rot13('Grfg')).toBe('Test');
  });

  test('Should not convert special characters', () => {
    expect(rot13('Ruby is cool!')).toBe('Ehol vf pbby!');
    expect(rot13('10+2 is twelve.')).toBe('10+2 vf gjryir.');
  });

  test('Should not convert numbers', () => {
    expect(rot13('dk60f')).toBe('qx60s');
  });
});
