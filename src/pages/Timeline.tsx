import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { tweets } from '../components/Tweets'
import { FormEvent, useState } from 'react'
import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br>✅ npm start: De 32s para 400ms (sim,demorava 30s)<br />✅ npm build: De 120s para 22s<br /><br />Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥',
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/gabrielgxrcia.png"
            alt="Gabriel Garcia"
          />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onChange={event => {
              setNewTweet(event.target.value)
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
