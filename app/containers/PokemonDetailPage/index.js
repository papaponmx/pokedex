/*
* Pokemon Detail Page
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import H1 from 'components/H1';
import { makeSelectPokemonData } from 'containers/App/selectors';
import messages from './messages';
import PokemonDetail from '../../components/PokemonDetail';

class PokemonDetailPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Pokemon Detail Page</title>
          <meta
            name="description"
            content="Pokemon Detail page of Pokedex application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <PokemonDetail pokemonData={this.props.pokemonData} />
      </div>
    );
  }
}

PokemonDetailPage.propTypes = {
  onSubmitForm: PropTypes.func,
  onChangePokemonName: PropTypes.func,
  dispatch: PropTypes.func,
  pokemonName: PropTypes.string,
  pokemonData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  pokemonData: makeSelectPokemonData(),
});

const withConnect = connect(
  mapStateToProps,
  // mapDispatchToProps,
);

export default compose(withConnect)(PokemonDetailPage);
