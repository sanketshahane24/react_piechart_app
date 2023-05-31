import React from "react";
import axios from "axios";

export default class Server extends React.Component{
    state={
        message:''
    }

    componentDidMount(){
        axios.get("http://localhost:9090/welcome").then(res=>{
            console.log(res)
            const mes = res.data;
            this.setState({message : mes});
        })
    }

    render(){
        return(
            <h1>{this.state.message}</h1>
        )
    }



}