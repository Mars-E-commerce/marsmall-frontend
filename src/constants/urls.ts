export const URLS = {
  API: {
    PREFIX: process.env.REACT_APP_API_PREFIX || '/',
    AUTH: {
      JOIN: '/auth/join',
      LOGIN: '/auth/login',
      LOGOUT: '/auth/logout',
      KAKAO: '/auth/kakao',
      NAVER: '/auth/naver',
      REFRESH: '/auth/refresh',
    },
    USER: {
      ME: '/users/me',
    },
  },
  CLIENT: {
    HOME: '/',
    LOGIN: '/login',
    JOIN: '/join',
    OAUTH: '/oauth',
    CATEGORY: '/category',
    CART: '/cart',
  },
  PARAM: {
    CATEGORY: 'category',
  },
};
