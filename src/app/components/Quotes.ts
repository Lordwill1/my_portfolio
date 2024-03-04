interface MixedQuote {
    id: number;
    category: string;
    quote: string;
    author: string;
  }
  
  const mixedQuotes: MixedQuote[] = [
    {
      id: 1,
      category: "Life Quote",
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      id: 2,
      category: "Nature Quote",
      quote: "Look deep into nature, and then you will understand everything better.",
      author: "Albert Einstein",
    },
    {
      id: 3,
      category: "Developers Quote",
      quote: "It's not a bug, it's a feature.",
      author: "Unknown Author",
    },
    {
      id: 4,
      category: "Life Quote",
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      id: 5,
      category: "Nature Quote",
      quote: "The poetry of the earth is never dead.",
      author: "John Keats",
    },
    {
      id: 6,
      category: "Developers Quote",
      quote: "Hello World!",
      author: "Unknown Author",
    },
    {
      id: 7,
      category: "Fun Quote",
      quote: "Why did the developer go broke? Because he used up all his cache!",
      author: "Unknown Author",
    },
    {
      id: 8,
      category: "Life Quote",
      quote: "To me, the only sin is mediocrity",
      author: "Martha Graham",
    },
    {
      id: 9,
      category: "Nature Quote",
      quote: "Adopt the pace of nature: her secret is patience.",
      author: "Ralph Waldo Emerson",
    },
    {
      id: 10,
      category: "Developers Quote",
      quote: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
    },
    {
      id: 11,
      category: "Life Quote",
      quote: "Life is short, and it's up to you to make it sweet.",
      author: "Sarah Louise Delany",
    },
    {
      id: 12,
      category: "Nature Quote",
      quote: "The mountains are calling, and I must go.",
      author: "John Muir",
    },
    {
      id: 13,
      category: "Developers Quote",
      quote: "Why do programmers prefer dark mode? Because light attracts bugs!",
      author: "Unknown Author",
    },
    {
      id: 14,
      category: "Life Quote",
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein",
    },
    {
      id: 15,
      category: "Nature Quote",
      quote: "Study nature, love nature, stay close to nature. It will never fail you.",
      author: "Frank Lloyd Wright",
    },
    {
      id: 16,
      category: "Developers Quote",
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
    },
    {
      id: 17,
      category: "Fun Quote",
      quote: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      author: "Unknown Author",
    },
    {
      id: 18,
      category: "Life Quote",
      quote: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
      author: "Oliver Goldsmith",
    },
    {
      id: 19,
      category: "Nature Quote",
      quote: "The clearest way into the Universe is through a forest wilderness.",
      author: "John Muir",
    },
    {
      id: 20,
      category: "Fun Quote",
      quote: "Why don't scientists trust atoms? Because they make up everything!",
      author: "Unknown Author",
    },
    {
      id: 21,
      category: "Life Quote",
      quote: "In a world where people sit and watch people fall, be a person who helps people climb.",
      author: "Rachel Mitchell",
    },
    {
      id: 22,
      category: "Development Quote",
      quote: "If at first you didn't succeed, call it version 1.0.",
      author: "Caelan Huntress",
    },
    {
        id: 23,
        category: "Career Quote",
        quote: "Your career is a journey, not a destination. Enjoy the ride!",
        author: "Unknown",
      },
      {
        id: 24,
        category: "Development Quote",
        quote: "Coding is not just about writing lines of code; it's about solving problems.",
        author: "Unknown",
      },
      {
        id: 25,
        category: "Technology Quote",
        quote: "Technology is best when it brings people together.",
        author: "Matt Mullenweg",
      },
      {
        id: 26,
        category: "Bible Quote",
        quote: "Trust in the Lord with all your heart and lean not on your own understanding.",
        author: "Proverbs 3:5",
      },
      {
        id: 27,
        category: "Career Quote",
        quote: "If you are not making money, make sure you are acquiring knowledge",
        author: "Lordwill",
      },
      {
        id: 28,
        category: "Development Quote",
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
      },
      {
        id: 29,
        category: "Technology Quote",
        quote: "The art challenges the technology, and the technology inspires the art.",
        author: "John Lasseter",
      },
      {
        id: 30,
        category: "Bible Quote",
        quote: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        author: "Jeremiah 29:11",
      },
      {
        id: 31,
        category: "Career Quote",
        quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        author: "Steve Jobs",
      },
      {
        id: 32,
        category: "Development Quote",
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        id: 33,
        category: "Technology Quote",
        quote: "The technology you use impresses no one. The experience you create with it is everything.",
        author: "Sean Gerety",
      },
      {
        id: 34,
        category: "Bible Quote",
        quote: "Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
        author: "Joshua 1:9",
      },
      {
        id: 35,
        category: "Career Quote",
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        id: 36,
        category: "Development Quote",
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        id: 37,
        category: "Technology Quote",
        quote: "The technology you use impresses no one. The experience you create with it is everything.",
        author: "Sean Gerety",
      },
      {
        id: 38,
        category: "Bible Quote",
        quote: "I can do all things through him who strengthens me.",
        author: "Philippians 4:13",
      },
      {
        id: 39,
        category: "Career Quote",
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        id: 40,
        category: "Development Quote",
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        id: 41,
        category: "Technology Quote",
        quote: "The technology you use impresses no one. The experience you create with it is everything.",
        author: "Sean Gerety",
      },
      {
        id: 42,
        category: "Bible Quote",
        quote: "Delight yourself in the Lord, and he will give you the desires of your heart.",
        author: "Psalm 37:4",
      },
      {
        id: 43,
        category: "Career Quote",
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
      },
      {
        id: 44,
        category: "Development Quote",
        quote: "The expert in anything was once a beginner.",
        author: "Helen Hayes",
      },
      {
        id: 45,
        category: "Technology Quote",
        quote: "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "Arthur C. Clarke",
      },
      {
        id: 46,
        category: "Bible Quote",
        quote: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control.",
        author: "Galatians 5:22-23",
      },
      {
        id: 47,
        category: "Development Quote",
        quote: "Do it unsure, do it tensed, do it tired, do it confused, feel the fear and do It anyway",
        author: "Susan Jeffers",
      },
      {
        id: 47,
        category: "Life Quote",
        quote: "Commit to the journey, persevere till the end, and savour the victory of finishing what you started",
        author: "Chat GPT",
      },
  ];
  
  export default mixedQuotes;
  