import firebase from '../firebase'

export function show(userId) {
    return async dispatch => {
        const db = firebase.firestore()
        let lists = []

        await db.collection('todoLists').where('userId', '==', userId).get().then(querySnapshot => {
            querySnapshot.forEach(async documentSnapshot => {

                lists.push(documentSnapshot.data())
                lists[lists.length - 1].id = documentSnapshot.id

                let isDone = true
                await db.collection('todo').where('listId', '==', lists[lists.length - 1].id).get().then((querySnapshot) => {
                    querySnapshot.forEach(doc => {

                        if (doc.data().isDone) {
                            console.log('suka')
                            isDone = false
                        }
                    })
                    lists[lists.length - 1].isDone= isDone
                })
                
                

            })

            // lists.forEach(item => {
            //     let isDone = true

            //     db.collection('todo').where('listId', '==', item.id).get().then((querySnapshot) => {
            //         querySnapshot.forEach(doc => {

            //             if (doc.data().isDone) {
            //                 console.log('suka')
            //                 isDone = false
            //             }
            //         })
            //         item.isDone = isDone
            //     })

            // })

            lists.sort((a, b) => {
                const A = a.name.toLowerCase()
                const B = b.name.toLowerCase()

                if (A < B) {
                    return -1
                } else if (A > B) {
                    return 1
                } else return 0

            })
            console.error(lists)
        })
                dispatch({
                    type: 'SHOW',
                    payload: lists
                })




    }
}

export function deleteList(listId) {
    return async dispatch => {
        const db = firebase.firestore()

        if (window.confirm('Are you sure you want to delete list?')) {
            await db.collection('todoLists').doc(listId).get().then(doc => {
                doc.ref.delete().then(() => {
                    dispatch(show(localStorage.getItem('user')))

                })
            })
        }
    }
}

export function addList(name) {
    return async dispatch => {
        const db = firebase.firestore()

        await db.collection('todoLists').doc().set({
            isDone: false,
            userId: localStorage.getItem('user'),
            name,
        }).then(() => {
            dispatch(show(localStorage.getItem('user')))
            alert('New list added.')
        })
    }
}

export function sort(sortMethod) {

    console.log(sortMethod)
    return dispatch => {
        dispatch({
            type: 'SORT',
            payload: sortMethod
        })

        dispatch(show(localStorage.getItem('user')))
    }
}