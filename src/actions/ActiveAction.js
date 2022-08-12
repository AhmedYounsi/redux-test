export const ActiveAction = (payload,dispatch)  => {
    dispatch({
      type: "SETDATATRUE",
      payload,
    });
 
  };
export const DesactiveAction = (payload,dispatch)  => {
    dispatch({
        type: "SETDATAFALSE",
        payload,
      });
  };