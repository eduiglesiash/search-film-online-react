import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from "../components/buttonBackToHome";

const API_KEY = '1350c2d7';


export class Detail extends Component {

  static propTypes = {
    id: PropTypes.string,
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = {
    movie: {}
  };

  componentDidMount() {
    console.log('props: ', this.props);
    const {id} = this.props.match.params;
    this._fetchMovie({id})
  }

  _fetchMovie = ({id}) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
          console.log({movie});
          this.setState({movie})
        })
  };

  static _goBack() {
    window.history.back()
  }

  render() {
    const {Title, Poster, Actors, Metascore, Plot} = this.state.movie;
    return (
        <div>
          <ButtonBackToHome/>
          <h1>{Title}</h1>
          <figure>
            <img src={Poster} alt="Title"/>
          </figure>
          <div>
            <h3>{Actors}</h3>
            <span>{Metascore}</span>
            <p>{Plot}</p>
          </div>
        </div>
    )
  }
}