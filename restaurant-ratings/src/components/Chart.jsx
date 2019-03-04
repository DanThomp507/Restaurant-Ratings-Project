import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = (props) => {

  return (
  <BarGraph
  className="chart"
  data={props.data}
    />
  )
}
export default BarGraph;
