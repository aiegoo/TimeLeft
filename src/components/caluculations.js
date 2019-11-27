import React from 'react';
import { Condata } from './countries';
function getYear() {
    return new Date().getFullYear();
}

function getwyears(ryears,rhyears,le,hle){
  var finaldata=[];
  var data =[
    ["sleeping",8],
    ["Eating",1.2],
    ["Commute",0.7],
    ["Social Media",2],
    ["Daily Chores",1],
    ["Work (40 Hours per week till 60y)",5.7]
  ];
  for (var i=0;i<data.length;i++){
    finaldata.push([data[i][0],((data[i][1]/24)*ryears).toFixed(2),((data[i][1]/24)*rhyears).toFixed(2),''])
  }
  var tn =0;
  var th =0;
  for (var k=0;k<finaldata.length;k++){
    tn = parseFloat(tn) + parseFloat(finaldata[k][1]);
    th = parseFloat(th) + parseFloat(finaldata[k][2])
  }
  finaldata.push(["Total years you're gonna waste from now",tn.toFixed(2),th.toFixed(2),'table-active'])
  finaldata.push(['Remaing effective years you got',(ryears-tn).toFixed(2),(rhyears-th).toFixed(2),'table-secondary'])
  return finaldata
}


function calfunc(year,index,gender){
  var le = Condata[index][parseInt(gender)+1];
  var hle = Condata[index][4];

  var cyear = getYear()
  var ayear = cyear - year

  var ryears = le - ayear
  var rhyears = hle - ayear

  // console.log('rmin',rmins,'rhour',rhours,'rdays',rdays,'ryear',ryear);
  return [getwyears(ryears,rhyears,le,hle),le,ryears,hle,rhyears]
}

export default calfunc;
