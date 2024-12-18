const players = [
    { name: 'Lionel Messi', age: 36, position: 'Forward', goals: 805, team: 'Inter Miami' },
    { name: 'Cristiano Ronaldo', age: 39, position: 'Forward', goals: 835, team: 'Al Nassr' },
    { name: 'Neymar Jr', age: 31, position: 'Forward', goals: 400, team: 'Al Hilal' },
    { name: 'Kylian Mbappe', age: 25, position: 'Forward', goals: 270, team: 'Paris Saint-Germain' },
    { name: 'Luka Modric', age: 38, position: 'Midfielder', goals: 91, team: 'Real Madrid' },
    { name: 'Kevin De Bruyne', age: 32, position: 'Midfielder', goals: 105, team: 'Manchester City' },
    { name: 'Virgil van Dijk', age: 32, position: 'Defender', goals: 45, team: 'Liverpool' },
    { name: 'Erling Haaland', age: 23, position: 'Forward', goals: 160, team: 'Manchester City' },
    { name: 'Robert Lewandowski', age: 35, position: 'Forward', goals: 550, team: 'Barcelona' },
];

// --1 start
const scoredgoal500 = players.filter(players => players.goals >= 500);
console.table(scoredgoal500);
//--1 end

//-- 2 start
const midfld = players.find(players => players.position === 'Midfielder');
console.table(midfld);
//-- 2 end

//--3 start 
const totalgoal = players.reduce((total, players) => total + players.goals, 0);
console.table(totalgoal);
//--3 end

//--4 start 
const name = players.map(players => players.name);
console.table(name);

//-- 4 end 
//--5 start
const sortyoungetoold = players.sort((a,b)=>a.age - b.age );
console.table(sortyoungetoold);

//--5 end

//--f start
const manchester = players.filter(players => players.team === 'Manchester City' );
 console.table(manchester);

//--f end 

// -- G start 
const highesttolowgoal = players.sort((a,b)=>b.goals - a.goals );
 console.table(highesttolowgoal);
// -- G end 

//--h start

const playerDescriptions = players.map(player => `${player.name} plays as a ${player.position} for ${player.team}.`);
console.table(playerDescriptions);
// -- h end

//--i start 
const older= players.filter(players => players.age >= 30 );
console.table(older);
// -- i end

// -- j start 
const topScorer = players.reduce((max, player) => player.goals > max.goals ? player : max);

console.table(topScorer);
//--j end 

//---------------- 2 -------------------
(function(){
    let a=1;
    let b=2;
    let sum = a+b ;
  console.log(sum);
})();

(function(num1,num2){
    console.log(num1 + num2)
})(4,5);


//--------------- 3 ------------------

const contactInfo = {
    name: "Rakibur Rahman Araf",
    university : "university of Asia Pacific",
    department : "cse",
    contact : 1627235588,
};
const address = {
    city :" Dhaka ",
    street :" 74/A Green Rd, Dhaka 1205"
}

const result = {...contactInfo, ...address};
console.log(result);

