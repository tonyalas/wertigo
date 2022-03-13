module.exports = {
    transform: {
        '\\.(js|ts|jsx|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy'
    },
    testEnvironment: "jsdom"
}