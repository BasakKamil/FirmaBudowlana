export const signIn = (credentionals) =>{
 return(dispatch,getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
        credentionals.email,
        credentionals.password,
    ).then(()=>{
        dispatch({type:'LOGIN_SUCCESS'})
    }).catch((err)=>{
        dispatch({type: 'LOGIN_ERROR', err})
    });
 }
}

export const signOut = () =>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response)=>{
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                address: newUser.address,
                city: newUser.city,
                postcode: newUser.postcode,
                phone: newUser.phone

            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}