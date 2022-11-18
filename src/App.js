import { RouterProvider } from 'react-router-dom';
import './App.less';
import FullLayout from './layouts/FullLayout';
import MainLayout from './layouts/MainLayout';
import router from "./router/router"

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
