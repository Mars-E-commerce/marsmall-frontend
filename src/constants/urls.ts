export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
    AUTH: {
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
    },
  },
  CLIENT: {
    HOME: '/',
    LOGIN: '/login',
    JOIN: '/join',
    CATEGORY: '/category',
    CART: '/cart',
  },
  PARAM: {
    CATEGORY: 'category',
  },
};
