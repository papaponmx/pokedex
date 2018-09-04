/*
* Pokemon Detail
*/

import React from 'react';
import PropTypes from 'prop-types';

import { H2 } from './styles';

const PokemonDetail = ({ pokemonData }) => {
  // if (!pokemonData.name) {
  //   return 'Something is wrong, please try searching for a pokemon';
  // }
  return (
    <div>
      <H2>{pokemonData.name}</H2>
      <p>
        This is a pokemon that weights
        <strong> {pokemonData.weight} lbs</strong>. Part of the <strong>{pokemonData.species.name}</strong> species.
        <br />
        This pokemon is famous for its ability to <strong>{pokemonData.abilities[0].ability.name}</strong>
      </p>
    </div>
  )
}

PokemonDetail.propTypes = {
  pokemonData: PropTypes.any,
};

export default PokemonDetail;
