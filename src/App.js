import {RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { MainContextProvider } from './context/MainContext';
import"./app.css"

function App() {
  return (
    <MainContextProvider>
          <RouterProvider router = {routes} />
    </MainContextProvider>
  );
}

export default App;
