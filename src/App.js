import { useState } from 'react'
import InputChannel from './components/input'
import Playlist from './components/playlist'
import Markdown from './components/markdown'

function App() {
  const key = process.env.REACT_APP_GOOGLE_API_KEY
  const [playlists, setPlaylist] = useState([])
  const [videolists, setVideolists] = useState([])

  return (
    <div className="m-2 min-w-min">
      <InputChannel apikey={key} setPlaylist={setPlaylist} />
      <Playlist playlists={playlists} setVideolists={setVideolists} apikey={key} />
      <Markdown videolists={videolists} />
    </div>
  )
}

export default App
