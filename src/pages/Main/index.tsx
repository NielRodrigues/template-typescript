import "animate.css"
import { Container } from './styles'
import CursorMask from '../../components/CursorMask';
import Load from '../../components/Load';
import Header from '../../components/Header';
import Home from './Home';
import Solutions from './Solutions';
import InfiniteText from '../../components/InfiniteText';
import Section2 from './Section2';
import Section3 from './Section3';
import Timeline from './Timeline';
import InfiniteText2 from '../../components/InfiniteText2';
import Footer from '../../components/Footer';
import SolutionsMobile from "./SolutionsMobile";

export default function Main() {

  return (
    <Container>
      <Load />
      <CursorMask />
      
      <Header />
      <Home />
      <Solutions />
      <SolutionsMobile />
      
      <InfiniteText />
      <Section2 />
      <Section3 />
      <Timeline />
      <InfiniteText2 />
      <Footer />
    </Container>
  )
}
