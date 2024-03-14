import { requestHandler } from '@/api/http';
import { Banner } from '@/models/banner.model';

export const fetchBanners = async (): Promise<Banner[]> => {
  return await requestHandler('get', '/banners');
};
