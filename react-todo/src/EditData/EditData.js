import React from 'react';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const EditData = ({ toggleEdit }) => {

    return (
            <EditTwoToneIcon style={{ marginLeft: "450px" }} onClick={() => toggleEdit(true)} ></EditTwoToneIcon>
    );
}

export default EditData;