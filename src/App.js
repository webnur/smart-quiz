import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';

import router from './utils/routes';

function App() {
  
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
