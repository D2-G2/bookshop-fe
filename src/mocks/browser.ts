import { setupWorker } from 'msw/browser';
import { addReview, reviewForMain, reviewsById } from '@/mocks/review';
import { bestBooks } from '@/mocks/books';
import { banners } from '@/mocks/banner';

const handlers = [reviewsById, addReview, reviewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);
