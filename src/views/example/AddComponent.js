import React from "react";


class AddComponent extends React.Component {

    state = {
        first: "",
        last: "",
        
    }


    handleFirst = (e) => {
        this.setState(
            { first: e.target.value, }
        )
    }


    handleLast = (e) => {
        this.setState(
            { last: e.target.value, }
        )
    }
    handleOnClick = (e)=>{
        if(!this.state.first ||!this.state.last){
     alert("không được để trống");
            return ;
        }
        let { last, first }= this.state;
       this.props.addNewName( {
        id:Math.random(),
        first: this.state.first,
        last: this.state.last});
        alert( " tên người dùng là " + last+" "+first);
this.setState({
    first:"",
    last:"",


})

       }



    render() {

        return (
            <>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.first}
                        onChange={(event) => this.handleFirst(event)}
                    />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.last}
                        onChange={(event) => this.handleLast(event)} /><br />
                    <input type="button" value={"submit"} id="submit" onClick={(event) => this.handleOnClick(event)} />

                </form>
            </>


        )


    }



}
export default AddComponent;