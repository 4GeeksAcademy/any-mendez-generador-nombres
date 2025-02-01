/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const excusaElement = document.getElementById("excusa");
  const pronoun = [
    "the",
    "our",
    "theirs",
    "his",
    "its",
    "this",
    "that",
    "mine",
    "your",
    "them"
  ];
  const adj = [
    "great",
    "big",
    "small",
    "fast",
    "slow",
    "happy",
    "sad",
    "beautiful",
    "interesting",
    "delicious"
  ];
  const noun = [
    "jogger",
    "racoon",
    "tree",
    "car",
    "house",
    "book",
    "dog",
    "cat",
    "city",
    "mountain"
  ];
  const points = [".com", ".es", ".net", ".edu", "gob"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < points.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + points[l]);
        }
      }
    }
  }

  // function GenerandoExcusas() {
  //   const randomProun = pronoun[Math.floor(Math.random() * pronoun.length)];
  //   const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  //   const randomNoun = noun[Math.floor(Math.random() * noun.length)];

  //   const excusa = randomProun + randomAdj + randomNoun + ".com";
  //   return excusa;
  // }
  // excusaElement.textContent = GenerandoExcusas();
};
