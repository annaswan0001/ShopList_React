import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";


class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems : ["dress","skirt","hat"], 
    
      message : " " 
    }
  }

  addItem = (e) => {
    e.preventDefault();
    const {buyItems} = this.state;
    const newItem = this.newItem.value; 
    const hasValue = this.state.buyItems.includes(newItem)
    
    if(hasValue ){
      this.setState({
        message : "This item has already on the list " 
      })
    }else{
      newItem !== "" && this.setState({
        buyItems : [...this.state.buyItems, newItem],
        message : "" 
      })
    }
    this.newForm.reset();
  }
  

  removeItem = (Item) => {
    const {buyItems} = this.state;
    const newBuyItems = buyItems.filter(Buyitem=>{
      return Buyitem !== Item;
    })
    this.setState({
     buyItems : [...newBuyItems]
    })
    if (newBuyItems.length === 0){
      this.setState({
        message : "You delete all the items",
        buyItems : []
        
       })

     }
   }

   removeAll = () => 
   this.setState({
    message : "You delete all the items",
    buyItems : []
    
   })



  render() {
    const {buyItems, message} = this.state;
    

    return (
      

      <div className="shopping_list">
         <header>
            <img src= {this.props.src}/>
            <h1>{this.props.title}</h1>
            <form className="form-inline" onSubmit={this.addItem} ref={input=>this.newForm = input} >
              <div className ="form-group">
                <label htmlFor="addItem" className="sr-only">Add New Item</label>
                <input type="text" name="newItemInput" className ="form-control" ref={input=>this.newItem = input}/>
              </div>
              <button className="btn btn-primary">Add</button>
         </form>
         </header>
         
        
         
        {message !== "" &&  <p className="text-danger">{message} </p> }

        {buyItems.length !== 0 &&   <div className="content"> 
              <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyItems.map((Item,i)=> {
                     return (<tr key={Item}>
                          <th>{i+1}</th>
                          <th>{Item}</th>
                          <th><Button onClick = {e => this.removeItem(Item)}>Delete</Button></th>
                      </tr>)
                    })}
                </tbody>
                <tfoot>
                  <td colSpan="2">&nbsp;</td>
                  <td>
                    <Button className="btn btn-primary" onClick={(e)=>this.removeAll()}>Remove all</Button>
                  </td>
                </tfoot>
              </table>
            </div>
            }  
            
         
         
  </div>
   );
  }
}

export default Shoplist;


