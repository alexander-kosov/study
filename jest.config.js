module.exports = {
  preset: 'ts-jest', //для JS 'ts-jest/presets/js-with-ts'
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(less)": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};