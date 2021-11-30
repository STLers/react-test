import store from 'store'

export function saveUser(user) {
    // localStorage.setItem('user', JSON.stringify(user))
    store.set('user', user)
}
export function getUser() {
    // return JSON.parse(localStorage.getItem('user')) || {}
    return store.get('user') || {}
}
export function removeUser() {
    // localStorage.removeItem('user')
    store.remove('user')
}