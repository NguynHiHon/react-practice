import React from 'react';
import ChirldComponent from './ChirldComponent';
import AddComponent from "./AddComponent";



class MyComponent extends React.Component {

    state = {
        first: "",
        last: "",
        listJob: [
            { id: "job1", first: "hoan1", last: "hai", },
            { id: "job2", first: "hoan2", last: "hai", },
            { id: "job3", first: "hoan3", last: "hai", },

        ]
    }


    deleteName = (i) => {
        let listfilter = this.state.listJob.filter(item => 

           item.id !== i
        );
        this.setState({

            listJob: listfilter,
        });

    }


    addNewName = (newName) => {
        console.log('name là ', newName);

        this.setState({
            listJob: [...this.state.listJob, newName],

        })

        console.log('name là ' + this.state.listJob)

    }
    // jsx chỉ return về 1 khối mà thôi , hãy nhớ rằng render nó cũng như 1 hàm dùng để render nên chúng ta có thể tạo những biến variarble  
    render() {




        // let name = ' HOÀN ';
        return (
            <>
                <AddComponent addNewName={this.addNewName} />

                <div>the first name  is {this.state.first}  </div>

                <ChirldComponent
                    list={this.state.listJob}
 
                    deleteName={this.deleteName}
                /><br />




            </>

        )


    }

}
export default MyComponent; 