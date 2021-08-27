import React,{Component} from 'react';
import MemeGenerator from './Memegenerator';
import Navbar from './Navbar';
// import './App.css';

function App(){
  return(
    <div>
      <Navbar/>
      <MemeGenerator/>
    </div>
  );
}
export default App;