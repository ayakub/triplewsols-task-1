
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Componants/Shared/Header';
import { router } from './Router/Routes/Router';

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
