import ajax from './ajax'

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')
export const reqAddUser = user => ajax('/manger/user/add', user, 'POST')