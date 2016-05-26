import { GET_SONG_DATA, ADD_TO_QUEUE, PLAY_SONG, DEQUEUE } from './actions'

export default function cars(state = {
  songs: [],
  queue: [],
  song: undefined
}, action) {
  switch(action.type) {
    case GET_SONG_DATA:
      return Object.assign({}, state, {
        songs: action.songData
      })
    case ADD_TO_QUEUE:
      return Object.assign({}, state, {
        queue: state.queue.concat([action.song])
      })
    case PLAY_SONG:
      return Object.assign({}, state, {
        song: action.song
      })
    case DEQUEUE:
    console.log('made it reducers')
      return Object.assign({}, state, {
        queue: state.queue.slice(1),
        song: state.queue[1]
      })
    default:
      return state
  }
}
