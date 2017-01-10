import React, { Component } from 'react';
import { NoComposition, FPComposition, RecompseComposition } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Composition Examples</h1>
        <hr/>
        <section>
          <h2>Example of view-container with no composition</h2>
          <NoComposition title='NoComposition Title'/>
        </section>
        <hr/>
        <section>
          <h2>Example of view-container with composition using lodash</h2>
          <FPComposition title='FPComposition Title'/>
        </section>
        <hr/>
        <section>
          <h2>Example of view-container with composition using recompose</h2>
          <RecompseComposition title='RecompseComposition Title'/>
        </section>
      </div>
    );
  }
}

export default App;
