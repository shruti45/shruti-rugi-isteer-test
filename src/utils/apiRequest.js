export const API_URL_ROOT = "https://newsapi.org";

export async function get(url) {
  return await fetch(`${API_URL_ROOT}/${url}`);
}
