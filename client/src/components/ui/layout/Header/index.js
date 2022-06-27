import Container from '../Container';
import Navigation from '../Navigation';
import './Header.scss';

export default function Header() {
  return (
    <header className="Header">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
