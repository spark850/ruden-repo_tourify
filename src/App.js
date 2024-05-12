import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './utils/ScrollToTop';
import AnimatedRoutes from './utils/AnimatedRoutes';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from './context/ModalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <ModalProvider>
      <ToastContainer/>
      <AnimatedRoutes/>
      </ModalProvider>
    </Router>
  );
}

export default App;
