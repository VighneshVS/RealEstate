import React from 'react'
import './founderWords.css'

function founderWords() {
    const quotes =[
        {
            quote: "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.",
            Person: "Vinsmoke Sanji"
        },
        {
            quote: "Home is where you can say anything you like because nobody listens to you anyway.",
            Person: "Monkey D. Luffy"
        },
    ]
  return (
    <div className='home--founderWords'>
        {quotes.map(person => {
            return(
                <div className="quote">
                <h3>{person.quote}</h3>
                <p>-{person.Person}</p>
                </div>
            )
        })}
    </div>
  )
}

export default founderWords