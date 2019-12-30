const initState ={}

const authReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'LOGIN_ERROR': 
            console.log('Nie udało się zalogować :(!');
            return {...state,authError: 'Login failed'}
        case 'LOGIN_SUCCESS':
            console.log('Udało się zalogować :)!');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Udało się Wylogować :)!');
            return{
                state
            }
        case 'SIGNOUP_SUCCESS':
            console.log('Udało się Zarejstrować :D!');
            return{
               ...state, authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Nie udało się zarejstrować :( !');
            return{
                ...state, authError: action.err.message
            }
        default:
            return state;
        }
}
export default authReducer