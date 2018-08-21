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
      selected: 0,
    }

    this.updateInput = this.updateInput.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  // Puts input box value into state
  updateInput(value) {
    this.setState({
      input: value  
    })
  }
  // Converts selected card to InfoCard
  updateSelected(value) {
    this.setState({
      selected: value
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
          <div className="col-2 card col__card">
            <div className="card-header shadow col__header">Meters</div>


            {/* Column Meters */}
            { this.state.meters.map((meter, index, metersObj) => {
              if (index > 0) {
                if (metersObj[index].sub_area !== metersObj[index - 1].sub_area) {
                  return (index === this.state.selected) ?
                    <InfoCard
                      subArea={meter.sub_area}
                      area={meter.area}
                      configName={meter.config_name}
                      key={(meter.sub_area + "/" + meter.pole)}
                      index={index}
                      updateSelected={this.updateSelected} />
                  :                 
                    <MeterCard 
                      subArea={meter.sub_area}
                      area={meter.area}
                      configName={meter.config_name}
                      key={(meter.sub_area + "/" + meter.pole)}
                      index={index}
                      updateSelected={this.updateSelected} />
                    } 
                  }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;