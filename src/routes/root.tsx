import { Outlet } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Root() {
  return (
    <div>
      <header className="appHeader">
        <Link to="/">
          <img src={logo} alt="Go Agane" className="logo" />
        </Link>
        <p className="headerRoll">Not sure what to play? <Link to="/roll"><button className="small">Random Roll</button></Link></p>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
