import React from "react";
import { mount } from "enzyme";
import App from "../../App";

describe("Home component", () => {
  test("matches the snapshot", () => {
    const warper = mount(<App />);
    expect(warper.find("h2").text()).toEqual("Hello world, from Titan-Devs");
    expect(true).toBe(true);
  });
});