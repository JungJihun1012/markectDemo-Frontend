export default (state =  {}, action: any) => {
    switch(action.type) {
        case "signIn_user" :
            return {...state, loginSuccess: action.payload};
        case "signUp_user" :
            return {...state, register: action.payload};
        case "auth_user" :
            return {...state, userData: action.payload};
    }
}