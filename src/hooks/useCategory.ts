import { useState, useEffect } from 'react';
import { fetchCategory } from '@/api/category.api';
import { Category } from '@/models/category.model';
import { useLocation } from 'react-router-dom';

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  const setActive = () => {
    const params = new URLSearchParams(location.search);
    if (params.get('categoryId')) {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: item.categoryId === Number(params.get('categoryId')),
          };
        });
      });
    } else {
      setCategory((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            isActive: false,
          };
        });
      });
    }
  };

  useEffect(() => {
    fetchCategory().then((category) => {
      if (!category) return;

      const categoryWithAll = [
        { categoryId: null, categoryName: '전체' },
        ...category,
      ] as Category[];
      setCategory(categoryWithAll);
      setActive();
    });
  }, []);

  useEffect(() => {
    setActive();
  }, [location.search]);

  return { category };
};
