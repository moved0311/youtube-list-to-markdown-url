import React from 'react'
import _ from 'lodash'

const Markdown = ({ videolists }) => {
  return (
    <>
      <h1 className="text-3xl mt-2 mb-2">Videos markdown</h1>
      {videolists.length > 0 && (
        <div className="border-2 border-green-200 bg-green-100">
          {videolists.map((video) => {
            let title = _.get(video, 'snippet.title', '')
            let videoId = _.get(video, 'snippet.resourceId.videoId', '')
            return <div key={video.id}>{`* [ ] [${title}](https://www.youtube.com/watch?v=${videoId})`}</div>
          })}
        </div>
      )}
    </>
  )
}
export default Markdown
