import './css/App.css';
import { Route } from 'react-router-dom';
import Navigation from './componets/Navigation';
import Home from './componets/Home';
import MyProfile from './componets/MyProfile';
import MySkills from './componets/MySkills';
import MyProjects from './componets/MyProjects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';


function App() {
  return (
      <>
        <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={MyProfile} />
            <Route path="/skills" component={MySkills} />
            <Route path="/project" component={MyProjects} />
            <Route path="/contact" component={Contact} />
        <Footer />
      </> 
  );
}

        

export default App;
