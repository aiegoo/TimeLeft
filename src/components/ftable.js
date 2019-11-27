import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Ftable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Table>
          <thead>
            <tr>
            {this.props.heading && this.props.heading.map((obj,ind)=><th key={ind}>{obj}</th>)}

            </tr>
          </thead>
          <tbody>
          {this.props.data && this.props.data.map((obj,ind)=> {return(
            <tr key={ind} className={obj[3]}>
              <td >{obj[0]}</td>
              <td>{obj[1]}</td>
              <td>{obj[2]}</td>
            </tr>
          )})}

          </tbody>
      </Table>
    );
  }

}

export default Ftable;
