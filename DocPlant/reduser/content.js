const defaultState = {
  img: '',
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'ADD_IMAGE':
      return ({
        ...state,
        img:payload
      })
      
    default:
      return state
  }
}