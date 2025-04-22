import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

  state = {
    title: "",
  }
  handleInputTitle = (e) => {
    this.setState({

      title: e.target.value,
    })

  }
  handleAdd = () => {
    if (this.state.title == "") {
      toast.error(" vui lòng nhập đầy đủ thông tin ! ");
      return;
    }

    let infor = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    }

    this.props.AddTodo(infor);
    this.setState({
      title: "",
    })

  }



  render() {


    return (

      <>
        <div className="add-todo">
          <input value={this.state.title} onChange={(event) => this.handleInputTitle(event)} type="text" />
          <button type="button" onClick={() => this.handleAdd()} className="add"> ADD </button>

        </div>
        <div>
          tên title được nhập là {this.state.title}
        </div>
      </>


    )
  }




} export default AddTodo