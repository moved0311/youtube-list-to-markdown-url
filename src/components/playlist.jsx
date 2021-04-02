import React from 'react'
import _ from 'lodash'

const Playlist = ({ playlists, setVideolists, apikey }) => {
  const getListDetail = async (listId) => {
    let getListDetailUri = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${apikey}&playlistId=${listId}`
    let res = await fetch(getListDetailUri)
    res = await res.json()
    setVideolists(_.get(res, 'items', []))
  }

  return (
    <>
      <h1 className="text-3xl mt-2 mb-2">Play lists</h1>
      <div className="space-y-1.5">
        {playlists.map((list) => {
          let listId = _.get(list, 'id', '')
          let title = _.get(list, 'snippet.title', '')
          return (
            <div
              key={listId}
              onClick={() => {
                getListDetail(listId)
              }}
              className="border-2 border-blue-300 bg-blue-100"
            >
              {title}
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Playlist
