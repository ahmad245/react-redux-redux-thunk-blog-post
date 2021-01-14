import axios from '../apis/posts';
import _ from 'lodash';

export const  fetchPostUsers=()=> async (dispatch,getState)=>{
   await dispatch(fetchPost());
  const userIds=_.uniq(_.map(getState().postList,'userId'));
  userIds.forEach((userId)=> dispatch(fetchUser(userId)));

}

export const fetchPost=()=>async dispatch=>{
    const posts=await axios.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:posts.data})
}

export const fetchUser=(id)=>async dispatch=>{
      const user= await axios.get('/users/'+id);
     dispatch({type:'FETCH_USER',payload:user.data})
}

// const _fetchUser=_.memoize(async(id,dispatch)=>{
//     const user= await axios.get('/users/'+id);
//     dispatch({type:'FETCH_USER',payload:user.data})
// })