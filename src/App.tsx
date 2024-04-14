import './App.scss';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ListPost from './ListPost';
import PostDitail from './PostDitail';
import Header from './Header';
import Contact from './Contact';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} >
      <Route path="/" element={<ListPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="post/:postId" element={<PostDitail/>} />
    </Route>
  )
);

export default App;

