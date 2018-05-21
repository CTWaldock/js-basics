function addOne(number, callback) {
  console.log('Started addOne ...')
  result = number + 1
  setTimeout(function() {
    console.log('Invoking callback ...')
    callback(result)
  }, 2000)
  console.log('Finished addOne ...')
}

function showResult(value) {
  console.log(`addOne completed with result: ${value}`)
}

console.log('Started main ...')
addOne(5, showResult)
console.log('Finished main ...')
