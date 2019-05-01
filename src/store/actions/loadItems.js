import PokemonAPI from '../../api/PokemonAPI'
import { LOAD_ITEMS } from './types'
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
    return {
      avatar: e.data.sprites.front_default,
      avatar_shiny: e.data.sprites.front_shiny
    }
  })
}

const fetchMarvel = async limit => {
  const response = await marvelAPI.fetch(limit)

  const heroes = response.data.data.results.map(e => {
    return {
      path: `${e.thumbnail.path}/portrait_medium.${e.thumbnail.extension}`
    }
  })

  return heroes.map(e => {
    return { avatar: e.path, avatar_shiny: e.path }
  })
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
