import * as React from 'react'
import styled from '@emotion/styled'

const Lists = styled.ul`
  padding: 0;
  margin: 0;
`

const List = styled.li`
  color: turquoise;
  list-style: none;
  padding: 0;
  margin: 0 0 12px 0;
  &::before {
    content: '・';
  }
`
export const TsBase = () => {
  // TypeScript
  const num: number = 100
  const arr: number[] = [0, 1, 2]
  const tuple: [number, string] = [0, 'hoge']
  // Void
  function voidFunc(): void {
    const test = 'test'
    console.log(test)
  }
  // const null1: null = null
  // const undefined1: undefined = undefined
  const object1: { id: number; name: string } = {
    id: 1,
    name: 'Bob'
  }

  // Calc test
  const calcTotal = (num: number) => {
    const total = num * 1.1
    console.log(total)
  }
  const calcPush = () => calcTotal(1108)

  // Calc test２
  const totalFee = (num: number): number => {
    let total: number = num * 1.1
    // total = totalFee(2000)
    return total
  }
  const feePush = (): void => {
    console.log(totalFee(1000))
  }
  // View
  return (
    <div>
      <h2>TsBase</h2>
      <button onClick={calcPush}>Push</button>
      <button onClick={feePush}>feePush</button>
      <Lists>
        <List>{num}</List>
        <List>{arr.join(' ')}</List>
        <List>{tuple.join(' ')}</List>
        <List>void: {voidFunc}</List>
        {/* <List>{null1}</List>
        <List>{undefined1}</List> */}
        <List>{object1.name}</List>
      </Lists>
    </div>
  )
}
