const initialState = {};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case "FETCH_LIST_COMMENTS":
      return action.payload;
    case "MORE_COMMENTS":
      return {
        ...state,
        current_page: action.payload.current_page,
        data: [...state.data, ...action.payload.data],
        links: [state.links[0],...[...state.links.filter(link=>link.label!==action.payload.current_page && typeof link.label === 'number'), ...action.payload.links.filter(link=>link.active)].sort((a, b) => a.label > b.label ? 1 : -1),state.links[state.links.length-1],]
      };
    default:
      return state;
  }
}