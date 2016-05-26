import React from 'react'

export const SongList = ({song, handleClick, index}) => (
  <div onClick={e => handleClick(e, song)} >{song.artist} - {song.title}</div>
)