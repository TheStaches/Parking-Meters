import React from "react";
import MapContainer from "./MapContainer";
import jsonData from "../server/data.json"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meters: jsonData
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Map */}
          <div className="map col-10">
            <MapContainer meters={this.state.meters} />
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter Your Destination" />
                <div className="input-group-app pend">
                  <button className="btn btn-danger"><i className="fas fa-search" /></button>
                </div>
            </div>
          </div>

            {/* Meter Column */}
            <div className="col-2 card">
              <div className="card-header shadow bg-white rounded col__header">Closest Meters</div>

              {/* Individual Meters */}
              <div className="card meter__card shadow bg-white rounded">
                <div className="card-header meter__header">
                  <p>2900 AVENIDA DE PORTUGAL</p>
                </div>
                <div className="card-body">
                  <p>Cost and Current Distance to Destination</p>
                </div>
                <div className="card-footer">
                  <p>Not Sure What Should Go Here</p>
                </div>
              </div>
              <div className="card meter__card shadow bg-white rounded">
                <div className="card-header meter__header">900 B ST</div>
                <div className="card-body">Cost and Current Distance to Destination</div>
                <div className="card-footer">Not Sure What Should Go Here</div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;