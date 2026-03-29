const muhavara = [
  "Believe in yourself and all that you are.",
  "Success is not final, failure is not fatal.",
  "Do something today that your future self will thank you for.",
  "Dream big and dare to fail.",
  "Stay hungry, stay foolish.",
  "The only way to do great work is to love what you do.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Opportunities don’t happen. You create them.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Dream it. Wish it. Do it.",
  "Stay focused and never give up.",
  "Small steps every day lead to big results.",
  "Consistency is the key to success.",
  "Don’t stop until you’re proud.",
  "Turn your dreams into plans.",
];
const button = document.querySelector("button");
const quote = document.querySelector("h1");
button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * 20);
  quote.textContent = muhavara[index];
});
