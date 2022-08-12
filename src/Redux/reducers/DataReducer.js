 const DataReducer = (state = false, action) => {
    switch (action.type) {
      case 'SETDATATRUE':
        return action.payload;
          case 'SETDATAFALSE':
        return action.payload;
      default:
        return state;
    }
  };
  export default DataReducer;