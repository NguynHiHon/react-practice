import React from "react";
import "../example/demo.scss"
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listToDo: [
            { id: "todo 1", title: "title 1" },
            { id: "todo 2", title: "title 2" },
            { id: "todo 3", title: "title 3" },
            { id: "todo 4", title: "title 4" },

        ],
        editTodo: { id: "", title: "" }
    }

    deleteTodo = (id) => {
        let newList = this.state.listToDo.filter(item => item.id !== id);

        try {
            this.setState({
                listToDo: newList,
            })
        } catch (error) {

        }
        toast.info("bạn đã xóa thành công người dùng có ID là :" + id)



    }

    AddTodo = (job) => {

        this.setState({
            listToDo: [...this.state.listToDo, job],

        })
        toast.success(`Bạn đã thêm thành công người dùng có ID: ${job.id}`);

    }

    editTodo = (item) => {
        let { editTodo } = this.state;
        let checkEdit = Object.keys(editTodo).length === 0;


        if (!checkEdit && item.id === editTodo.id) {
            console.log(" đã chạy vào ")
           if(!editTodo.title){
               toast.error("bạn không thể lưu giá trị rỗng !");
               return;
           }

            let l1 = this.state.listToDo.map(todo => {
                if (todo.id === item.id) {
                    return editTodo; 
                }
                return todo; // giữ nguyên
            });
              
            this.setState({
                listToDo: l1,
                editTodo: {},
            })


            console.log(" đã chạy vào thành công ")
            console.log(l1);
            console.log(checkEdit);

  
        }

else{
        this.setState({

            editTodo: item,
        });
    }

    }


    handleInputEdit = (e) => {
        let title = e.target.value;
        let currentEdit = { ...this.state.editTodo };
        currentEdit.title = title;
        this.setState(
            {
                editTodo: currentEdit,
            }
        );

        console.log(this.state.editTodo)
    }



    render() {
        let { listToDo, editTodo } = this.state;
        let checkEdit = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo AddTodo={this.AddTodo} />
                <div className="list-todo-content">
                    {listToDo.map((items, index) => {
                        return (

                            <div className="list-element-todo">
                                {(!checkEdit && editTodo.id === items.id) ?
                                    <>{index + 1}-
                                        <input type="text" value={editTodo.title} onChange={(event) => this.handleInputEdit(event)} />
                                    </> : <>
                                        <span>{index + 1}-{items.id} -{items.title}</span>
                                    </>
                                }

                                <button className="edit" onClick={() => this.editTodo(items)}>
                                    {!checkEdit && editTodo.id === items.id ? "Save" : "Edit"}
                                </button>
                                <button className="delete" onClick={() => this.deleteTodo(items.id)}> Delete </button>

                            </div>

                        )




                    })

                    }

                </div>

            </div>
        )

    }



} export default ListTodo