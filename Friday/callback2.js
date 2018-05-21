navigator.getBattery().then(function(result) {
  console.log(result)
}).catch(function(error) {
  console.log('An error occured:' + error)
})

fetch('https://randomuser.me/api/').then(function(response){
  console.log(response)
}).catch(function(error) {
  console.log(`something went wrong` + error)
})


function readJSON(json) {
  return new Promise(function(resolve, reject) {
    try {
      const data = JSON.parse(json)
      resolve(data)
    }
    catch (error) {
      //invalid JSON
      reject({ error: true, message: error.message})
    }
  })
}

const x = '{ "name":"John", "age":"25"}'

readJSON(x).then(function(result) {
  console.log(result)
}).catch(function(err) {
  console.log('Crosies! Doesnt count! :' + err.message)
})
