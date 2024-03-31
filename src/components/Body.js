import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import PlayerContainer from './PlayerContainer';
const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    {
      path: "/watch",
      element: <PlayerContainer/>
    }
  ]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
      </div>
  );
};

export default Body;