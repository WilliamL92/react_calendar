import { convertTime, convertMinutes, convertArray, findObjectIndex } from "../functions/functions.js"

describe('testing functions used for converting a json array from file', () => {
  it('should convert human time into computer value', () => {
    const humanTime = "11:30"
    const result = convertTime(humanTime)
    expect(result).toBe(11.5)
  })

  it('should convert human minutes into computer value', () => {
    const humanTime = 30
    const result = convertMinutes(humanTime)
    expect(result).toBe(0.5)
  })

  it('should convert a JSON array file into a clean array of objects ready to use', () => {
    const arrayExample = [{ "id": 1, "start": "17:00", "duration": 60 }, { "id": 2, "start": "17:00", "duration": 120 }, { "id": 3, "start": "19:40", "duration": 10 }]
    const result = convertArray(arrayExample)
    expect(result).toContainEqual({
      "id": 1,
      "col": 0,
      "humanStart": "17:00",
      "humanDuration": 60,
      "computerStart": 17,
      "computerDuration": 1,
      "width": 50,
      "x": 0,
      "height": 8,
      "y": 67
    })
  })

  it("should return the index of an object in array by it's id key", () => {
    const arrayObject = [{ id: 1 }, { id: 5 }, { id: 8 }]
    const result = findObjectIndex(arrayObject, 8)
    expect(result).toBe(2)
  })
})