export const requestCategories = () =>
  $.ajax({
    method: "GET",
    url: "/api/categories",
  });
