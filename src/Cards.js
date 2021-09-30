import React from 'react';


const Cards = (props) => {
  return (
    <div className="card" >
      <img className="card-image" src={props.images.sm} alt="hero_image"/>
      <div className="card-data">
        <div>Name: {props.name}</div>
        <div>Intelligence: {props.powerstats.intelligence}</div>
        <div>Strength: {props.powerstats.strength}</div>
        <div>Speed: {props.powerstats.speed}</div>
        <div>Durability: {props.powerstats.durability}</div>
        <div>Power: {props.powerstats.power}</div>
        <div>Combat: {props.powerstats.combat}</div>
        <div>Gender: {props.appearance.gender}</div>
        <div>Race: {props.appearance.race}</div>
        <div>Height: {props.appearance.height[0]}; {props.appearance.height[1]};</div>
        <div>Weight: {props.appearance.weight[0]}; {props.appearance.weight[1]};</div>
        <div>Eye Color: {props.appearance.eyeColor}</div>
        <div>Hair Color: {props.appearance.hairColor}</div>
        <div>Full Name: {props.biography.fullName}</div>
        <div>Alter Egos: {props.biography.alterEgos}</div>
        <div>Aliases: {props.biography.aliases.map((alias, index) => {
          return <div key={index}>{alias}{index === alias.length - 1 ? '' : ', '}</div>
        })}</div>
        <div>Place of Birth: {props.biography.placeOfBirth}</div>
        <div>First Appearance: {props.biography.firstAppearance}</div>
        <div>Publisher: {props.biography.publisher}</div>
        <div>Alignment: {props.biography.alignment}</div>
      </div>
    </div>

  )
}

export default Cards;

// {
//   "name": "A-Bomb",
//   "powerstats": {
//     "intelligence": 38,
//     "strength": 100,
//     "speed": 17,
//     "durability": 80,
//     "power": 24,
//     "combat": 64
//   },
//   "appearance": {
//     "gender": "Male",
//     "race": "Human",
//     "height": [
//       "6'8",
//       "203 cm"
//     ],
//     "weight": [
//       "980 lb",
//       "441 kg"
//     ],
//     "eyeColor": "Yellow",
//     "hairColor": "No Hair"
//   },
//   "biography": {
//     "fullName": "Richard Milhouse Jones",
//     "alterEgos": "No alter egos found.",
//     "aliases": [
//       "Rick Jones"
//     ],
//     "placeOfBirth": "Scarsdale, Arizona",
//     "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
//     "publisher": "Marvel Comics",
//     "alignment": "good"
//   },
//   "work": {
//     "occupation": "Musician, adventurer, author; formerly talk show host",
//     "base": "-"
//   },
//   "connections": {
//     "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
//     "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
//   },
//   "images": {
//     "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
//     "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
//     "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
//     "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
//   }
// }