import React,{Component} from 'react';
import { render } from 'react-dom';
import './style.css';

class Memegenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            // randomImg:"https://api.imgflip.com/get_memes"
            randomImg:'https://i.imgflip.com/5f5p3g.gif',
            allMemeImgs:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response =>  response.json())
            .then(response =>
                {
                    const {memes} = response.data
                    this.setState({allMemeImgs:memes})
                })
    }
    handleChange(event){
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    handleSubmit(event){
        event.preventDefault();
        const  randNum = Math.floor(Math.random()*this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({randomImg:randMemeImg})
    }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>New Image</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="meme image"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
    
}

export default Memegenerator;