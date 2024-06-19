import logo from './logo.svg';
import './App.css';
import Header from './container/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './container/Products';
import Client from './container/Client';
import Service from './container/Service';
import Slideshow from './container/Slideshow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './container/Footer';



function App() {
  return (
    <div className="App">
     <Header />
    <Products />
     <Client />
     <Service />
     <Slideshow />
     <Footer />
    </div>
  );
}

export default App;
