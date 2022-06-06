export const actionTypes = {
  // key value pair
  ADD_USER_REQUEST:"ADD_USER_REQUEST",
  ADD_USER_SUCCESS:"ADD_USER_SUCCESS",
  ADD_USER_FAILUER:"ADD_USER_FAILUER",
};
// do not change names
export const addUserRequest = () => {
  return{
    type:actionTypes.ADD_USER_REQUEST,
  }
};
// do not change names, and arguments
export const addUserSuccess = (data) => {
  const payload={
    name:"saikiran",
    id:1,
    title:"masaiStudent"
  };
  return{
    type:actionTypes.ADD_USER_SUCCESS,
    payload:payload
  }
};
// do not change names
export const addUserFailure = () => {
  return{
    type:actionTypes.ADD_USER_FAILUER
  }

};
