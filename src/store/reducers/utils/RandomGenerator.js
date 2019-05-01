export default class RandomGenerator {
  random (limit) {
    return Math.floor(Math.random() * limit) + 1
  }
}
