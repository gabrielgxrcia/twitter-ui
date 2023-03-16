import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'

import './Status.css'

const answers = ['Concordo...', 'Olha, faz sentido', 'Parabéns pelo progresso.']

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br>✅ npm start: De 32s para 400ms (sim,demorava 30s)<br />✅ npm build: De 120s para 22s<br /><br />Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/gabrielgxrcia.png"
            alt="Gabriel Garcia"
          />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map(answers => {
        return <Tweet key={answers} content={answers} />
      })}
    </main>
  )
}
