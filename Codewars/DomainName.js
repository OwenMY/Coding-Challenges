/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/

//I - Take in a string
//O - the domain name as a string
//C - none
//E - no http/https, top-level domains other than ".com", sub domains, Sub directories

//Psuedocode
/*
create URL object with input string

return domain
*/

const domainName = (url) => {
  let domain = new URL(url);
  console.log(domain)
  return domain
};

module.exports = domainName;