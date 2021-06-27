import * as React from 'react'
import { useState } from 'react'
import './styles.scss'
import Button from 'react-bootstrap/Button'
import { CssModules } from './CssModules'
import DogApi from './DogAPI'
import { TsBase } from './TsBase'

export default function App() {
  const [count, setCount] = useState(100)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>
        <h4>{count}</h4>
      </p>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Button
      </Button>
      <CssModules />
      <DogApi />
      <TsBase />
    </div>
  )
}
