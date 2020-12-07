import * as actionTypes from '../constants/actionTypes';

export default (posts = [],action)=>{

    switch (action.type) {

        case  actionTypes.UPDATE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);
        case actionTypes.LIKE:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);

        case actionTypes.FETCH_ALL:
            return action.payload;

        case actionTypes.CREATE:
            return [...posts,action.payload];
        
        case actionTypes.DELETE:
            return posts.filter((post)=> post._id !== action.payload);
          
    
        default:
          return posts;
    }
    
}