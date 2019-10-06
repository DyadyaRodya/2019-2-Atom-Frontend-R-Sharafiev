import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
})

test('returns empty string when it was given wrong input', () => {
  expect(correctSentence("")).toBe('')
  expect(correctSentence(1024)).toBe('')
})


test('returns empty string when it was not given input', () => {
  expect(correctSentence()).toBe('')
})