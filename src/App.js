import {RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { MainContextProvider } from './context/MainContext';

function App() {
  return (
    <MainContextProvider>
          <RouterProvider router = {routes} />
    </MainContextProvider>
  );
}

export default App;
