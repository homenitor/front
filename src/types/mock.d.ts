/**
 *
 */
type Mock<T> = { [K in keyof T]: jest.Mock<any> } & T
