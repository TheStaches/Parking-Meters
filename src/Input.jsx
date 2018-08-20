import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.updateInputState = this.updateInputState.bind(this)
  }

  updateInputState(e) {
    this.props.updateInput(e.target.value)
  }

  render() {
    return(
      <div className="input-group shadow">
              <input type="text" className="form-control" placeholder="Enter Your Destination" value={this.props.value} onChange={this.updateInputState}/>
              <div className="input-group-apppend">
                <button className="btn btn-danger"><i className="fas fa-search" /></button>
              </div>
            </div>
    )
  }
}

export default Input;