import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

export const Plants = ({plants}) => {

    console.log('plants length:::', plants.length)
    if (plants.length === 0) return null

    const justOpened = new Date()
    waterStatusOn = () => {
        if(props.wateringStatus != 'On'){
            const [time, setTime] = useState(Date.now());
            useEffect(() => {
                const interval = setInterval(() => setTime(Date.now()), 30000);
                return() => {
                    this.props.dispatch({type: 'On'});
                    justOpened = new Date();
                    clearInterval(interval);
                };
            }, []);
        }
    }

    if (6 > justOpened.getHours()){
        alert("Your plant watered more than 6 hours ago.")
    }
    
    waterStatusOff = () => {
        this.props.dispatch({type: 'Off'});
    }

    const PlantRow = (plant,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{plant.plantName}</td>
                  <td>{plant.wateringStatus}</td>
                  <td>
                    <button type="button" onClick={(e) => waterStatusOn } className="btn btn-warning">Start</button> &nspn;
                    <button type="button" onClick={(e) => waterStatusOff } className="btn btn-warning">Stop</button>
                  </td>
              </tr>
          )
    }

    const plantTable = plants.map((plant,index) => PlantRow(plant,index))

    return(
        <div className="container">
            <h2>Plants</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Plant Id</th>
                    <th>Plant Name</th>
                    <th>Watering Status</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {plantTable}
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps(state){
    return{
        wateringStatus: state.wateringStatus
    };
}
export default connect(mapStateToProps)(Plants);