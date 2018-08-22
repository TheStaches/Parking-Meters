import React from "react";
import MapContainer from "./MapContainer";
import MeterCard from "./MeterCard"
import Input from "./Input"
import jsonData from "../server/data.json"
import InfoCard from "./InfoCard"
import scrollToComponent from "react-scroll-to-component";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meters: jsonData,
      input: "",
      selected: "",
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
  updateSelected(name) {
    this.setState({
      selected: name
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          {/* Map */}
          <div className="map col-10">
            <MapContainer meters={this.state.meters} selected={this.state.selected} updateSelected={this.updateSelected} scroll={this.scroll}/>
            
            {/* Input */}
            {/* <Input value={this.state.input} updateInput={this.updateInput} /> */}

          </div>
          <div className="col-2 card col__card">
            <div className="card-header shadow col__header">Meters</div>


            {/* Column Meters */}
            { this.state.meters.map((meter, index, metersObj) => {
              if (index > 0) {
                if (metersObj[index].sub_area !== metersObj[index - 1].sub_area) {
                  let nameKey = (meter.sub_area + "/" + meter.pole);
                  return (this.state.selected === (meter.sub_area + "/" + meter.pole)) ?
                    <InfoCard
                      subArea={meter.sub_area}
                      area={meter.area}
                      configName={meter.config_name}
                      key={(meter.sub_area + "/" + meter.pole)}
                      name={(meter.sub_area + "/" + meter.pole)}
                      index={index}
                      updateSelected={this.updateSelected} />
                  :                 
                    <MeterCard 
                      subArea={meter.sub_area}
                      area={meter.area}
                      configName={meter.config_name}
                      key={(meter.sub_area + "/" + meter.pole)}
                      name={(meter.sub_area + "/" + meter.pole)}
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