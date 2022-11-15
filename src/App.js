import logo from './logo.svg';
import './App.css';
import Home from './components/layout/home/Home';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
