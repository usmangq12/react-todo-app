import React from 'react';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const EditData = ({ toggleEdit }) => (
        <EditTwoToneIcon style={{ marginLeft: 450 }} onClick={() => toggleEdit(true)} ></EditTwoToneIcon>
);

export default EditData;