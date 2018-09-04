/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectPokemonData,
} from 'containers/App/selectors';
import PokedexImg from 'images/pokedex.png';
import { Section, ImageWrapper } from './styles';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A web based pokedeck" />
        </Helmet>
        <div>
          <Section>
            <ImageWrapper src={PokedexImg} alt="Pokedex" />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  pokemonData: makeSelectPokemonData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
