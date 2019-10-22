import { Navbar, NavbarBrand } from 'reactstrap';
import { Route, HashRouter } from 'react-router-dom';

import LifepowrLogo from './components/LifepowrLogo';

import './Home.css';
import './theme.css';
class Layout extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='wrapper'>
          <Navbar className='header' color='dark' dark expand='sm'>
            <LifepowrLogo
              id='navbarLifepowrLogo'
              href='#'
              width={30}
              height={30}
            />
            <NavbarBrand href='#'>Lifepowr</NavbarBrand>
          </Navbar>
          <div className='content'>
            <Route exact path='/' render={() => <Home />} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default Layout;
