import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/ui/Card';
import Container from './components/ui/layout/Container';
import Grid from './components/ui/layout/Grid';
import Header from './components/ui/layout/Header';
import Feature from './components/ui/Feature';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((response) => {
        setMovies(response.results);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Grid>
            {!movies
              ? 'Loading...'
              : movies.map((movie, i) =>
                  i === 0 ? (
                    <Feature key={movie.id} data={movie} />
                  ) : (
                    <Card key={movie.id} data={movie} />
                  )
                )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
