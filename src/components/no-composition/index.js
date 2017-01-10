import React, { Component } from 'react';
import { Container, View, Feature } from '../';

class NoComposition extends Component {
  render() {
    return (
      <Container>
        <View title={this.props.title}>
          <Feature/>
        </View>
      </Container>
    );
  }
}

export default NoComposition;
