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
import { createStructuredSelector } from 'reselect';
// import List from 'components/List/Loadable';
// import ListItem from 'components/ListItem/Loadable';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { NavbarWrapper, Form, Input, Suggestions } from './styles';
import { loadPokemonData } from '../App/actions';
import { changePokemonName } from '../HomePage/actions';
import { makeSelectPokemonName } from '../HomePage/selectors';
import reducer from '../HomePage/reducer';
import saga from '../HomePage/saga';
import messages from './messages';
import searchHistory from '../../utils/searchHistory';

const RenderSuggestions = () => {
  const history = searchHistory();
  if (searchHistory === []) {
    return '';
  }
  return searchHistory().map(item => <p>Some item</p>);
};

const Navbar = props => (
  <NavbarWrapper>
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
      {props.pokemonName && <Suggestions><RenderSuggestions /></Suggestions>}
    </Form>
  </NavbarWrapper>
);

Navbar.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangePokemonName: PropTypes.func,
  pokemonName: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  pokemonName: makeSelectPokemonName(),
});

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
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Navbar);
