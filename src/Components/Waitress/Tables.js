import React,{Component} from 'react';

class Tables extends Component{
render(){
    return(
        <div>
            <h1>Mesas</h1>
            <div className='styleTables'>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-10'/>
                  <div className='textTables'>10</div>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-11'/> 
                  <div className='textTables'>11</div>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-12'/> 
                  <div className='textTables'>12</div>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-20'/> 
                  <div className='textTables'>20</div>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-21'/> 
                  <div className='textTables'>21</div>
                <img src='https://i.ibb.co/64qRvrP/Vista-mesa.jpg' alt='mesa-22'/> 
                  <div className='textTables'>22</div>
            </div>
        </div>
    )
}
}
export default Tables;