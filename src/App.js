import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import GuestLayout from "./components/Layouts/GuestLayout"

const App = () => {
  return (
    <Router>

      <GuestLayout />

  </Router>

  );
}

export default App;
