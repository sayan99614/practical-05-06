export function showCard(data) {
  return {
    type: "SHOWCARD",
    payload: data,
  };
}
export function hideCard(data) {
  return {
    type: "HIDECARD",
    payload: data,
  };
}

export function setUser(user) {
  return {
    type: "SETUSER",
    payload: user,
  };
}

export function removeUser() {
  return {
    type: "REMOVEUSER",
  };
}

export function setList(data) {
  return {
    type: "SETLIST",
    payload: data,
  };
}
export function deleteUser(id) {
  return {
    type: "DELETEUSERLIST",
    payload: id,
  };
}

export function fetchUserRequest() {
  return {
    type: "FETCH_USERS_REQUEST",
  };
}

export function fetchUserSuccess(data) {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: data,
  };
}

export function fetchUserError(err) {
  return {
    type: "FETCH_USER_ERROR",
  };
}