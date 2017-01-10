import React from 'react';
import {Footer, Title} from '../';

const View = ({children, title = 'no title'}) => (
  <div className='ngva-view'>
    <Title title={title}/>
    {children}
    <Footer/>
  </div>
);

export default View;
