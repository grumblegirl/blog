import * as categoriesAPI from "./category";

const blogs = [
  {
    _id: "1",
    title: "React Table Components", //
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Technology" },
    image: "reactTable.jpg",
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-11-01T19:04:28.809Z",
    liked: false
  },
  {
    _id: "2",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Leadership" },
    image: "bg1.jpg",
    numberInStock: 5,
    dailyRentalRate: 2.5,
    liked: false
  },
  {
    _id: "3",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Travel" },
    image: "bg_2.jpg",
    numberInStock: 8,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "4",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Leadership" },
    image: "bg3.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "5",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    image: "bg4.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "6",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    image: "bg5.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "7",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    image: "bg6.jpg",
    numberInStock: 7,
    dailyRentalRate: 4.5,
    liked: false
  },
  {
    _id: "8",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    image: "bg7.jpg",
    numberInStock: 4,
    dailyRentalRate: 3.5,
    liked: false
  },
  {
    _id: "9",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    image: "bg8.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    liked: false
  }
];

export function getBlogs() {
  return blogs;
}

export function getBlog(id) {
  return blogs.find(b => b._id === id);
}

export function saveBlog(blog) {
  let blogInDb = blogs.find(b => b._id === blog._id) || {};
  blogInDb.name = blog.name;
  blogInDb.genre = categoriesAPI.categories.find(
    g => g._id === blog.cetegoryId
  );
  blogInDb.numberInStock = blog.numberInStock;
  blogInDb.dailyRentalRate = blog.dailyRentalRate;

  if (!blogInDb._id) {
    blogInDb._id = Date.now();
    blogs.push(blogInDb);
  }

  return blogInDb;
}

export function deleteBlog(id) {
  let blogInDb = blogs.find(b => b._id === id);
  blogs.splice(blogs.indexOf(blogInDb), 1);
  return blogInDb;
}
