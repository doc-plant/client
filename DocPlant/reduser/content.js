const defaultState = {
  data: {},
  form_list:"",
  notFound: false,
  youtubes: []
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'ADD_IMAGE':
      return ({
        ...state,
        data:payload,
        youtubes: payload.youtube.slice(0, 5),
        notFound: false
      })
      case 'NOT_FOUND':
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