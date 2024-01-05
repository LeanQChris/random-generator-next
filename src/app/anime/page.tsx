import React from 'react'
import { fetchRandomAnimeQuote } from './data/api'
import Quote from './components/quote';

export default async function RandomAnimeQuotePage() {
  const data = await fetchRandomAnimeQuote();
  return (
    <div>
      <Quote animeQuote={data}/>
    </div>
  )
}
