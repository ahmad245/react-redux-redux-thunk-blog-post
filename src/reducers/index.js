import {combineReducers} from 'redux';
import postList from './posts'
import users from './user';

export default combineReducers({
    postList:postList,
    users:users
})