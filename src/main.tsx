import { observer } from 'mobx-react-lite'
import React from 'react'
import ReactDOM from 'react-dom'
import Form1 from './RegisterForms_1'
import Form2 from './RegisterForms_2'

const App = observer(() => {
  return (
    <>
      <Form1 />
      <Form2 />
    </>
  )
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
