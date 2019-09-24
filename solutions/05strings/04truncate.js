function truncate(str, maxlength) {
  return str.substr(0, maxlength) + '...'
}

console.log(truncate("What I'd like to tell on this topic is:", 20)) // "What I'd like to tel..."
