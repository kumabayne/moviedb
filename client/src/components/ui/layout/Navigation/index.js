import HamburgerMenu from '../HamburgerMenu';
import Logo from '../../../../logo.svg';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="Navigation">
      <img src={Logo} height="48" width="48" alt="Logo" />
      <HamburgerMenu />
    </nav>
  );
}
