export const getAllSeries = () => (
  $.ajax({
    method: 'GET',
    url: '/api/series'
  })
);

export const getSerie = id => (
  $.ajax({
    method: 'GET',
    url: `/api/series/${id}`
  })
);
