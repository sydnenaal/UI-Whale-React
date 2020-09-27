import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Input from "./index";

describe("Input component", () => {
  it("should render Input with default props", () => {
    const { container } = render(<Input />);

    expect(container.querySelector(".whale-ui-input")).toHaveClass(
      "whale-ui-input"
    );
  });

  it("should render Input with label props", () => {
    const { getByText } = render(<Input label="test label" />);

    expect(getByText("test label")).toHaveTextContent("test label");
  });

  it("should render Input with type props", () => {
    const { container } = render(<Input type="number" />);

    expect(container.querySelector(".whale-ui-input")).toHaveClass(
      "whale-ui-input"
    );
  });

  it("should render Input with disabled props", () => {
    const { container } = render(<Input disabled={true} />);

    expect(container.querySelector(".whale-ui-input")).toHaveAttribute(
      "disabled"
    );
  });

  it("should render Input with disabled props", () => {
    const mockCallBack = jest.fn();

    render(<Input autofocus={true} onFocus={mockCallBack} />);

    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  describe("should call Input events", () => {
    it("should call onBlur event", () => {
      const mockCallBack = jest.fn();

      const { container } = render(<Input onBlur={mockCallBack} />);

      fireEvent.blur(container.querySelector(".whale-ui-input"));

      expect(mockCallBack.mock.calls.length).toBe(1);
    });

    it("should call onFocus event", () => {
      const mockCallBack = jest.fn();

      const { container } = render(<Input onFocus={mockCallBack} />);

      fireEvent.focus(container.querySelector(".whale-ui-input"));

      expect(mockCallBack.mock.calls.length).toBe(1);
    });

    it("should call onFocus event in label", () => {
      const mockCallBack = jest.fn();

      const { container } = render(
        <Input label="label" onFocus={mockCallBack} />
      );

      fireEvent.blur(container.querySelector("input"));

      expect(mockCallBack.mock.calls.length).toBe(1);
    });

    it("should call onBlur event in label", () => {
      const mockCallBack = jest.fn();

      const { container } = render(
        <Input label="label" onBlur={mockCallBack} />
      );

      fireEvent.focus(container.querySelector("input"));

      expect(mockCallBack.mock.calls.length).toBe(1);
      expect(container.querySelector(".focus")).toHaveClass("focus");
    });

    it("should call handleBlur without onFocus", () => {
      const mockCallBack = jest.fn();

      const { container } = render(<Input label="label" />);

      fireEvent.blur(container.querySelector("input"));

      expect(mockCallBack.mock.calls.length).toBe(0);
    });

    it("should call handleFocus without onBlur", () => {
      const mockCallBack = jest.fn();

      const { container } = render(<Input label="label" />);

      fireEvent.focus(container.querySelector("input"));

      expect(mockCallBack.mock.calls.length).toBe(0);
    });
  });
});
