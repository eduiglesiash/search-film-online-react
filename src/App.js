import React, {Component} from 'react';


import {Detail} from "./pages/Detail";
import {Home} from "./pages/Home";

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {


  render() {
    // Vamos a crear la API nativa de JavaScript para crear un enrutador
    const url = new URL(document.location);

    const Page = url.searchParams.has('id')
        ? <Detail id={url.searchParams.get('id')}/>
        : <Home/>


    return (
        <div className="App">
          {Page}
        </div>
    );
  }
}

export default App;
