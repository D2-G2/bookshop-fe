import styled from 'styled-components';
import { Book } from '@/models/book.model';
import BookBestItem from '@/components/books/BookBestItem';

interface Props {
  books: Book[];
}

function MainBest({ books }: Props) {
  return (
    <MainBestStyle>
      {books.map((item, index) => (
        <BookBestItem book={item} itemIndex={index} key={item.id} />
      ))}
    </MainBestStyle>
  );
}

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MainBest;
