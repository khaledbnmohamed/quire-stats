import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import GuestLayout from "./components/Layouts/GuestLayout"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div class="main-container">
        <Header />
        <GuestLayout />
        <Footer />
      </div>
  </Router>

  );
}

export default App;
