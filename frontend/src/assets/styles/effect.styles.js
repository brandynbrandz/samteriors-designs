import styled from "styled-components";
import { efect, efectin } from "../animation/keyframes";

export const Efect = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s 1 forwards;
  z-index: 9;
`;
export const Efect1 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s 1 forwards;
  z-index: 8;
`;
export const Efect2 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s 1 forwards;
  z-index: 7;
`;
export const Efectr = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s 1 forwards;
  z-index: 9;
`;
export const Efectr1 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s 1 forwards;
  z-index: 8;
`;
export const Efectr2 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${efect} 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s 1 forwards;
  z-index: 7;
`;
export const Efectin = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  animation: ${efectin} 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s 1 forwards;
  z-index: 9;
`;
export const Efectin1 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation: ${efectin} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s 1 forwards;
  z-index: 8;
`;
export const Efectin2 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${efectin} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.9s 1 forwards;
  z-index: 7;
`;
