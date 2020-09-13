"use strict"

const sups = document.querySelectorAll("sup");
const sources = document.querySelectorAll(".src");

sups.forEach((sup, index) => sup.addEventListener('click', () => {
   sources[index].scrollIntoView({
      block: "center"
   });
}));

sources.forEach((src, index) => src.addEventListener('click', () => {
   sups[index].scrollIntoView({
      block: "center"
   });
}));
