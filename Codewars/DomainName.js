/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

const regexScheme = /\w+\:\/\//g;
const regexWWW = /www\./g;

const domainName = (url) => {
  let domain = url.replace(regexScheme, '');
  domain = domain.replace(regexWWW, '');
  return domain.slice(0, domain.indexOf('.'));
};

module.exports = domainName;