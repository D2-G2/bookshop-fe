import styled from 'styled-components';
import { BookDetail } from '@/models/book.model';
import InputText from '../common/InputText';
import Button from '../common/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBook } from '@/hooks/useBook';

interface Props {
  book: BookDetail;
}

export default function AddToCart({ book }: Props) {
  const [quantity, setQuantity] = useState(1);
  // const [cartAdded, setCartAdded] = useState(false);
  const { addToCart, cartAdded } = useBook(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  // const addToCart = () => {
  //   addCart({ bookId: book.id, quantity }).then(() => {
  //     // showAlert('장바구니에 상품이 담겼습니다.');
  //     setCartAdded(true);
  //     setTimeout(() => {
  //       setCartAdded(false);
  //     }, 3000);
  //   });
  // };

  return (
    <AddToCartStyle $added={cartAdded}>
      <div>
        <InputText
          inputType="number"
          value={quantity}
          onChange={handleChange}
        />
        <Button size="medium" scheme="normal" onClick={handleIncrease}>
          +
        </Button>

        <Button size="medium" scheme="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button
        size="medium"
        scheme="primary"
        onClick={() => addToCart(quantity)}
      >
        장바구니 담기
      </Button>
      {cartAdded && (
        <div className="added">
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      )}
    </AddToCartStyle>
  );
}

interface AddToCartStyleProps {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? '1' : '0')};
    transition: all 0.5s ease;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;
