const getBlog = async (id) => {
  const res = await fetch(`http://localhost:5000/blog`);
  const data = await res.json();
  return data;
};

const getSingleBlog = async (id) => {
  const res = await fetch(`http://localhost:5000/blog/${id}`);
  const data = await res.json();
  return data;
};

const getArt = async () => {
  const res = await fetch("http://localhost:5000/art");
  const data = await res.json();
  return data;
};

export { getBlog, getArt, getSingleBlog };
