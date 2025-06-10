const formatImageUrl = (lastPart) => {
  const baseUrl = "http://image.tmdb.org/t/p/";
  const size = "w500";

  return `${baseUrl}/${size}${lastPart}`;
};

export default formatImageUrl;
