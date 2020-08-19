// let str = 'some';

// let strObj = new String(str);

// /* console.log(typeof(str));
// console.log(typeof(strObj)); */

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100
// };

// const jonh = Object.create(soldier);

// /* const jonh = {
//     health:100
// }; */

// Object.setPrototypeOf(jonh, soldier); // в динамике

const tweets = [
    'Какой-то странный тред',
    'Твит, адресованный Илону Маску',
    'Ответ на инфоповод'
  ];
  
  function consoleTweet(tweet) {
      console.log(tweet);
  }
  
  tweets.forEach(consoleTweet);


  function createSong(title, artist) {
    // this = {}; — движок сделает это сам
  
    // Добавим в this необходимые свойства
    this.title = title;
    this.artist = artist;
    this.isLiked = false;
  
    // return this; —  это движок тоже берёт на себя
  }
  
  const song = new createSong('На заре', 'Альянс');
  
  console.log(song);