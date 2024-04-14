import './App.scss';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ListPost from './ListPost';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ListPost />} />
    </Route>
  )
);

export default App;

