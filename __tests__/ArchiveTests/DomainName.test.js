const domainName = require('./../Codewars/DomainName.js');

describe('Extract the domain name', () => {
  test('Should extract the domain name', () => {
    expect(domainName('http://github.com/carbonfive/raygun')).toBe('github');
    expect(domainName('http://www.zombie-bites.com')).toBe('zombie-bites');
    expect(domainName('https://www.cnet.com')).toBe('cnet');
    expect(domainName('http://google.com')).toBe('google');
    expect(domainName('https://youtube.com')).toBe('youtube');
  });

  test('Should extract the domain when given a top-level domain other than ".com"', () => {
    expect(domainName('http://google.co.jp')).toBe('google');
    expect(domainName('www.xakep.ru')).toBe('xakep');
  });
});
