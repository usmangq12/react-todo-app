import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import uuid from 'react-uuid';
import './CreateData.css';

const CreateData = ({ createTodo }) => {

    const [name, setName] = useState("");

    const onChange = (value) => {
        setName(value);
    }

    const setUserValue = () => {
        createTodo({
            id: uuid(),
            name: name,
            completed: false
          });
        setName('');
    }

    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="row outer">
                    <div className="inner col s6 m6">
                        <TextField
                            label="Your Name here"
                            id="outlined-start-adornment"
                            value={name}
                            onChange={(e) => onChange(e.target.value)}
                            style={{ marginRight: 20 }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                            variant="outlined"
                        />

                    </div>
                    <div className="inner col s6 m6">
                        <Button
                            variant="contained"
                            onClick={(e) => name ? setUserValue() : null}
                            className="right-align"
                            style={{ marginTop: 8, marginRight: 120 }} >
                            <AddCircleOutlineIcon></AddCircleOutlineIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateData;