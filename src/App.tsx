import React from 'react'
import sounds from './data/sounds.json'
import data from './assets/sounds'
import { SoundCard } from './components/SoundCard'

function App() {
  return (
    <div>
      <header>
        <h1>Avvay</h1>
      </header>
      <main>
        {sounds.map(sound => (
          <SoundCard key={sound.id} sound={sound} data={data[sound.id]} />
        ))}
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
