import styled from "styled-components";
import {typeScale} from "../util";
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
    background-color:${props.theme.status.warningColor};
    color:${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color:${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color:${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({props}) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: ({props}) => `
    background:none;
    border: 2px solid ${props.theme.status.warningColor};
    color:${props.theme.status.warningColor};
  `,
  tertiaryButtonWarning: ({props}) => `
    background:none;
    color:${props.theme.status.warningColor};
  `,

  primaryButtonError: ({props}) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: ({props}) => `
    background:none;
    border: 2px solid ${props.theme.status.errorColor};
  `,
  tertiaryButtonError: ({props}) => `
    background:none;
    border: 2px solid ${props.theme.status.errorColor};
  `,
  error: ({props}) => `
    background: ${props.theme.status.errorColor};
    color: ${props.theme.status.textColorInverted};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  success: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({props}) => `
    border: 2px solid ${props.theme.status.warningColor};
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
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
