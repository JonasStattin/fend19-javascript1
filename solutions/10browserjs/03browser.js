// Chrome: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36
// Opera: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36 OPR/63.0.3368.94
// Edge: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931
// Firefox: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/69.0
// Safari: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13 Safari/605.1.15

// If it has Chrome, but not OPR or Edge, it is Chrome
// If it has OPR, it is Opera
// If it has Edge, it is Edge
// If it has Firefox, it is Firefox
// If it has Safari, but not Chrome, it is Safari

if (navigator.userAgent.includes('OPR') === true) {
  alert('It is Opera!')
} else if (navigator.userAgent.includes('Edge') === true) {
  alert('It is Edge!')
} else if (navigator.userAgent.includes('Chrome') === true) {
  alert('It is Chrome!')
} else if (navigator.userAgent.includes('Firefox') === true) {
  alert('It is Firefox!')
} else if (navigator.userAgent.includes('Safari') === true) {
  alert('It is Safari!')
} else {
  alert('Unknown browser...')
}
