import React from 'react';
import './App.css';
import CreateData from './CreateData/CreateData';
import ReadData from './ReadData/ReadData';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import { createData, deleteUser, editUser } from './Actions/CRUDActions';

const App = ({ todosData, createData, editUser, deleteUser }) => {

  return (
    <div className="mt-2">
      <AppBar position="static" style={{ background: "#B3B3B3" }}>
        <Toolbar>
          <Typography variant="h6">
            Todo App
            </Typography>
        </Toolbar>
      </AppBar>
      {/* CRUD Create starts here */}
      <CreateData createTodo={(obj) => createData(obj)}></CreateData>
      {/* CRUD Create ends here */}

      {/* CRUD Read starts here */}
      {<ReadData todosData={todosData} editItem={(objectChangings) => editUser(objectChangings)}
        deleteSelectedUser={(selectedUserObj) => deleteUser(selectedUserObj)}></ReadData>}
      {/* CRUD Read ends here */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todosData: state.todos.todosData
  };
};

export default connect(
  mapStateToProps,
  { createData, deleteUser, editUser }
)(App);