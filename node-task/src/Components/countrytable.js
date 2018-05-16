import React from 'react';
import axios from 'axios';

 export default class CountryTable extends React.Component{
state={
    data:[]
}
componentDidMount(){
    axios
    .get("http://localhost:3000/api/gabers").then(res=>{
      console.log(res);
      var element;
        this.setState({data:res.data});
        }).catch(err=>{
          console.log(err);
        });
        
        
}

render(){
    return<table border="5"><tr><th>city</th><th>country</th></tr>{this.state.data.map(x=><tr> <td>{x.city}</td> <td>{x.country}</td></tr>)}</table>; 

  }
}