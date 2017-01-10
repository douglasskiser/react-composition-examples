import React, { Component } from 'react';
import {Footer, Title} from '../';
import {compose} from 'recompose';

const Container = children => (
  <div className='ngva-container'>
    {children}
  </div>
);

const View = children => (
  <div className='ngva-view'>
    <Title title={children.props.title}/>
    {children}
    <Footer/>
  </div>
);

const Feature = props => {
  return (
    <div className='my-feature' {...props}>
      My Feature Content
    </div>
  );
}

export default (props) => (
  <div className='ngva-fp-composition-wrapper'>
    {compose(Container, View, Feature)(props)}
  </div>
);
