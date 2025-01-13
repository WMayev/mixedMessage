const exercise = ['push-ups', 'squats', 'running', 'yoga', 'jumping rope'];
const exerciseTime = [5, 10, 15, 30, 45];
const results = ['more energy', 'better fitness', 'strong muscles', 'a healthy mind', 'improved physique'];

function generateRandomMessage() {
  const randomExercise = exercise[Math.floor(Math.random() * exercise.length)];
  const randomExerciseTime = exerciseTime[Math.floor(Math.random() * exerciseTime.length)];
  const randomResults = results[Math.floor(Math.random() * results.length)];
  
  return `Do the ${randomExercise} for ${randomExerciseTime} minutes to have ${randomResults}`;
}

console.log(generateRandomMessage());