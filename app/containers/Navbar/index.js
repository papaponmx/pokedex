/**
 *
 * Navbar
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Form from './Form';
import Input from './Input';
import { loadPokemonData } from '../App/actions';
import { changePokemonName } from '../HomePage/actions';
import reducer from '../HomePage/reducer';
import saga from '../HomePage/saga';
import messages from './messages';

const Navbar = props => (
  <div>
    <h2>
      <FormattedMessage {...messages.pokedexHeader} />
    </h2>
    <Form onSubmit={props.onSubmitForm}>
      <label htmlFor="pokemonName">
        <Input
          id="pokemonName"
          type="text"
          placeholder="Bulbasur"
          value={props.pokemonName}
          onChange={props.onChangePokemonName}
        />
      </label>
    </Form>
  </div>
);

Navbar.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangePokemonName: PropTypes.func,
  pokemonName: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangePokemonName: evt => dispatch(changePokemonName(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadPokemonData());
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Navbar);
