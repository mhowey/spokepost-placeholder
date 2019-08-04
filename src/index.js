import React from 'react';
import ReactDOM from 'react-dom';
import MainWrap from './components/styled/MainWrap';
import Header from './components/Header';
import Content from './components/Content';

import './styles.css';

const App = () => {
  return (
    <>
      <MainWrap>
        <Header />
        <Content />
      </MainWrap>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
