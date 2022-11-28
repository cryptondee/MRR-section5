import axios from "axios";

const searchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID A783vEQHkMbKyvHLcXgkxPJJu8PhMy_QI6XzHCtSuI8",
    },
    params: {
      query: term,
    },
  });
  return res.data.results;
};

export default searchImages;
