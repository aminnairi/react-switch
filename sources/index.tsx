import React, { Fragment, Children, ReactNode, isValidElement } from "react";

export interface SwitchProps {
  children: ReactNode;
}

export interface CaseProps {
  when: boolean;
  children: ReactNode;
}

export interface DefaultProps {
  children: ReactNode;
}

export const Case = ({ children }: CaseProps) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export const Default = ({ children }: DefaultProps) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}


export const Switch = ({ children }: SwitchProps) => {
  const childrenArray = Children.toArray(children);

  const matchingElementFound = childrenArray.find((child) => {
    return isValidElement(child)
      && typeof child.type === "function"
      && child.type.name === Case.name
      && child.props.when === true
  });

  const fallbackElementFound = childrenArray.find((child) => {
    return isValidElement(child)
      && typeof child.type === "function"
      && (child.type.name === Default.name || child.type.name === DefaultSwitch.name)
  });

  if (matchingElementFound && isValidElement(matchingElementFound)) {
    return (
      <Fragment>
        {matchingElementFound}
      </Fragment>
    );
  }

  if (fallbackElementFound && isValidElement(fallbackElementFound)) {
    return (<Fragment>
      {fallbackElementFound}
    </Fragment>
    );
  }

  return (
    <Fragment></Fragment>
  )
}

export const DefaultSwitch = Switch;
