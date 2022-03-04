import React, { Component } from 'react'
import { LottieCloud, TextHeader, ViewHeader } from './Header.styles';

export function Header() {
  return (
    <>
      <ViewHeader>
        <TextHeader> Clima </TextHeader>
        <LottieCloud />
      </ ViewHeader> 
    </>
  );
}