import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import DoneOutlineTwoToneIcon from '@material-ui/icons/DoneOutlineTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import DeleteUser from '../DeleteUser/DeleteUser';
import EditData from '../EditData/EditData';

const ReadData = ({ todosData, editItem, deleteSelectedUser }) => {

    const [currentItemEdited, setCurrentItemEdited] = useState({});

    const ontoggle = (item, toggleValue) => {
        editItem(item.completed = toggleValue);
        setCurrentItemEdited({ ...item });
    }

    const onCancelChanges = () => {
        editItem(currentItemEdited)
    }

    return (
        <div>
            {
                todosData.map((item) => {
                    return (
                        <Card className="App-header" style={{ marginLeft: 300, marginTop: 20, width: "50%", background: "#CCCCCC" }}>
                            <div key={item.id}>
                                {item.completed ?
                                    <div>
                                        <TextField
                                            label="Your Name here"
                                            id={item.name}
                                            value={item.name}
                                            onChange={(e) => editItem(item.name = e.target.value)}
                                            style={{ marginRight: 20, marginTop: 20, marginLeft: 10 }}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                                            }}
                                            variant="outlined"
                                        />
                                        <DoneOutlineTwoToneIcon style={{ marginLeft: "250px" }} onClick={() => editItem(item.completed = false)}></DoneOutlineTwoToneIcon>
                                        <CancelTwoToneIcon style={{ marginLeft: 10 }} onClick={() => onCancelChanges()}></CancelTwoToneIcon>
                                    </div> :
                                    <div>
                                        {item.name}
                                        <DeleteUser item={item} deleteSelectedUser={(selectedUser) => deleteSelectedUser(selectedUser)}></DeleteUser>
                                        <EditData toggleEdit={(toggleValue) => ontoggle(item, toggleValue)}></EditData>
                                    </div>
                                }
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default ReadData;