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

  render() {
    return (
        <div className="card meter__card shadow rounded">
          
          {/* Header */}
          <div className="card-header meter__header">
            <div><p>{this.props.subArea}</p></div>
          </div>

          {/* Body */}
          <div className="card-body">
            <p>{this.state.duration}</p>
            <p>{this.state.hours}</p>
          </div>

          {/* Footer */}
          <div className="card-footer">
            <p>{this.state.price}</p>
          </div>
        </div>
    )
  }
}

export default MeterCard;