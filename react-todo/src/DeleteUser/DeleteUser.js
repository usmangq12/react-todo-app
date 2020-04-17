import React from 'react';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';

const DeleteUser = ({ item, deleteSelectedUser }) => (
    <DeleteSweepTwoToneIcon style={{ marginLeft: 10 }} onClick={() => deleteSelectedUser(item)}></DeleteSweepTwoToneIcon>
);

export default DeleteUser;