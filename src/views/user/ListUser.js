import React from "react";
import axios from "axios";

import { NavLink } from 'react-router-dom';


class ListUser extends React.Component {


    state = {
        listUser: [],
    }
  async componentDidMount() {
        try {
          let res = await axios.get("https://reqres.in/api/users?page=2", {
  headers: {
        "x-api-key": "reqres-free-v1"
  }
});

            this.setState({
                listUser: res.data.data
            });
        } catch (err) {
          
          
            console.error("Lỗi:", err);
        }

let res1 = await axios.get("https://jsonplaceholder.typicode.com/users");
console.log("reeeeee",res1)
console.log("ỉnaaaa>>>>>>>>>>>>")


    }


    render() {

        return (
            <>
                <p>
                    fecht all list user
                    {this.state.listUser.map((items, index) =>
                    (
                        <div>
                            <span>{index + 1}-{items.id} -{items.last_name}</span>
                                <botton>
                                    <NavLink to={`/user/${items.id}`}>Detail</NavLink>
                                </botton><br></br>

                        </div>
                    ))

                    }
                </p>
            </>

        )
    }

} export default ListUser;