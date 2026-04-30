import { API_BASE_URL as envApiBaseUrl } from '@env';

const trimmed = envApiBaseUrl?.trim();
if (!trimmed) {
  throw new Error(
    'API_BASE_URL is missing. Copy .env.example to .env and set API_BASE_URL.',
  );
}

/** Single trailing slash so relative paths join correctly with axios `baseURL`. */
export const API_BASE_URL = `${trimmed.replace(/\/+$/, '')}/`;
