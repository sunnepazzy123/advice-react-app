import React from "react";
import axios from "axios";

import "./App.css";


class App extends React.Component{
    state = {advice: "Welcome to WireDevTeam App"};

    componentDidMount(){
        this.fetchAdvice();
        // axios.get("https://api.adviceslip.com/advice");
        // console.log("component did mount");
    }

    fetchAdvice = ()=>{
        axios.get("https://api.adviceslip.com/advice")
             .then((response)=>{
                const {advice} = response.data.slip;
                this.setState({advice: advice})

                // console.log(advice)
             })
             .catch((error)=>{
                 console.log(error)
             })

    }

    render(){
        const {advice} = this.state;

        return(
         <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
        )
            
        
    }




}



export default App;
