import React from 'react';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';

const DeleteUser = ({item, deleteSelectedUser}) => {

    const deleteData = (item) => {
        deleteSelectedUser(item);
    }

    return (
            <DeleteSweepTwoToneIcon style={{ marginLeft: 10 }} onClick={() => deleteData(item)}></DeleteSweepTwoToneIcon>
    );
}

export default DeleteUser;