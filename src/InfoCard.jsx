import React from "react";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="col-2 card info__card">
        <div className="card-header shadow info__header">
        <p>{this.props.subArea}</p>
        <p>{this.props.area}</p>
        </div>

        {/* Body */}
        <div className="card-body info__body shadow">
          <h2>Tile 1</h2>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
          <p>Hello</p>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
          <p>Hello</p>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
          <p>Hello</p>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
        </div>
        <div className="card-body info__body">
          <h2>Tile 2</h2>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
          <p>Hello</p>
          <p>{this.props.subArea}</p>
          <p>{this.props.configName}</p>
        </div>
      </div>
    )
  }
}

export default InfoCard;