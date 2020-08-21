export const requestAllCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });
