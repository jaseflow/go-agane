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
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
