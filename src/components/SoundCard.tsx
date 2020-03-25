import React, { useState } from 'react'
import ReactHowler from 'react-howler'

type Sound = {
  id: string
  name: string
}

type Props = {
  sound: Sound
  data: any
}

export const SoundCard: React.FC<Props> = ({ sound: { name }, data }) => {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  const play = () => {
    setPlaying(true)
  }

  const stop = () => {
    setPlaying(false)
  }

  return (
    <div>
      <h3>{name}</h3>
      <ReactHowler src={data} loop preload playing={playing} volume={volume} />
      <div>
        {playing ? (
          <button onClick={stop}>Stop</button>
        ) : (
          <button onClick={play}>Play</button>
        )}
      </div>
      <div>
        <label>
          <input
            type="range"
            min="0"
            max="1"
            step=".05"
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
          />
          {volume.toFixed(2)}
        </label>
      </div>
    </div>
  )
}
