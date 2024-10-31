import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/identity/login/Login';
import './init_i18n';

function App() {
  return (
    <Routes>
      <Route path={"/*"} element={<Login />} /> {/* <Autentificare /> */}
    </Routes>
  );
}

export default App;
