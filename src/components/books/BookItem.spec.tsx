import { render } from '@testing-library/react';
import BookItem from './BookItem';
import { Book } from '@/models/book.model';
import { BookShopThemeProvider } from '@/context/themeContext';
import React from 'react';
import '@testing-library/jest-dom';

const dummyBook: Book = {
  id: 1,
  title: 'Dummy Book',
  img: 5,
  categoryId: 1,
  form: 'paperback',
  isbn: '1234567890',
  summary: 'This is a dummy book.',
  detail: 'Dummy book detail',
  author: 'Dummy author',
  pages: 100,
  contents: 'Dummy book contents',
  price: 10000,
  likes: 100,
  pubDate: '2021-01-01',
};

describe('BookItem', () => {
  it('렌더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookShopThemeProvider>
        <BookItem book={dummyBook} />
      </BookShopThemeProvider>
    );
    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});
