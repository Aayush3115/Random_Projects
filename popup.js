const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Not everything that is faced can be changed, but nothing can be changed until it is faced. – James Baldwin",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
  ];
  
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  
  document.getElementById('getQuote').addEventListener('click', () => {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
  });
  