import PokemonAPI from '../../api/PokemonAPI'
import { LOAD_ITEMS, PLAY, RESTART, VALIDATE } from './types'
import MarvelAPI from '../../api/MarvelAPI'
import marvelAxios from '../../api/marvelAxios'
import pokemonAxios from '../../api/pokemonAxios'
import '@babel/polyfill'

const pokemonAPI = new PokemonAPI(pokemonAxios)
const marvelAPI = new MarvelAPI(marvelAxios)

const fetchPokemon = async limit => {
  const answer = await pokemonAPI.fetch(limit)

  const loadPokemons = answer.data.results.map(e => {
    return pokemonAPI.get(e.url)
  })
  const pokemons = await Promise.all(loadPokemons)

  return pokemons.map(e => {
    return e.data.sprites
  })
}

const fetchMarvel = async limit => {
  return marvelAPI.fetch(limit)
}

export const loadItems = (limit = 2) => async dispatch => {
  const pokemonAnswer = fetchPokemon(limit)
  const marvelAnswer = fetchMarvel(limit)

  const items = await Promise.all([pokemonAnswer, marvelAnswer])

  return dispatch({
    type: LOAD_ITEMS,
    payload: items
  })
}

export const play = square => async dispatch => {
  console.log('play', square)
  return dispatch({
    type: PLAY,
    payload: square
  })
}

export const restart = () => {
  console.log('restart')
  return {
    type: RESTART
  }
}

export const validate = () => async (dispatch, getState) => {
  console.log('validate')
  const state = {
    game: getState().game,
    plays: getState().plays
  }

  return dispatch({
    type: VALIDATE,
    payload: state
  })
}
