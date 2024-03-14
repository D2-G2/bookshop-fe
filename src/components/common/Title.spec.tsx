import { render, screen } from '@testing-library/react';
import { BookShopThemeProvider } from '@/context/themeContext';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title 컴포넌트 테스트', () => {
  it('렌더를 확인', () => {
    // 1 렌더
    render(
      <BookShopThemeProvider>
        <Title size="large">제목 </Title>
      </BookShopThemeProvider>
    );
    // 2 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });

  describe('Title 컴포넌트 테스트', () => {
    it('size props 적용', () => {
      // 1 렌더
      const { container } = render(
        <BookShopThemeProvider>
          <Title size="large">제목 </Title>
        </BookShopThemeProvider>
      );
      // 2 확인
      expect(container?.firstChild).toHaveStyle('font-size: 2rem');
    });

    it('color props 적용', () => {
      // 1 렌더
      const { container } = render(
        <BookShopThemeProvider>
          <Title size="large" color="primary">
            제목
          </Title>
        </BookShopThemeProvider>
      );
      // 2 확인
      expect(container?.firstChild).toHaveStyle('color: brown');
    });
  });
});
