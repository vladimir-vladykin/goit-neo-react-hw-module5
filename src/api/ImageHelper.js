const formatImageUrl = (lastPart) => {
  const baseUrl = "http://image.tmdb.org/t/p/";
  const size = "w500";

  return `${baseUrl}/${size}${lastPart}`;
};

export const formatCastImageUrl = (lastPart) => {
  const baseUrl = "http://image.tmdb.org/t/p/";
  const size = "w185";

  return `${baseUrl}/${size}${lastPart}`;
};

export default formatImageUrl;
