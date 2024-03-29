import dayjs from 'dayjs';

export function formatNumber(num: number) {
  return num.toLocaleString();
}

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : 'YYYY년 MM월 DD일');
};
