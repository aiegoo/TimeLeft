import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Condata } from './countries';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 21,
      life_expectancy: 62,
      gender:1,
      byear: 'select',
      countryind:0,
      genderstr:'select',
      constr:'select',
      data : Condata,

    };
  }
  changeyear(year){
    this.setState({
      byear:year
    });
  }
  cahngecountry(con){
    this.setState({
      constr:this.state.data[con][0],
      countryind:con
    });
  }
  changegender(gen){
    this.setState({
      gender:gen[0],
      genderstr:gen.slice(2,)
    });
  }
  getcalsandupdate(){
    var data = this.props.calfunc(this.state.byear,this.state.countryind,this.state.gender)
    this.props.update(data)
  }
  render() {
    return (
      <Form>
          <Form.Group controlId="formBasicEmail" className={'row'}>
            <DropdownButton id="year" title="Year Of Birth" className={'col-4'} onSelect={(evt)=>this.changeyear(evt)}>
              {this.props.years && this.props.years.map((year,index) => (<Dropdown.Item  eventKey={year} key={index}>{year}</Dropdown.Item>
              ))}
            </DropdownButton>
            <h2 className={'col-4'}> -   {this.state.byear}</h2>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className={'row'}>
            <DropdownButton id="country" title="country" className={'col-4'} onSelect={(evt)=>this.cahngecountry(evt)}>
              {this.state.data && this.state.data.map((country,index) => (<Dropdown.Item  eventKey={index} key={index}>{country[0]}</Dropdown.Item>
              ))}
            </DropdownButton>
            <h2 className={'col-6'}> -   {this.state.constr}</h2>
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className={'row'}>
            <DropdownButton id="gender" title="Gender" className={'col-4 '} onSelect={(evt)=>this.changegender(evt)}>
              {this.props.genders && this.props.genders.map((gender,index) => (<Dropdown.Item  eventKey={[index,gender]}  key={index}>{gender}</Dropdown.Item>
              ))}
            </DropdownButton>
            <h2 className={'col-6'}>-   {this.state.genderstr}</h2>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I am willing to have existensial crisis" />
          </Form.Group>
          <Col className={'col-12 text-center'}>
          <Button variant="primary"  onClick={()=>this.getcalsandupdate()}>
            Calculate
          </Button>
          </Col>
      </Form>
    );
  }

}

export default UserForm;
