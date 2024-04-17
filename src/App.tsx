import './App.scss';
import { Routes, Route } from 'react-router-dom';

import ListPost from './ListPost';
import PostDetail from './PostDetail';
import Header from './Header';
import Contact from './Contact';

const App:React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  )
};

export default App;
