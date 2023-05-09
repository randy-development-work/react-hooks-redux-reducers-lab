let initialState = { friends: [] };
export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "friends/add":
      return { friends: [...state.friends, action.payload] };

    case "friends/remove":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };

    default:
      return state;
  }
}

// action = {
//   type: "friends/add",
//   payload: {
//     name: "Chrome Boi",
//     homewtown: "NYC",
//     id: 1
//   }
// }

// let remove = {
//   type: "friends/remove",
//   payload: 1,
// };

// let state = manageFriends(initialState, action)

// console.log(initialState);

// console.log(state);

// state = manageFriends(initialState, remove)

// console.log(state);
