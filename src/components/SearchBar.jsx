import React from 'react';
import { getData } from '../actions';
import {connect} from 'react-redux';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    //console.log(event.target.value);
      this.setState({
        term: event.target.value
      })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const {getData} = this.props;
    getData(this.state.term);
    this.setState({
      term: ''
    })
    //console.log(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group col-sm-6 mx-auto" style={{margin: "20px 0"}}>
        <input
          placeholder="enter pokemon name, id or click pokemon below"
          className="form-control"
          value = {this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-danger mx-1">Submit</button>
        </span>
      </form>
    )
  }

}


export default connect(null, {getData})(SearchBar);
