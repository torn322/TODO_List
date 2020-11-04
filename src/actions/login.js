import firebase from '../firebase'


export function login(login, pass) {
    return async dispatch => {
        // dispatch({
        //     type: 'LOGIN_REQUEST',
        //     payload: null
        // })

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
                payload: null
            })
        }
    }
}