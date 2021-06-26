# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

Object.keys(friendAge) // ['Kevin', 'Rick', 'Morty', 'Jerry']
```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
// console.log an unknown value
Object.key(freindsAge).forEach(friend => {
    console.log(friend) // list of the names
    console.log(friendsAge[friend]) // list of the numbers (the ages)
})

```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const age = Object.values(friendsAge); // an array of the ages
```

---

```js
// how to sort an array of objects by a value
const friends = [{ name: 'Kevin', age: 32}. {name: 'Rick', age: 60}, {name: 'Morty', age: 14},  {name: 'Jerry', age: 35}]

friends.sort((a, b) => a.age - b.age);
```