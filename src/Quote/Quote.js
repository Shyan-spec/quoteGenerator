import './Quote.css';
import React from 'react';
import linkedIn from '/Users/shyanw/Documents/JS Projects/Quote Generator/quotegen/src/icons8-linkedin-2.svg'



const Quote = () => { 

     
    
    
    const quoteContainer = document.getElementById('quote-container')
     let apiQuotes = [];
    

     
//Get a new random Quote
    function newQuote() {
    let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];


    if(!quote.author) {
        document.getElementById('author').innerHTML = quote.author = 'Unknown';
    }
    else {
        document.getElementById('author').innerHTML = quote.author;
    }

    if(quote.text.length > 120) {
        document.getElementById('quote').classList.add('long-quote')
    }
    else{
        document.getElementById('quote').classList.remove('long-quote')
    }
    
    document.getElementById('quote').innerHTML = quote.text;

   
    
    
}

//Fetch API Quotes
    async function getQuote() {
        const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'

        try {
        let response = await fetch(apiUrl);
        apiQuotes = await response.json()
            newQuote();
        }
        catch(error) {
            console.log("error")
          
        }
    }

    function PostQuote() {
        let quoteText = document.getElementById('quote')
         let authorText  = document.getElementById('author')
    
        const linkedInUrl = `https://linkedin.com/feed/?text=${quoteText.textContent} - ${authorText.textContent}`;
        window.open(linkedInUrl, '_blank')
    }
    
   //GET First quote from api
        getQuote();
        

        return (
            <>
            
            {quoteContainer ? (<div className="loader"></div> )
                : (
            <div className="quote"> 
            

            <div>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" type="image/png" href="favicon.png"/>
                
               
                 <link rel="icon" type="image/png" href="https://s2.googleusercontent.com/s2/favicons?domain=jacinto.design"/> 
            
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"/>
                <link rel="stylesheet" href="style.css"/>
            </div>
            <div>
                <div className= 'quote-container' id= 'quote-container'>
                    <div className = 'quote-text'>
                        <i className='fas fa-quote-left'></i>
                        <span id="quote"></span>
                    </div>
                    <div className= 'quote-author'>
                        <span id ='author'></span>
                    </div>
                    <div className='button-container'>
                        <button onClick={PostQuote} 
                         title='Share to LinkedIn, just click start a post!'><img className='linked' alt =" " src={linkedIn}/> 
                        </button>
                        <button onClick={newQuote} id="new-quote">New Quote</button>
                    </div>
            
                </div>
            </div>

          
            
            </div>

             
             
            
            
        )

            }
            </>
        )}









export default Quote;