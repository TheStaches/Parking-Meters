import React from "react";

class MeterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: "",
      price: "",
      hours: "",
      payment: false,
    }
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount() {
    this.parseConfig(this.props.configName)
  }

  // Parses config_name and puts values into state.
  parseConfig(configName) {
    let duration = "";
    let price = "";
    let hours = "";
    let payment = false;

    let index = "";
    let index2 = ""

    // Grabs Duration
    index = configName.indexOf("$");
    duration = configName.substring(0, index).replace("MSPM", "");

    // Grabs Price
    index2 = configName.indexOf("am");
    price = configName.substring(index, index2).slice(0, -2);

    // Grabs Hours
    index = configName.indexOf("R");
    index2 = configName.indexOf("t");
    hours = configName.substring(index, index2).slice(2)
    hours += "t";

    payment = configName.includes("(Mobile Pay");

    this.setState({
      duration: duration,
      price: price,
      hours: hours,
      payment: payment
    })
  }

  setSelected() {
    this.props.updateSelected(this.props.name)
  }

  render() {
    return (
        <div className="card meter__card shadow" onClick={this.setSelected}>
          
          {/* Header */}
          <div className="card-header meter__header">
            <p>{this.props.subArea}</p>
            <p>{this.props.area}</p>
          </div>

          {/* Body */}
          <div className="card-body">
            <p>{this.state.duration}</p>
            <p>{this.state.hours}</p>
          </div>

          {/* Footer */}
          <div className="card-footer">
            <p>MeterCard</p>
          </div>
        </div>
    )
  }
}

export default MeterCard;