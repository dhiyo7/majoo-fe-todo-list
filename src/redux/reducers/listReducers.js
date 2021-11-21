const initState = {
  listAll: [],
  listDetail : {}
};

export const listReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case "LIST_ALL":
      return { ...state, listAll: payload };

    case "ADD_NEW":
      return { ...state, listAll: payload };

      case "DETAIL" : 
      return {...state, listDetail : payload}

    default:
      return state;
  }
};
