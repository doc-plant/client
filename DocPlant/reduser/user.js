const defaultState = {
  uid: '',
  isLogin: false, 
  access_token: ''
}

export default function (state = defaultState, actions) {
  const { type, payload} = actions
  switch (type) {
    case 'IS_LOGIN':
      return ({
        ...state,
        uid: payload.uid,
        isLogin: payload.status,
        access_token: payload.access_token
      })
      
    default:
      return state
  }
}