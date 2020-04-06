import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './CreateData.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InputAdornment from '@material-ui/core/InputAdornment';

class CreateData extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userValue: this.props.userValue };
    }

    onChange(value) {
        this.setState(state => ({
            userValue: value
        }))
    }

    getUserValue() {
        this.props.getValue(this.state.userValue);
        this.setState({ userValue: "" });
    }

    render() {
        return (
            <div class="row">
                <div class="col s12 m12">
                    <div class="row outer">
                        <div class="inner col s6 m6">
                            <TextField
                                label="Your Name here"
                                id="outlined-start-adornment"
                                value={this.state.userValue}
                                onChange={(e) => this.onChange(e.target.value)}
                                style={{ marginRight: 20 }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                                variant="outlined"
                            />

                        </div>
                        <div class="inner col s6 m6">
                            <Button
                                variant="contained"
                                onClick={(e) => this.state.userValue ? this.getUserValue() : null}
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
}

export default CreateData;