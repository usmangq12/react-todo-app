import React from 'react';
import './App.css';
import UserList from './UserList/UserList';
import CreateData from './CreateData/CreateData';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import DoneOutlineTwoToneIcon from '@material-ui/icons/DoneOutlineTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userValue: "",
      getValue: "",
      userList: UserList,
    };
  }

  onAdd(value) {
    if (this.state.userList && this.state.userList.length > 0 && this.state.userList.filter(x => x.name === value).length == 0) {
      this.addUser(value, 1);
    } else {
      this.addUser(value);
    }
  }

  addUser(value, increment = null) {
    let obj;
    let lastId = 1;
    if (increment) {
      lastId = this.state.userList[this.state.userList.length - 1].id + increment;
    }
    obj = {
      id: lastId,
      name: value,
      editValue: false
    };
    this.setState(state => ({
      userList: [...this.state.userList, obj]
    }));
  }

  deleteUser(value) {
    let array = [...this.state.userList];
    let index = array.map(x => x.name).indexOf(value.name);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ userList: array });
    }
  }

  onEdit(editObject) {
    let array = [...this.state.userList];
    array.find(x => x.name === editObject.name).editValue = true;
    this.setState({ userList: array });
  }

  onSelectedValueChange(item, value) {
    let array = [...this.state.userList];
    array.find(x => x.id === item.id).name = value;
    this.setState({ userList: array })
  }

  displayTextField(item) {
    let textField = <TextField
      label="Your Name here"
      id={item.name}
      value={item.name}
      onChange={(e) => this.onSelectedValueChange(item, e.target.value)}
      style={{ marginRight: 20, marginTop: 20, marginLeft: 10 }}
      InputProps={{
        startAdornment: <InputAdornment position="start"></InputAdornment>,
      }}
      variant="outlined"
    />
    return textField;
  }

  toDisplayContentType(item) {
    let displayContent = item.editValue === true ? this.displayTextField(item) : item.name;
    return displayContent;
  }

  toDisplayEditIcon(item) {
    let selectedIcon = item.editValue ?
      <DoneOutlineTwoToneIcon style={{ marginLeft: "250px" }} onClick={() => this.saveEditChangings(item)}></DoneOutlineTwoToneIcon> :
      <EditTwoToneIcon style={{ marginLeft: "450px" }} onClick={() => this.onEdit(item)} ></EditTwoToneIcon>
    return selectedIcon;
  }

  saveEditChangings(item) {
    let array = [...this.state.userList];
    array.find(x => x.id === item.id).editValue = false;
    this.setState({ userList: array });
  }

  toDisplaySelectionIcon(item) {
    let displaySelectionIcon;
    return displaySelectionIcon = item.editValue ?
      <CancelTwoToneIcon style={{ marginLeft: 10 }} onClick={() => this.onCancel(item)}></CancelTwoToneIcon> :
      <DeleteSweepTwoToneIcon style={{ marginLeft: 10 }} onClick={() => this.deleteUser(item)}></DeleteSweepTwoToneIcon>
  }

  onCancel(item) {
    let array = [...this.state.userList];
    array.find(x => x.id === item.id).editValue = false;
    this.setState({userList: array});
  }

  render() {
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
        <CreateData userValue={this.state.userValue} getValue={(value) => this.onAdd(value)}></CreateData>
        {/* CRUD Create ends here */}

        {/* CRUD Read starts here */}
        {
          this.state.userList.map((item, index) => {
            return (
              <Card className="App-header" style={{ marginLeft: 300, marginTop: 20, width: "50%", background: "#CCCCCC" }}>
                <div key={index}>
                  {this.toDisplayContentType(item)}
                  {this.toDisplayEditIcon(item)}
                  {this.toDisplaySelectionIcon(item)}
                </div>
              </Card>
            )
          })
        }
        {/* CRUD Read ends here */}
      </div>
    );
  }

}

export default App;
