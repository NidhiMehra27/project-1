const quotes = [
  "Don't stop until you're proud.",
  "The best investment is in yourself.",
  "Believe you can, and you're halfway there.",
  "Growth begins where excuses end.",
  "Be stronger than your strongest excuse.",
  "Your only limit is your mindset.",
  "Every expert was once a beginner.",
  "Make yourself so capable that opportunities find you.",
  "Success is earned, not given.",
  "Work in silence, let success make the noise.",
  "The pain of discipline is less than the pain of regret.",
  "Focus on progress, not perfection.",
  "A year from now, you'll wish you had started today.",
  "Consistency beats talent when talent doesn't work hard.",
  "Don't wait for opportunity, create it.",
  "Your degree is a paper, your skills are your power.",
  "Failures are lessons in disguise.",
  "Keep learning; the world rewards the curious.",
  "The comeback is always stronger than the setback.",
  "Be the person your future self will thank.",
  "Nothing changes if nothing changes.",
  "Hard work compounds like interest.",
  "You don't have to be the best, just better than yesterday.",
  "Great things take time.",
  "Turn your dreams into plans and your plans into reality."
];


const button  = document.querySelector('button');
const h1 = document.querySelector('h1');


button.addEventListener('click', () =>{
const index = Math.floor(Math.random() * quotes.length);
h1.textContent = quotes[index]
})