import React, { useState, useEffect } from 'react';

import twitterIcon from './twitter.svg';

import gitIcon from './github.png';
import linkedinIcon from './linkedin.svg';



const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  
  
 
      
  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
        <a  href={`https://twitter.com/intent/tweet?text=${quote}-${author}`} target="-blank" rel="noopener noreferrer" ><img className="twitt" src='https://tse4.mm.bing.net/th?id=OIP.Bd1KSEbw94SvkU0HDuMkFQHaHa&pid=Api&P=0'/></a>
            <span><img src={twitterIcon} alt="" /></span>
          
          <a href="https://www.linkedin.com/events/6864302724704534529/comments/" id="tumlr-quote">
            <span><img src={linkedinIcon} alt="" /></span>
          </a>
          <a href="https://github.com/vishnu-html/Travel.git" id="tumlr-quote">
            <span><img src={gitIcon} alt="" /></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">Generate Quote</button>
      </div>
    </div>
  )
}

export default Quotes;