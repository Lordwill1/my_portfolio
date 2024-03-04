import React, { useState, useEffect } from 'react';
import mixedQuotes from './Quotes';

const WordsonMarble = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index for the next quote
      const randomIndex = Math.floor(Math.random() * mixedQuotes.length);
      setCurrentQuoteIndex(randomIndex);
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const currentQuote = mixedQuotes[currentQuoteIndex];

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-[28px] font-bold text-litewhite" data-aos="fade-down">
          Words On Marble
        </h1>
        <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
      </div>

      <div className="relative w-full bg-eerie-black rounded-lg border border-jet border-solid shadow-sm shadow-jet p-5 flex flex-col gap-5 text-center">
        <h3 className="text-[16px] md:text-[18px] text-litewhite font-bold" data-aos="fade-down">
          {currentQuote.category}
        </h3>
        <p className="text-[14px] md:text-[16px] text-litewhite" data-aos="fade-down">
          {currentQuote.quote}
        </p>
        <h3 className="text-[16px] md:text-[18px] text-vegas-gold font-bold font-italic" data-aos="fade-down">
          {currentQuote.author}
        </h3>
      </div>
    </main>
  );
};

export default WordsonMarble;
