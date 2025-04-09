export const getImageUrl = (path) => {
  console.log(`/assets/${path}`)
  return new URL(`/assets/${path}`, import.meta.url).href;
};
