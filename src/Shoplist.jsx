import React from 'react';
import shop from './shop.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems : ["dress","skirt","hat"],
      newItemInput : ""
    }
  }

 addItem =(e) =>{
  
    e.preventDefault()
    const {buyItems} =this.state
    const newItem = this.state.newItemInput;
    this.setState({
      buyItems : [...buyItems, newItem],

      
    })}
  
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value});
    }

  render() {
    const {title} = this.props;
    const {buyItems} = this.state;
    return (
      <div className="shopping_list">
         <header>
            <img src={shop} alt=""/>
            <h1>{title}</h1>
            <form className="form-inline" onSubmit={(e)=>this.addItem(e)}>
              <div className ="form-group">
                <label htmlFor="addItem" className="sr-only">Add New Item</label>
                <input type="text" name="newItemInput" className ="form-control" value={this.state.addItem} onChange={this.handleUserInput}/>
              </div>
              <button className="btn btn-primary">Add</button>
         </form>
         </header>
         
         <div className="content">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {buyItems.map((Item,i)=>
                      (<tr key={Item}>
                      <th scope="row">1</th>
                      <td>{Item}</td>
                      <td>Button</td>
                    </tr>)
                  )} 
                </tbody>
              </table>
         </div>
         
  </div>
   );
  }
}

export default Shoplist;


