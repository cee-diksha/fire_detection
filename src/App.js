import {RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { MainContextProvider } from './context/MainContext';
import"./app.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MainContextProvider>
          <RouterProvider router = {routes} />
          <ToastContainer newestOnTop />
    </MainContextProvider>
  );
}

export default App;
