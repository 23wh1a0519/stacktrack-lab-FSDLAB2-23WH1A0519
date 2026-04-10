import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/edit-task/:id" element = {<QuestionPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
