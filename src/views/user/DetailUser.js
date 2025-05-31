import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        detail: {}

    }
    async componentDidMount() {
        let id = this.props.match.params.id
      let res = await axios.get(`https://reqres.in/api/users/${id}`, {
  headers: {
    "x-api-key": "reqres-free-v1"
  }
});

        this.setState({
            detail: res.data && res.data.data && res ? res.data.data : {}


        })
    }

    render() {

        console.log(">>>>>>>>>check", this.state.detai)
        let { detail } = this.state
        let checkEdit = Object.keys(detail).length === 0;

        return (
            <div>
                <> Hello from Detail User</><br />
                {!checkEdit && <>
                  <span>Id s: </span>  <>--{detail.id}</><br/>
                   <span>First Name : </span> <>{detail.first_name} </><br/>
                   <span>Email :</span> <> {detail.email}</>

                    <div>
                        <img src={detail.avatar} />


                    </div>
                </>


                }


            </div>
        )

    }

} export default withRouter(DetailUser);
