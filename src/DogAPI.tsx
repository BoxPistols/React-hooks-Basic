import * as React from 'react'
import axios from 'axios'

export default function DogApi() {
  const onClickUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data[0].name)
    })
  }
  const onClickUsers1 = () => {
    alert('a')
  }
  return (
    <div>
      <h1>Dogs</h1>
      <button onClick={onClickUsers}>onClickUsers</button>
      <button onClick={onClickUsers1}>onClickUsers1</button>
    </div>
  )
}
