import { Children, isValidElement } from "react";

export interface SwitchProps {
  children: any;
}

export interface CaseProps {
  when: boolean;
  children: any;
}

export interface DefaultProps {
  children: any;
}

export const Case = ({ children }: CaseProps) => {
  return children;
}

export const Default = ({ children }: DefaultProps) => {
  return children
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
      && child.type.name === Default.name
  });

  if (matchingElementFound && isValidElement(matchingElementFound)) {
    return matchingElementFound;
  }

  if (fallbackElementFound && isValidElement(fallbackElementFound)) {
    return fallbackElementFound;
  }

  return null;
}
