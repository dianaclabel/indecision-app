// sum.test.js
import { expect, test } from 'vitest'
import { addArray, sum } from '../../src/helpers/sum'
import { describe } from 'node:test'

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    //Preparación
    const a = 1
    const b = 2

    //Estimulo
    const result = sum(a, b)

    // El comportamiento esperado
    //toBe se usa para numeros y primitivos o valores exactos.
    expect(result).toBe(3)

    // expect(sum(1, 2)).toBe(3)
    // if (sum(1, 2) !== 3) {
    //   throw new Error('La suma no es correcta')
    // }
  })
})

describe('AddArray function', () => {
  test('Should return 0 if the array is empty', () => {
    const numberArray = []
    const result = addArray(numberArray)
    expect(result).toBe(0)
  })

  test('Should return the proper value of the Adarray function', () => {
    const arrNumbers = [1, 2, 3, 4, 5]
    const resultTotal = addArray(arrNumbers)
    expect(resultTotal).toBe(15)
  })
})
