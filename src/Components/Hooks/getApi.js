const getBlog = async (id) => {
  const res = await fetch(`https://kabid-vai-server.vercel.app/blog`);
  const data = await res.json();
  return data;
};

const getSingleBlog = async (id) => {
  const res = await fetch(`https://kabid-vai-server.vercel.app/blog/${id}`);
  const data = await res.json();
  return data;
};

const getArt = async () => {
  const res = await fetch("https://kabid-vai-server.vercel.app/art");
  const data = await res.json();
  return data;
};

export { getBlog, getArt, getSingleBlog };

