import {createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Root from '../Root';
import Reddits from '../features/reddit/Reddits'
import '../App.css';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Reddits />}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
