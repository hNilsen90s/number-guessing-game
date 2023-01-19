// Return a random number
const randomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * maxNum + minNum);
}

// Setup
const minNum = 1;
const maxNum = 100;
const numberToGuess = randomNumber(minNum, maxNum);
console.log("Number to guess: " + numberToGuess)

document.getElementById('minNum').innerText = minNum;
document.getElementById('maxNum').innerText = maxNum;

// Getting a random picture of a dog
const randomDogImageUrl = async () => {
    try {
        const apiUrl = "https://dog.ceo/api/breeds/image/random";
        let response = await fetch(apiUrl);
        let data = await response.json();
        return data.message;
    } catch (err) {
        console.log(err);
    }
}

// Getting a random joke
const randomJoke = async () => {
    try {
        const url = "https://api.chucknorris.io/jokes/random"
        let response = await fetch(url);
        let data = await response.json();
        return data.value
    } catch(err) {
        console.log(err)
    }

}

// Retrive the users number guess from the formfield
const gussedNumber = async () => {

    document.getElementById('answerField').classList.add("display")
    document.getElementById('answerField').innerHTML = "Loading ..."
    let guessedNumber = Number(document.getElementById('guessNumber').value)
    
    // Check if the user guessyed the correct number
    if (guessedNumber == numberToGuess) {
        // If the user is correct, give him a joke by using a API
        console.log("Guessed correct")
        const imageOfDog = await randomDogImageUrl()
        const img = `<img height=300 width=300 src="${imageOfDog}">`
        document.getElementById('answerField').innerHTML = "<div>Correct! Here is a dog image! <br><br>" + img + "</div>"
        document.getElementById('answerField').classList.add("display")
    } else {
        // If the user is wrong, give him a random picture of a dog
        const joke = await randomJoke()
        document.getElementById('answerField').innerHTML = "<div>Wrong number. Here is a joke to cheer you up:<br><br><strong>" + joke + "</div>"
        document.getElementById('answerField').classList.add("display")
    }

}

// When user clicks on the submit button
document.getElementById('submit').addEventListener('click', gussedNumber)