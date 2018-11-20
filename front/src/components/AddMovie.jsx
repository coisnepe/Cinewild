import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postMovieRequest } from '../actions/index';
import { state } from '../helpers/addMovieState';
import { inputGenerator } from '../helpers/addMovieState'

class AddMovie extends Component {
  state = state;

  handleChange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  handleSumbit(e){
    e.preventDefault();
    this.props.postMovieRequest(this.state);
    this.setState(state);
  }
  
  generateInputs = () => {
    return inputGenerator.map((inputTemplate, i) => {
      return <TextField name={inputTemplate.key} key={i} type="text" placeholder={inputTemplate.placeholder} value={this.state[inputTemplate.key]} onChange={this.handleChange.bind(this)}/>
    });
  }
  
  render() { 
    return ( 
      <div style={{display :'flex', flexDirection:'column', justifyContent :'center', alignItems : 'center'}}>
        <p>Ajouter un film</p>
        <form onSubmit={this.handleSumbit.bind(this)} style={{width:'50%', alignItem:'center',display:'flex',flexDirection:'column'}}>
          {this.generateInputs()}
          <Button type='submit'>Ajouter</Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  res: state.postMovieReducer.res,
  error: state.postMovieReducer.error,
})

function mapDispatchToProps(dispatch) {
  return {
    postMovieRequest: bindActionCreators(postMovieRequest, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddMovie);

