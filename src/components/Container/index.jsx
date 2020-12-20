import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Styled } from './styles';
function Container(props) {
  return (
      <>
        <Header/>
        <Styled.ContainerDefault>
          <props.component props={props} />
        </Styled.ContainerDefault>
        <Footer/>
      </>
  );
}

export default Container;