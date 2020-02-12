# 2.7.1 - JS - array.sort()

---

## .sort() - without parameters

```js
const characters = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

characters.sort();

// outcome? - sorts based on ASCII code (case sensitive)
```

---

This method will sort the array items by their `unicode` numbers.

(sort of alphabetical...)

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

// outcome? [0, 12, 123, 6, 76, 9]
```

---

## Solution: Define out own sorting function!

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort((a, b) => a - b)

// outcome? - smallest to bigggest

// numbers.sort((a,b) => b - a) - biggest to smallest

// does not work with strings
```

---

