import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import {getUser} from './utils/storageUtil'
import memoryUtil from './utils/memoryUtil'

memoryUtil.user = getUser()

ReactDOM.render(<App/>, document.getElementById('root'))