import React, { Component } from 'react';

class Comanda extends Component {
  constructor(props){
    super(props)
  }
hola(){
  console.log('hola');
  
}
  render() {
    return (
      <div>
        <p>Number of table</p>
        <input type="text"></input>
        <div>
          <ul>

            {this.props.selectedItem.map((item, index) => {
              console.log(item.name, item.price);
              return(
                <li>
                {item.name} {item.price}
                <button onClick={()=> this.props.selectedItem(item)}></button>
              </li>
              )  
            }  
            )}
          </ul>
          <p>Total: {this.props.total}</p>
        </div>
       </div>
    );
  }
}

export default Comanda;