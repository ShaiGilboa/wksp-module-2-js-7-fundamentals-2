// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',  
    tiffany: 'waffles',
    melissa: 'profiteroles',
};

// Above is an object with the results of a poll.
// Write a script that outputs the following:

// A)
// the desserts ranked from most popular to least popular.
// e.g. 1. <DESSERT_NAME>
//      2. <DESSERT_NAME>
//      ...

function arrangePoll (chosenArr) {
    let ranking = "";
    let i = 1;
    chosenArr.forEach(rank => {
        ranking += `${i}. ${rank.type}\nWas chosen by: ${rank.names}\n`;
        i ++;
    });
    return ranking
}

function rankingFavorite (poll) {
    let people = Object.keys(poll);
    let chosenArr = []
    let i = 0;
    people.forEach(person => {
        let dessert = poll[person];
        for (i = chosenArr.length - 1; i >= 0; i--){
            // console.log("chosenArr " ,chosenArr)
            // console.log("chosenArr[i] " , chosenArr[i])
            // console.log("person " ,person);
            // console.log("dessert " , dessert)
            if (chosenArr[i].type === dessert){
                chosenArr[i].names.push(person);
                chosenArr[i].count ++;
                i = -1;
            }
        }
        if (i === -1 ) {
            chosenArr.push({type: dessert, names: [person], count: 1});
        }
    })
    chosenArr.sort((a, b) => b.count - a.count)
    // console.log("sorted? " , chosenArr)
    // printPeopleForDessert(chosenArr)
    return arrangePoll(chosenArr);
}

function printPeopleForDessert (chosenArr) {
    chosenArr.forEach(dessert => {
        let dessertsPeople = dessert.type + ": ";
        dessert.names.forEach(name => dessertsPeople += (name + " "));
        console.log(dessertsPeople)
    })
}

// console.log(favoriteDessert)
console.log(rankingFavorite(favoriteDessert));

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...
