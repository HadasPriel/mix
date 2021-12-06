const initialState = {

  selectedWap: {},
}

export function wapReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_WAP':
      return { ...state, selectedWap: action.wap }
    default:
      return state
  }
}
