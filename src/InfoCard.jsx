import React from "react";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);

    this.setSelected = this.setSelected.bind(this);
  }

  setSelected() {
    this.props.updateSelected(null)
  }

  render() {
    return (
      <div className="card info__card shadow" onClick={this.setSelected}>

        {/* Header */}
        <div className="card-header info__header">
        <p>{this.props.subArea}</p>
        <p>{this.props.area}</p>
        </div>

        {/* Body */}
        <div className="card-body">
          <p>{this.props.configName}</p>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <p>InfoCard</p>
        </div>
      </div>
    )
  }
}

export default InfoCard;