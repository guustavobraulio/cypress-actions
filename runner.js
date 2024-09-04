const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc4NTI1ZmQwLWRmNzQtNDBhYS1hMmNiLTQ0MWQyOTY1ZWExOC0xNzI1NDczNjUyMTczIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiODU1MThhN2MtMzExNi00MTZkLTgwZTEtNjI1NzlkOTdlYmM0IiwidHlwZSI6InQifQ.u31oQr5A9ZLx-9sEhrRebBBqTWtBxkea0mrrYK1GYnk'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
