//songs of different genres
const songs = {
    rock: ["American Idiot by Green Day", "The Middle by Jimmy Eat World", "Last Resort by Papa Roach", "Best of You by Foo Fighters", "Starlight by Muse", "Dani California by Red Hot Chilli Peppers", "Sugar We're Going Down by Fall Out Boy", "Dr. FeelGood by Motley Crue", "Born in the USA by Bruce Springsteen", "Sweet Child O' Mine by Guns and Roses", "Poison by Alice Cooper", "Smells Like Teen Spirit by Nirvana"],
    pop: ["Poker Face by Lady Gaga", "Halo by Beyonce", "Sk8er Boi by Avril Lavigne", "So What by Pink", "Umbrella by Rihanna", "Bye Bye Bye by *NSYNC", "I Kissed a Girl by Katy Perry", "Fix You by Coldplay", "Dancing in the Moonlight by Toploader", "Marry You by Bruno Mars", "Love Story by Taylor Swift", "Bad Habits by Ed Sheeran"],
    rap: ["Still D.R.E. by Dr. Dre and Snoop Dogg", "In Da Club by 50 Cent", "Ms. Jackson by Outkast", "Black and Yellow by Wiz Khalifa", "X Gon' Give It To Ya by DMX", "The Real Slim Shady by Eminem", "Straight Outta Compton by N.W.A.", "Gold Digger by Kanye West", "Ghetto Gospel by 2Pac", "WAP by Cardi B", "Gangsta's Paradise by Coolio", "Ni**as In Paris by JAY-Z and Kanye West"],
    indie: ["Mardy Bum by Arctic Monkeys", "Amsterdam by Nothing But Thieves", "Naive by The Kooks", "Ruby by Kaiser Chiefs", "Take Me Out by Franz Ferdinand", "Club Foot by Kasabian", "Wonderwall by Oasis", "Chocolate by The 1975", "I Will Wait by Mumford and Sons", "Zombie by Jamie T", "I Found Out by The Pigeon Detectives", "In The Morning by Razorlight"]
};
// Generate random number to be used later //
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

//create empty array to push songs to
let playlist = [];

console.log(songs);

// Code for picking random song //
function selectSong(array){
  for (let song in songs){
    let keyValue = songs[song];
    let randomIndex = generateRandomNumber(keyValue.length);
    playlist.push(keyValue[randomIndex]);
    
  };

