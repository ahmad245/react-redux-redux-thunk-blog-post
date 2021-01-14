import React from 'react';
import { connect } from 'react-redux';


const User=(props)=>{
    if(!props.user) return <div></div>;
    return (
    <div className="header">{props.user.name}</div>
    )
}
const mapStaeToProps=(state,ownProps)=>{
    return {user:state.users.find((user)=>user.id == ownProps.userId )}
}
export default connect(mapStaeToProps)(User);