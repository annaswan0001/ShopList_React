import React from 'react';
import shop from './shop.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class Shoplist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems : ["dress","skirt","hat"],
      newItemInput : "",
      message:"",
      
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }


 addItem =(e) =>{
    e.preventDefault()
    const {buyItems} =this.state
    const newItem = this.state.newItemInput;
    // const isOntheList = isOntheList.includes(newItem);
    
    // if(isOntheList){
    //   this.setState({
    //     message : "This is item is already on the list"
    //   })
    // }
    // else{newItem !== "" && this.setState({
    //   buyItems : [...buyItems, newItem]
    //   })
    // }
    newItem !== "" && this.setState({
      buyItems : [...buyItems, newItem]
      })
    this.addForm.reset();
  }
  


  render() {
    const {title} = this.props;
    const {buyItems} = this.state;
    return (
      <div className="shopping_list">
         <header>
            <img src={shop} alt=""/>
            <h1>{title}</h1>
            <form className="form-inline" onSubmit={(e)=>this.addItem(e)} ref={input => this.addForm =input} >
              <div className ="form-group">
                <label htmlFor="addItem" className="sr-only">Add New Item</label>
                <input type="text" name="newItemInput" className ="form-control" value={this.state.addItem} onChange={this.handleUserInput}/>
              </div>
              <button className="btn btn-primary">Add</button>
         </form>
         {this.state.message}
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


