import { combineReducers } from "redux";
import { SET_USER } from '../constants/action-types';

const initialState = {
  user: {
    name: null,
    id: 0
  }
};

function userReducer(state = initialState, action) {
  switch(action.type){
    case SET_USER:
       
        
        return {
          ...state,
          user: {
            name: "bill",
          }
        }
    
   
     
      default:
        return state
  }
  
};

// function userReducer(state = initialState, action) {
//   switch(action.type){
//     case SET_USER:
//       return {
        
//         ...state,
//         {
//           id: action.id,
//           name: action.name
//         }
//       }
//       default:
//         return state
//   }
// };



const rootReducer = combineReducers({
  userReducer
})

export default rootReducer;