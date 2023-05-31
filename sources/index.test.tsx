import React from "react";
import { test, expect } from "vitest";
import { Case, Switch, Default, DefaultSwitch } from ".";
import { render, screen } from "@testing-library/react";

test("should render the first case only", () => {
  render(
    <Switch>
      <Case when={true}>
        true
      </Case>
      <Case when={true}>
        false
      </Case>
      <Default>
        default
      </Default>
    </Switch>
  );

  const element = screen.getAllByText("true");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});

test("should render the second case only", () => {
  render(
    <Switch>
      <Case when={false}>
        true
      </Case>
      <Case when={true}>
        false
      </Case>
      <Default>
        default
      </Default>
    </Switch>
  );

  const element = screen.getAllByText("false");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});

test("should render the default case only", () => {
  render(
    <Switch>
      <Case when={false}>
        true
      </Case>
      <Case when={false}>
        false
      </Case>
      <Default>
        default
      </Default>
    </Switch>
  );

  const element = screen.getAllByText("default");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});

test("should render the first case only when using a default switch", () => {
  render(
    <Switch>
      <Case when={false}>
        true
      </Case>
      <Case when={false}>
        false
      </Case>
      <DefaultSwitch>
        <Case when={true}>
          yes
        </Case>
        <Case when={true}>
          no
        </Case>
        <Default>
          maybe
        </Default>
      </DefaultSwitch>
    </Switch>
  );

  const element = screen.getAllByText("yes");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});

test("should render the second case only when using a default switch", () => {
  render(
    <Switch>
      <Case when={false}>
        true
      </Case>
      <Case when={false}>
        false
      </Case>
      <DefaultSwitch>
        <Case when={false}>
          yes
        </Case>
        <Case when={true}>
          no
        </Case>
        <Default>
          maybe
        </Default>
      </DefaultSwitch>
    </Switch>
  );

  const element = screen.getAllByText("no");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});

test("should render the default case only when using a default switch", () => {
  render(
    <Switch>
      <Case when={false}>
        true
      </Case>
      <Case when={false}>
        false
      </Case>
      <DefaultSwitch>
        <Case when={false}>
          yes
        </Case>
        <Case when={false}>
          no
        </Case>
        <Default>
          maybe
        </Default>
      </DefaultSwitch>
    </Switch>
  );

  const element = screen.getAllByText("maybe");

  expect(element).toHaveLength(1);
  expect(element[0]).toBeInstanceOf(HTMLElement);
});
