const defaultState = {
  data: {}
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'ADD_IMAGE':
    console.log(payload)
      return ({
        ...state,
        data:payload
      })
      
    default:
      return state
  }
}