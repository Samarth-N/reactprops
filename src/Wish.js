import React from "react";
import './Wish.css'
class Wish extends React.Component{
    render(){
        return(
            <div>
            <h1>Hi how are you {this.props.name}</h1>
            </div>
        );
    }
}

export default Wish;