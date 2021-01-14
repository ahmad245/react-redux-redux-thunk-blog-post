import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchPostUsers} from '../actions'
import User from './User';

const PostList=(props)=>{
   useEffect(() => {
        props.fetchPostUsers();
       
   }, []);

   const posts=props.posts.map((post)=>{
       return (
       <div className="item" key={post.id}>
           <i className="large middle aligend icon user"></i>
           <div className="content">
               <div className="description">
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
               </div>
           </div>
           <User userId={post.userId} />
        
       </div>
       )
   })
    return (
        <div className="ui relaxed divided list">
          {posts}
        </div>
    )
}

const mapStateToProp=state=>{
   
    return {posts:state.postList}
}

export default connect(mapStateToProp,{fetchPostUsers})(PostList)