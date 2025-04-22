import React from "react";
import "./demo.scss"
class ChirldComponent extends React.Component {


    handleShow = () => {
        this.setState({ show: !this.state.show, }
        )

    }
    handleDelete=(id)=>{
        this.props.deleteName(id);
        alert( "xóa thành công người dùng với ID",id);


    }


    state = {
        show: false,

    }

    render() {

        let { list } = this.props;
        return (

            <>
                {!this.state.show && <button className="btn-show"onClick={() => this.handleShow()}>
                    Show
                </button>}
                {this.state.show && <div>
                    {list.map((items) => {

                        return (
                            <div key={items.id}>
                                {items.last}- {items.first}
                                <span onClick={()=>this.handleDelete(items.id)}>
                                    X
                                </span>
                            </div>
                        )
                    })

                    }

                    <button onClick={() => this.handleShow()}>
                        hide
                    </button>
                </div>}


            </>

        )


    }
}


export default ChirldComponent;







