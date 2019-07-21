

export const API_URL_ROOT = "https://maps.googleapis.com";

export async function get(url) {
  console.log("API",API_URL_ROOT ,url)
  return await fetch(`${API_URL_ROOT}/${url}`);
}
