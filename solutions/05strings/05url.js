function url(protocol, subdomain, domain, topdomain, resource) {
  return `${protocol}://${subdomain}.${domain}.${topdomain}/resource`
}

console.log(url('https', 'www', 'mysite', 'se', 'contact')) // https://www.mysite.se/resource
