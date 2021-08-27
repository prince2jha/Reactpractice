import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      character:[],
    }
  }
  componentDidMount(){
    this.setState({isLoading:true});
    fetch("https://swapi.dev/api/people/2")
      .then(response =>response.json())
      .then(data =>{
        this.setState({
          isLoading:false,
          character: data,
        });
      });
  }
  render(){
    const text = this.state.isLoading?"Loading...":this.state.character.name+"\n"+this.state.character.eye_color;
      return(
        <div>
          <h2>{text}</h2>
        </div>
      );
    }
}
export default App;