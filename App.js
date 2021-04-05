import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component } from 'react'
import styled from "styled-components";
import ReactDOM from "react-dom";


const DivBox = styled.div`
  border: 1px solid LIGHTSEAGREEN;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 2px;
`;
const Img = styled.img`
  height: 60px;
  flex-grow: 1;
`;
const Cabinet = styled.div`
  display: flex;
  flexDirection: row;
  justify-content: center;
  width: 80%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.restocker = setInterval(() => {
      this.callAPI()
    },9500);
  }

callAPI() {
    fetch("http://localhost:9000/inventory")
        .then(res => res.json())
        .then(res => this.setState({ products: res }));
}


componentWillMount() {
    this.callAPI();
}

decrementQuantity(ii) {
  fetch("http://localhost:9000/inventory/decrimentQuantity?id=".concat(ii))
  .then(quant => quant.json())
  .then(q => {
    this.state.products[ii].quantity = q.quantity_of_id
    this.setState({ 'quantity': q.quantity_of_id, 'empty': q.machine_empty })
    return q.quantity_of_id
  })
  .then(qoi => { if (qoi === 0) this.callAPI() } )
  .catch((r) => console.log("ERROR", r))
}

 draw_button (item){
  //this.callAPI()
  var b

  var myData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item));
    if (item.quantity > 0) {
      b =  
      <a href={`data:${myData}`}  download="data.json" >
              <button onClick={() => {this.decrementQuantity(item.id)}}>
              Click to Buy Soda
              Remaining Quantity: {item.quantity}
              </button>
        </a>

    }
    else { 
    b = <h3>"Soda is Empty"</h3> 
    }
    return b
  }

render() {
  
const prods = this.state.products
  return (

    <Cabinet id='cabinet'>
    <div className="App">
      <header className="App-header">
      <Container>
        {prods &&
       prods.map( p => {
          return <DivBox ><Img src= {p.productImageUrl}/>{p.name}
          {this.draw_button(p)}
          </DivBox>
      
          
        })}</Container>
        
      </header>
    </div>
    </Cabinet>
    
  );
}
}

export default App;