import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import Button from "../../src/components/button";
import { useRipple } from "../../src/components/button/hooks/useRipple";

const getButton = (props) => render(<Button {...props} />);
const DEFAULT_POSITION = { top: "9px", left: "36px" };

describe("Button component", () => {
  describe("should render button with different props", () => {
    it("should render button with default props", () => {
      const { container } = getButton();

      expect(container.querySelector(".erokhin-ui-button")).toBeDefined();
    });

    it("should render button with label", () => {
      const { getByText } = getButton({ label: "click me!" });

      expect(getByText("click me!")).toBeDefined();
    });

    it("should render button with children", () => {
      const { getByText } = getButton({ children: "click me!" });

      expect(getByText("click me!")).toBeDefined();
    });

    it("should render button with className", () => {
      const { container } = getButton({ className: "small-button" });

      expect(container.querySelector(".small-button")).toBeDefined();
    });

    it("should render button with isRippleVisible", () => {
      const { container } = getButton({ isRippleVisible: true });

      expect(container.querySelector("span")).toBeDefined();
    });
  });

  describe("button handlers", () => {
    it("should press button with onClick", () => {
      const mockCallBack = jest.fn();

      const { container } = getButton({ onClick: mockCallBack });

      fireEvent.click(container.querySelector(".erokhin-ui-button"));

      expect(mockCallBack.mock.calls.length).toBe(1);
    });

    it("should press button without onClick", () => {
      const mockCallBack = jest.fn();

      const { container } = getButton();

      fireEvent.click(container.querySelector(".erokhin-ui-button"));

      expect(mockCallBack.mock.calls.length).toBe(0);
    });

    it("should call handleClickWithRipple", async () => {
      const { container } = getButton();
      const span = container.querySelector("span");

      fireEvent.click(container.querySelector(".erokhin-ui-button"));

      expect(span).toBeDefined();

      await waitForElementToBeRemoved(span);

      expect(container.querySelector("span")).toBe(null);
    });
  });

  describe("button hooks", () => {
    it("useRipple hook", () => {
      const { result } = renderHook(() => useRipple(600));

      act(() => {
        result.current.setPosition(DEFAULT_POSITION);
      });

      expect(result.current.position).toStrictEqual(DEFAULT_POSITION);
    });
  });
});
