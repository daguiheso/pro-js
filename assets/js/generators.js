function* simpleGenerator() {
  console.info('GENERATOR START')
  yield 1
  yield 2
  yield 3
  console.info('GENERATOR END')
}

const gen = simpleGenerator()