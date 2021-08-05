import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="header">
        <header className="header-main">
          {<Header />}
        </header>
        <main className="main">
          <aside className="main-aside__nav">
            {<Navigation />}
          </aside>
          <section className="main-page__article">
            {<Page />}
          </section>
        </main>
        <footer className="footer-main">
          {<Footer />}
        </footer>
      </div>
    </Router>
  );
}

export default App;
