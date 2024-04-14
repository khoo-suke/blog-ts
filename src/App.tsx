import './App.scss';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ListPost from './ListPost';
import PostDitail from './PostDitail';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ListPost />} />
      <Route path="post/:postId" element={<PostDitail/>} />
    </Route>
  )
);

export default App;

