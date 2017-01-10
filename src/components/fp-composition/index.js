import React, { Component } from 'react';
import {Footer, Title} from '../';
import {flowRight} from 'lodash';

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

const Feature = props => (
  <div className='my-feature' {...props}>
    My Feature Content
  </div>
);

export default (props) => (
  <div className='ngva-fp-composition-wrapper'>
    {flowRight([Container, View, Feature])(props)}
  </div>
);
