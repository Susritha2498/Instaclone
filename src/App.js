import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage/landing_page.js';
import PostView from './PostView/post_view.js';
import AddPost from './Components/AddPost';
 
function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Routes>
        <Route path='*' element={<PostView/>}/>
        <Route path='/landpage' element={<LandingPage/>}/>
        <Route path='/add/post' element = {<AddPost/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
