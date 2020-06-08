import styled from "styled-components";
import {defaultTheme, typeScale} from "../util";
import {applyStyleModifiers} from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({props}) => `
    background-color:${props.status.warningColor};
    color:${props.textColorInverted};

    &:hover, &:focus {
      background-color:${props.status.warningColorHover};
      outline: 3px solid ${props.status.warningColorHover};
    }

    &:active {
      background-color:${props.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({props}) => `
    background-color: ${props.status.warningColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonWarning: ({props}) => `
    background:none;
    border: 2px solid ${props.status.warningColor};
    color:${props.status.warningColor};
  `,
  tertiaryButtonWarning: ({props}) => `
    background:none;
    color:${props.status.warningColor};
  `,

  primaryButtonError: ({props}) => `
    background-color: ${props.status.errorColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonError: ({props}) => `
    background:none;
    border: 2px solid ${props.status.errorColor};
  `,
  tertiaryButtonError: ({props}) => `
    background:none;
    border: 2px solid ${props.status.errorColor};
  `,
  error: ({props}) => `
    background: ${props.status.errorColor};
    color: ${props.status.textColorInverted};
    &:hover, &:focus {
      background-color: ${props.status.errorColorHover};
      outline: 3px solid ${props.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.errorColorActive};
    }
  `,
  success: ({props}) => `
    background: none;
    color: ${props.status.successColor};
    &:hover, &:focus {
      background-color: ${props.status.successColorHover};
      outline: 3px solid ${props.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({props}) => `
    background-color: ${props.status.successColor};
    color: ${props.textColorInverted};
  `,
  secondaryButtonSuccess: ({props}) => `
    border: 2px solid ${props.status.warningColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorPrimary};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background-color: none;

  &:disabled {
    background-color: none;
    color: ${(props) => props.theme.disabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
  background-color: none;

  &:disabled {
    background-color: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
