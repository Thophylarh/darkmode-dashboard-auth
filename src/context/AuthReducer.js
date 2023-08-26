const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          currentuser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  