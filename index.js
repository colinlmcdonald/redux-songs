import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { getSongData, addSongToQueue, playSong, dequeue } from './actions'
import { SongList as Library } from './SongList'
import { SongList as SongQueue } from './SongList'
import AudioPlayer from 'react-audio-player'

class MyTunes extends Component {
  constructor(props) {
    super(props)
    this.addToQueue = this.addToQueue.bind(this)
    this.ended = this.ended.bind(this)
  }

  addToQueue(e, audio) {
    const {song, dispatch } = this.props
    if (song) {
      dispatch(addSongToQueue(audio))
    } else {
      dispatch(addSongToQueue(audio))
      dispatch(playSong(audio))
    }
  }

  ended() {
    console.log('made it ended')
    this.props.dispatch(dequeue())
  }

  componentDidMount() {
    this.props.dispatch(getSongData())
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <h3>Library</h3>
          {this.props.songs.map((song, i) => {
            return <Library song={song} key={i} handleClick={this.addToQueue} />
          })}
        </div>
        <div>
          <h3>Song Queue</h3>
          {this.props.queue.map((song, i) => {
            return <SongQueue song={song} key={i} index={i} />
          })}
        </div>
        <div>
          <h3>Player</h3>
          {this.props.song ? <AudioPlayer autoPlay={true} src={this.props.song.url} onEnd={this.ended}/>
                            : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const songs = state.songs
  const queue = state.queue
  const song = state.song
  return {
    songs,
    queue,
    song
  } 
}

export default connect(mapStateToProps)(MyTunes)


