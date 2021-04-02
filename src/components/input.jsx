import React, { useState } from 'react'
import _ from 'lodash'

const InputChannel = ({ apikey, setPlaylist }) => {
  const [channelId, setChannelId] = useState()

  const getData = async () => {
    let uri = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&key=${apikey}&maxResults=50`
    let res = await fetch(uri)
    res = await res.json()
    setPlaylist(_.get(res, 'items', []))
  }

  return (
    <>
      <h1 className="text-3xl mt-2 mb-2">Input</h1>
      <div className="space-y-1.5 bg-gray-100 p-3 inline-block rounded-2xl w-1/2 max-w-lg min-w-max">
        <div className="flex">
          <div className="w-24 inline-block">channel id:</div>
          <input className="border-2 flex-grow" type="text" onKeyUp={(e) => setChannelId(e.target.value)} />
        </div>

        <button className="border-2 border-gray-300 p-1 rounded-md float-right bg-gray-200" onClick={() => getData()}>
          Search
        </button>
      </div>
      <ul className="mt-2">
        <li>channel id: https://www.youtube.com/channel/[channel id] e.g UCxxxxxxxxx</li>
      </ul>
    </>
  )
}
export default InputChannel
