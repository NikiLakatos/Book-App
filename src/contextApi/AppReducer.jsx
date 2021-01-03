// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    default:
      return state;
  }
};
