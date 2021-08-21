import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Main.scss';
import { Container } from '../../Components/Container/styled';
import Create from '../Create/Create';
import ReadAll from '../ReadAll/ReadAll';
import DeleteAll from '../DeleteAll/DeleteAll';
import About from '../About/About';


export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Container>
            <Switch>
              <Route path="/" exact={true} component={ReadAll}></Route>
              <Route path="/Create" component={Create}></Route>
              <Route path="/DeleteAll" component={DeleteAll}></Route>
              <Route path="/About" component={About}></Route>
            </Switch>
          </Container>
      </BrowserRouter>
    </>
  )
}