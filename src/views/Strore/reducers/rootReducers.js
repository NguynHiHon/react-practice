const initState={
    users:[{id :1,name:" hoàn đẹp trai ", age:12},

        {id:2,name:"hoàn yêu trúc ", age:21}
    ]


}
const deleteUser =(user)=>{
  const newlist=  initState.users.filter(u=>{
 return  user.id != u.id
 
  }
   
  )
  console.log("check new list>>>>>>>>>>>>>>",newlist);
return newlist;

}

const rootReducers =( state= initState, actions)=>{

switch(actions.type) {
  case "DELETE_USER":
    console.log("run into delete>>>>>>>>>",actions)

return {
        ...state,
        users: deleteUser(actions.payload)
      };    break;
      
  case "ADD_USER":
    // code block  
    break;
  default:
 return state
}
   
}

export default rootReducers;