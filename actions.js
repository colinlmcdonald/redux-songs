import  { songData } from './songData'
export const GET_SONG_DATA = 'GET_HELLO_WORLD',
             ADD_TO_QUEUE = 'ADD_TO_QUEUE',
             PLAY_SONG = 'PLAY_SONG',
             DEQUEUE = 'DEQUEUE'

export function getSongData() {
  return {
    type: GET_SONG_DATA,
    songData
  }
}

export function addSongToQueue(song) {
  return {
    type: ADD_TO_QUEUE,
    song
  }
}

export function playSong(song) {
  return {
    type: PLAY_SONG,
    song
  }
}

export function dequeue() {
  return {
    type: DEQUEUE
  }
}