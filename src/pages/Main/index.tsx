import { Container } from './styles'
import { useState } from 'react';
import logo from "../../assets/images/logo.png"
import "animate.css"
import CursorMask from '../../components/CursorMask';
import Load from '../../components/Load';
import Header from '../../components/Header';
import Home from './Home';
import Solutions from './Solutions';
import InfiniteText from '../../components/InfiniteText';

export default function Main() {

  return (
    <Container>
      <Load />
      <CursorMask />
      
      <Header />
      <Home />
      <Solutions />
      <InfiniteText />
    </Container>
  )
}
