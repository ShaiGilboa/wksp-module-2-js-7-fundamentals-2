// Exercise 3 (hard)
// -------------------
const colors = [ 'shai', 'ronny', "red" ,  "yellow", "green", "orange",'dominic', 'erice', "black", "gray", "blue", "violet","pink",'craig'];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
// red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors and output the corrected array to the console.

// You must console the colors array.
// NO for loops!
let i = colors.length;
let rightColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
colors.forEach( () => {
    colors.forEach( () => {
        let checkColor = colors.shift()
        if (rightColors.includes(checkColor)){
            colors.push(checkColor);
        }
    })
})
console.log(colors)