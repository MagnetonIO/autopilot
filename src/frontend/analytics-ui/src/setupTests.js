// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
/* eslint-disable */
import "@testing-library/jest-dom";
window.URL.createObjectURL = () => {};
jest.mock("libs/findMyLocation", () => {
    return {
        __esModule: true,
        methodName: jest.fn(() => Promise.reject("error")),
    };
});
/* eslint-enable */
