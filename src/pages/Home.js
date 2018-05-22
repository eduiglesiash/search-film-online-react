import React, {Component} from 'react'

// IMPORT COMPONENTS
import {Title} from "../components/Title";
import {SearchForm} from "../components/SearchForm";
import {MoviesList} from '../components/MoviesList'

export class Home extends Component {

  state = {
    results: [],
    useSearch: false
  };

  _handleResults = (results) => {
    this.setState({results, useSearch: true})
  };

  _renderResult () {
    return this.state.results.length === 0
        ? <p>Sorry! Results Not found</p>
        : <MoviesList movies={this.state.results} />
  }

  render() {
    return (
        <div>
          <Title>Search Movies</Title>
          <div className={'searchForm-wrapper'}>
            <SearchForm onResults={this._handleResults}/>
          </div>
          {
            this.state.useSearch
                ? this._renderResult()
                : <small>Use the form to search a movie</small>
          }
        </div>
    )
  }
}