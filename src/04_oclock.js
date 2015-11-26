"use strict"

/*
Write a program that given a time (in hours and minutes) gives you the degree of
the angle between the hands on the clock.
*/

let degrees = (hours, minutes) => {
  let hoursDegrees = hours % 12 * 360 / 12;
  let minutesDegrees = minutes * 360 / 60;
  return Math.abs(hoursDegrees - minutesDegrees);
}

let tests = [
  [3,30],
  [3,45],
  [3,0],
  [6,30],
  [4,20],
  [4,25]
];

tests.forEach(time => console.log(`${time[0]}:${time[1]}`, `${degrees(time[0], time[1])}°`));
