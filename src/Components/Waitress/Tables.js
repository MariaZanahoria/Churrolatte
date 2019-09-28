import React,{Component} from 'react';
import '../Waitress/Tables.css'

class Tables extends Component{
render(){
    return(
        <div>
            <h1>Mesas</h1>
            <div className='styleTables'>
                  <div className='textTables'>10</div>
                  <div className='textTables'>11</div>
                  <div className='textTables'>12</div>
                  <div className='textTables'>20</div>
                  <div className='textTables'>21</div>
                  <div className='textTables'>22</div>
            </div>
        </div>
    )
}
}
export default Tables;