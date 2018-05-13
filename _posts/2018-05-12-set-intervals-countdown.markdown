---
layout: post
title:  "Javascript and Set Intervals"
shorttitle: "Back to Basics"
date:   2018-05-12 10:40:29 -0700
category: code
---

This past week I was discussing with a coworker about how I feel like jQuery has made me extremely lazy as a developer, that same day I was also spinning up a possible new checkout process and needed some functionality to have a timer counting down until the cart expired. I thought to myself that this is the perfect chance to skip the jQuery and just use "vanilla" Javascript instead. With the way the frontend world is moving with things like React and Angular and Typescript and ES6 - jQuery isn't really that necessary to speed development anymore, and using it will make the code we write more tedious to update to newer frameworks when the day comes to update, which it always does. 

Building the timer meant dusting off more cobwebs than I'd like to admit - however, coding is like working out - if you don't strengthen and stretch those particular muscles then it's going to be a little harder, doesn't mean that the muscle memory isn't there or that building the new metaphorical muscles isn't impossible. So, today, off the clock from my job I put myself back to the task to make a reusable countdown timer that I could just import into my script and call it a day, but potentially use for other purposes also. There's absolutely room to expand this and that's a good thing!


Let's start with the function `startCountDown`, this is the function fired on `setInterval`. In it we're passed the id which is what we'll use to render an updated countdown to the DOM, the specific end date we're looking for (which is the date time stamp from when the parent function is triggered) and an array of what time sections to show - so days, hours, minutes, seconds.

```
let startCountDown = (id, endDate, displayArray) => {
  let now = new Date().getTime();
  let distance = endDate - now;
  let times = {
    days : Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds : Math.floor((distance % (1000 * 60)) / 1000)
  }

  let display = [];
  for (let i = 0; i < displayArray.length; i++){
    display.push(`${times[displayArray[i]]}`, `${capitalizeFirstLetter(displayArray[i].slice(0,3))}`);
  }

  document.getElementById(id).innerHTML = display.join(" ");

  if (distance < 0) {
   clearInterval(countDown);
    document.getElementById(id).innerHTML = "EXPIRED";
  }
};
```

We find the difference between the passed in endDate parameter and the date time of the current moment and use that `distance` to calculate the time between the `now` and the `endDate`. I lifted these calculations straight from MDN, I see no need to recreate the wheel when math is math is math.

Then, because I want this code to be reusable I'm looping through the passed in `displayArray` to grab the matching `times` object keys and only rendering those sections of that object. My specific want for this was a 15 minute timer, but I really don't want to have to make this whole thing again if I suddenly need a timer for 5 days and 3 hours, this gives me the ability to be flexible.

So then, we render the contents of `display`.

And finish by checking to see if the `distance` is 0 or less (never gonna happen) and when it is, we clear the interval so that the timer will stop. Here we could add an alert or a redirect. It's probably a great spot to add an additional param passed through to `startCountDown` with a clearFunction that is triggered within this if block so that it's truly reusable.
An iteresting thing I learned doing this in es6 - because I bound `startCountDown` to be able to pass in some variables I actually have to clear the interval from _within_ the setInterval because of the scope of `this`.  More on that [here](https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function)

The function I'm actually calling to initiate this thing is called `coundDownClock`, here I'm setting whatever the id for the element I want to show the timer results in, the total time to elapse (which right now is just minutes, but this could be adjusted) and an array with strings for what parts of time to display - it's important that these strings match the time keys in the `startCountDown` function.

In `countDownClock` we grab this moment date and then getMinutes and add the timeToElapse to it (this is where that whole, it could be adjusted for _non_minutes comes in, or you could do this setting of the endDate outside of `countDownClock` so it's a mute point).  Then you just call `setInterval` from `countDownClock` and all is done.

```
const countDownClock = (id, timeToElapse, displayArray) => {
  // establish start time from a date instance and then set the count we're looking for
  let endDate = new Date();
  endDate.getTime();
  endDate.setMinutes(endDate.getMinutes() + timeToElapse); // if you wanted to do something other than minutes this would need to be adapted
  setInterval(startCountDown.bind(this, id, endDate, displayArray), 1000);
}

let containerId = "countdown";
let timeToElapse = 15; // whole numbers only, how long the timer is going for
let displayArray = ['minutes', 'seconds']; // parts of time to render on screen

countDownClock(containerId, timeToElapse , displayArray);
```

Honestly, it's not that complicated but it's easy to get stuck when you let yourself write jQuery. Again, it's like watching that 3rd episode of Buffy for the evening vs getting up and taking your puppy for a walk or going for a run. All good things take practice and the basics are never something we should stop practicing.

So here's to foundations, and committing to building better iterations of ourselves.

[View full code on codepen]( https://codepen.io/brittanyIRL/pen/MGXwoy)
