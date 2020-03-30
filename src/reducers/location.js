export default function location(state = "Portland, OR", action) {
  if (action.type === "CHANGE_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
