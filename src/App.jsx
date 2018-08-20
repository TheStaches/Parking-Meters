import React from "react";
import MapContainer from "./MapContainer";
import MeterCard from "./MeterCard"
import Input from "./Input"
import jsonData from "../server/data.json"
import InfoCard from "./InfoCard"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meters: jsonData,
      input: "",
      selected: "",
      info: false
    }

    this.updateInput = this.updateInput.bind(this)
  }

  // Puts input box value into state
  updateInput(value) {
    this.setState({
      input: value  
    })
  }

  updateSelected(value) {
    this.setState({
      selected: value
    })
  }

  updateInfo() {
    this.setState({
      info: !info
    }) 
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* Map */}
          <div className="map col-10">
            <MapContainer meters={this.state.meters} />
            
            {/* Input */}
            <Input value={this.state.input} updateInput={this.updateInput} />

          </div>


            {/* Column Meters */}
            {
              (true) ? 
                 <InfoCard
                    subArea={this.state.meters[0].sub_area}
                    area={this.state.meters[0].area}
                    configName={this.state.meters[0].config_name} />
                :                 
                (
                  <div className="col-2 card col__card">
                    <div className="card-header shadow col__header">Meters</div>
                    { this.state.meters.map((meter, index, metersObj) => {
                      if (index > 0) {
                        if (metersObj[index].sub_area !== metersObj[index - 1].sub_area) {
                          return (
                          <MeterCard 
                            subArea={meter.sub_area}
                            configName={meter.config_name}
                            key={(meter.sub_area + "/" + meter.pole)} />
                          )
                        } 
                      }
                    })
                    }
                  </div>
                )
              }
        </div>
      </div>
    )
  }
}

export default App;