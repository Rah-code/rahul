import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experiences-gain/Experience1'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import PortfolioDetails from './components/Portfolio-Project-Details/PortfolioDetails';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter basename="/rahul">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/experience" component={Experience}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path={`/portfolio/:id`} component={PortfolioDetails}></Route>
      </Switch>
    </HashRouter >
  );
}
export default App;
