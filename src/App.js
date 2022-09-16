import About from './components/About'
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
