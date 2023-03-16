import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/gabrielgxrcia.png" alt="Gabriel Garcia" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Gabriel Garcia</strong>
          <span>@gabrielgxrcia_</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            34
          </button>
          <button type="button">
            <ArrowsClockwise />
            34
          </button>
          <button type="button">
            <Heart />
            34
          </button>
        </div>
      </div>
    </Link>
  )
}
