const defaultState = {
  data: {},
  form_list:""
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'ADD_IMAGE':
      return ({
        ...state,
        data:payload
      })
      case 'ADD_IMAGE_FORM':
      return ({
        ...state,
        form_list:payload
      })
      
    default:
      return state
  }
}