let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 23;
if(isEarly && runnerAge>=18)
  {
    raceNumber+=1000;
    console.log("You will start race at 9:30 AM with raceNumber:" + raceNumber);
  }
if(runnerAge>=18 && !isEarly)
  {
    console.log("You will start race at 11:00 AM with raceNumber:" + raceNumber);
  }
else if(runnerAge<18)
  {
    console.log("You will start race at 12:30 AM with raceNumber:" + raceNumber);
  }
