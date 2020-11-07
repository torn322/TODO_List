import firebase from '../firebase'


export function login(login, pass) {
    return async dispatch => {

        const db = firebase.firestore()
    
        let userId = null
    
        await db.collection('user').where('name', '==', login).get().then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              if (documentSnapshot.data().pass == pass) {
                userId = documentSnapshot.id
              }
            });
          });

          
          if (userId) {
            localStorage.setItem('user', userId)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: userId
            })
        } else {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: 'Login or password is incorrect'
            })
        }
    }
}

export function signUp(userName, pass) {
    return async dispatch => {
        const db = firebase.firestore()

        await db.collection('user').where('name', '==', userName).get().then(querySnapshot => {
            if (function () {
                let doc = null
                querySnapshot.forEach(documentSnapshot => {
                    doc = documentSnapshot
                })
                return doc
            }()) {
                dispatch({
                    type: 'SIGNUP_ERROR',
                    payload: 'Name ' + userName + ' already exist'
                })
            } else {
                db.collection('user').doc().set({
                    name: userName,
                    pass: pass
                }).then(() => {
                    dispatch(login(userName, pass))
                })
            }

          });

    }
}

export function logout() {
    localStorage.setItem('user', null)
    return ({
        type: 'LOGOUT',
        payload: null
    })
}