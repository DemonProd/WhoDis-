// Shuffle function to randomize the order of images and questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Images available for guessing
const images = [
  'Bombombini Gusini.webp',
  'Brr Brr Patapim.webp',
  'Cappuccino Assassino.jpg',
  'Lirili Larila.jpg',
  'Tralalero Tralala.webp',
  'Trippi Troppi.webp',
  'Tung Tung Tung Sahur.jpg'
];

// Predefined answers for each image
const answers = {
  'Bombombini Gusini.webp': 'Bombombini Gusini',
  'Brr Brr Patapim.webp': 'Brr Brr Patapim',
  'Cappuccino Assassino.jpg': 'Cappuccino Assassino',
  'Lirili Larila.jpg': 'Lirili Larila',
  'Tralalero Tralala.webp': 'Tralalero Tralala',
  'Trippi Troppi.webp': 'Trippi Troppi',
  'Tung Tung Tung Sahur.jpg': 'Tung Tung Tung Sahur'
};

// Shuffle the images
shuffle(images);

// Create questions with one image each
const questions = images.map(image => ({
  image,
  answer: answers[image] || 'unknown'
}));

let currentQuestionIndex = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('img1').src = question.image; // Show one image
  document.getElementById('user-answer').value = '';  // Clear the input field
  document.getElementById('feedback').textContent = ''; // Clear feedback

  // Debugging: Log the current image and answer for the question
  console.log("Current Image: " + question.image);
  console.log("Correct Answer: " + question.answer);
}

function checkAnswer() {
  // Get user input and trim spaces
  const userInput = document.getElementById('user-answer').value.trim().toLowerCase();

  // Get the correct answer and trim spaces
  const correctAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase();

  // Debugging: Log the user input and the correct answer
  console.log("User Input: " + userInput);
  console.log("Correct Answer: " + correctAnswer);

  // Check if the user input matches the correct answer
  if (userInput === correctAnswer) {
    document.getElementById('feedback').textContent = '✅ Correct!';
    currentQuestionIndex++;
    setTimeout(() => {
      if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load next question
      } else {
        document.getElementById('feedback').textContent = '🎉 Quiz complete!';
        document.querySelector('.image-pair').style.display = 'none';
        document.querySelector('input').style.display = 'none';
        document.querySelector('button').style.display = 'none';
      }
    }, 1000);
  } else {
    document.getElementById('feedback').textContent = '❌ Try again!';
  }
}

document.addEventListener('DOMContentLoaded', loadQuestion);