import { render, screen } from '@testing-library/react';
import { BookShopThemeProvider } from '@/context/themeContext';
import '@testing-library/jest-dom';
import InputText from './InputText';
import React from 'react';

describe('InputText 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1 렌더
    render(
      <BookShopThemeProvider>
        <InputText placeholder="여기에 입력" />
      </BookShopThemeProvider>
    );
    // 2 확인
    expect(screen.getByPlaceholderText('여기에 입력')).toBeInTheDocument();
  });

  it('forward Ref 테스트', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookShopThemeProvider>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookShopThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
