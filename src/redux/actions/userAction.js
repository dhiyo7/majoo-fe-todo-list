import req from "../../engine/axios";

export const fetchInitList = () => {
  return async (dispatch) => {
    try {
      let response = await req.get("to-do-list");
      // console.log("RESPONSE", response.data);
      let data = response.data;

      dispatch({
        type: "LIST_ALL",
        payload: data,
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
};

export const createList = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_NEW", payload: data });
    } catch (error) {
      console.log("ERORR", error);
    }
  };
};

export const listDetail = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "DETAIL",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
