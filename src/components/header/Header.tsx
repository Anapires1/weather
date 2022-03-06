import React, {Component} from 'react';
import {Content, LottieCloud, TextHeader, ViewHeader} from './Header.styles';

export function Header() {
  return (
    <>
      <ViewHeader>
        <TextHeader> Clima </TextHeader>
        <LottieCloud />
      </ViewHeader>
    </>
  );
}
