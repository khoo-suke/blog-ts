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
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
