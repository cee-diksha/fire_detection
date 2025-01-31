import { BrowserRouter as RouterProvider } from 'react-router-dom';
import { MainContextProvider } from './context/MainContext';
import"./app.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';


function App() {
  return (
    <MainContextProvider>
          <RouterProvider>
            <ToastContainer newestOnTop />
              <Router/>
          </RouterProvider>
    </MainContextProvider>
  );
}

export default App;
