import React from 'react'

export const DisplayBoard = ({numberOfPlants, getAllPlants}) => {

    return(
        <div style={{backgroundColor:'green'}} className="display-board">
            <h4 style={{color: 'white'}}>Plants Created</h4>
            <div className="number">
            {numberOfPlants}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllPlants()} className="btn btn-warning">Get all Plants</button>
            </div>
        </div>
    )
}