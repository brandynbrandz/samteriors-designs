import { keyframes } from "styled-components";
import theme from "../styles/theme";

// ContainerContainer
export const efect = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

export const efectin = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

export const loadIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const toWork = keyframes`
  0% {
    height: 80px;
  }

  100% {
    height: 100%;
  }
`;

export const workToCase = keyframes`
  0% {
    width: 0%;
    opacity: 1;
  }
  50% {
    width: 100vw;
    opacity: 1;
  }
  90% {
    width: 100vw;
    opacity: 1;
  }
  100% {
    width: 100vw;
    opacity: 0;
  }
`;

export const caseToWork = keyframes`
  0% {
    border-radius: 0 !important;
    left: 0;
    top: 0;
    height: 100vh;
    width: 0%;
    background-color: ${theme.colors.black};
  }
  100% {
    border-radius: 0 !important;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.black};
  }
`;

// navigation
export const openNavigation = hasBackground => keyframes`
  0%{
    background-color: ${hasBackground ? theme.colors.white : `transparent`};
    right: 0;
    top: 0;
    width: 80px;
    height: 100%;
    border-radius: 0;
  }
  100% {
    background-color: ${theme.colors.white};
    right: 0px;
    top:0px;
    border-radius: 0;
    width: 420px;
    height: 100%;
  }
`;
export const openNavigationM = hasBackground => keyframes`
  0%{
    background-color: ${hasBackground ? theme.colors.white : `transparent`};
    right: 0;
    top: 0;
    width: 80px;
    height: 100%;
    border-radius: 0;
  }
  100% {
    background-color: ${theme.colors.white};
    right: 0px;
    top:0px;
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`;
export const closeNavigation = keyframes`
  0%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const disappear = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const loadImage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const openSpan = keyframes`
  0% {
    height:0px;
    width: 0%;
  }

  100% {
    height: 1000%;
    width: 1000%;
  }
`;

