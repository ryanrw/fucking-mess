require('./init')

const firebase = require('firebase/app')
require('firebase/database')

firebase.database().ref('/Cars').once('value').then(snapshot => {
  const lastItemKey = Object.keys(snapshot.val()).pop()
  const lastObject = snapshot.val()[lastItemKey]

  const lastEnterChar = new RegExp('\r\n$|\n$|\r$', 'g')
  const enterChar = new RegExp('\r\n|\n', 'g')
  const singleQuote = new RegExp('\'', 'g')

  const rawJSON = lastObject
    .toLowerCase()
    .trim()
    .replace(lastEnterChar, '')
    .replace(enterChar, ', ')
    .replace(singleQuote, '\"')
  
  const car = JSON.parse(`{${rawJSON}}`)

  console.log(car.temp)
})