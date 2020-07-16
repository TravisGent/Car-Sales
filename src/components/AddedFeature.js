import React from 'react';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.addFeature(props.feature.id)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export const removeFeature = newFeature => {
  return { type: "REMOVE_FEATURE", payload: newFeature };
}

const mapStateToProps = state => { 
  return { 
    name: state.car.features.name
  };
}

export default connect(
  mapStateToProps, 
  { }
)(AddedFeature);
