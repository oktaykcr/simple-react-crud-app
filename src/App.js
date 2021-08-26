import './App.css';

import Users from './components/users/Users';
import Header from './components/header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <div class="container mx-auto px-4">
        <Header />
        <Users />
      </div>
    </>
  );
}

export default App;
