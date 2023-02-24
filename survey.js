const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {}

rl.question('What\'s your name? Nicknames are also acceptable?', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {


  profile = {
    name,
    activity,
    music,
    favMeal,
    food,
    sport,
    superpower
  }  

  console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.food} for ${profile.favMeal}, prefers ${sport} over any other sport, and is amazing at ${profile.superpower}.`)
  rl.close();

            })
          })
        })
      })
    })
  })
});