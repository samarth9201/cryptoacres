import jwt_decode from "jwt-decode";

export const initialClient = {
  logInStatus: isUserLoggedIn(),
  type: getClientType(), //type: User / Broker
};

export function isUserLoggedIn() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

export function getCurrentUserEmailId() {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwt_decode(token);
    return user.email;
  } else {
    return false;
  }
}

export function getClientType() {
  const type = localStorage.getItem("type");
  if (type) {
    return type;
  } else {
    return "";
  }
}
