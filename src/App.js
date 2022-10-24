
import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './layout/Main';

function App() {
  const route = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children: [
        {
          path:'/',
          element:<Home/>,
          loader: () => fetch('http://localhost:5000/place')
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
