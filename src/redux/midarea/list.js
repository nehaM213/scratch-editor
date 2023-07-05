import { ADD_LIST, SET_LIST, SET_ACTIVE_BLOCK, DELETE_BLOCK } from "./types";

const initialState = {
  midAreaLists: [
    {
      id: "block-0",
      comps: ["MOVE"],
    },
  ],
  active: "block-0",
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      let index = state.midAreaLists.findIndex((x) => x.id === action.id);
      let all_lists = state.midAreaLists;
      let [item] = all_lists.splice(index, 1);
      item.comps = action.list;
      all_lists.splice(index, 0, item);

      return {
        midAreaLists: all_lists,
      };

    case SET_ACTIVE_BLOCK:
      // console.log("actibe-",initialState.active);
      return {
        ...state,
        active: action.id,
      };
    case DELETE_BLOCK:
      let old_lis = state.midAreaLists;
      let new_list_ad = old_lis.filter((el)=>{
        if(el.id==action.id){
          return false;
        }
        return true;
      })
      return {
        midAreaLists: new_list_ad,
      };

    case ADD_LIST:
      let old_list = state.midAreaLists;
      let new_list_add = {
        id: `block-${state.midAreaLists.length}`,
        comps: ["MOVE"],
      };
      old_list.push(new_list_add);
      return {
        midAreaLists: old_list,
      };

    default:
      return state;
  }
};
