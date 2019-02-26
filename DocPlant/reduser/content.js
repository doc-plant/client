const defaultState = {
  data: {},
  form_list:"",
  notFound: false
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'ADD_IMAGE':
      return ({
        ...state,
        data:payload,
        notFound: false
      })
      case 'NOT_FOUND':
      console.log(payload)
        return ({
          ...state,
          data: payload,
          notFound: true
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