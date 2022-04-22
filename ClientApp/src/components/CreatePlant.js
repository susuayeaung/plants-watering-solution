import React from 'react'


const CreatePlant = ({onChangeForm, createPlant }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Plant</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Plant Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="plantname" id="plantname" aria-describedby="emailHelp" placeholder="Plant Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Watering Status</label>
                            <select value="" onChange={(e) => onChangeForm(e)} className="form-control" name="waterStatus" id="waterStatus">
                                <option disabled selected>-- Select --</option>
                                <option value="water">Watered</option>
                                <option value="notWater">Not Water</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createPlant()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePlant