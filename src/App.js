import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Condata } from './components/countries';
import Ftable from './components/ftable'
import Calsmodule from './components/caluculations'

var headings= ['Time spent on','Optimistically (years)',"Health Adjusted (years)"]






class App  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data :[],
      nle:null,
      hle:null,
      ry:null,
      rhy:null,
      textdis:false
    };

    this.updatedata=this.updatedata.bind(this);
  }

  getyears(start=1970,end=2019){
    var ary =[];
    for(var i=start;i<=end;i++){
      ary.push(i)
    }
    return ary
  }

  updatedata(data){
    this.setState({
      data: data[0],
      nle:data[1].toFixed(2),
      ry:data[2].toFixed(2),
      hle:data[3].toFixed(2),
      rhy:data[4].toFixed(2),
      textdis:true
    });
  }


  render() {
    if(this.state.textdis){
      var report = <div>
        <p > Your Life expectancy is <strong>{this.state.nle}</strong> years, you only have <strong>{this.state.ry}</strong> years more</p>
        <p > Normalizing on your countries health conditions your life expectancy is <strong>{this.state.hle}</strong> years,now  you only have <strong>{this.state.rhy}</strong> years more</p>
        <h6> Here is how you gonna waste your remaining years</h6>
      </div>

      var foot = <p><a href='https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy'>Click here</a> for source on your life expectancy</p>
    }
    else{
      var report = <h3>Please input the above details</h3>
      var foot = <p></p>
    }
    return (
      <div className={'col-12 row h-100 p-0 m-0'}>

        <Jumbotron className={ 'col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0'} bsPrefix={'left'}>
            <UserForm years={this.getyears()} genders={['Male','Female','Others']} calfunc={Calsmodule} update={this.updatedata}/>
        </Jumbotron>

        <Jumbotron className={ 'col-lg-6 col-md-6 col-sm-12 col-xs-12 m-0 text-center'} bsPrefix={'right'}>
          {report}
          <Ftable heading = { headings } data={this.state.data}/>
          {foot}
        </Jumbotron>
      </div>
    );
  }

}


export default App;
