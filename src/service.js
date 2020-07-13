const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

export const fetchAllPosts = () => {
  return fetch(POSTS_URL).then(res => res.json());
};

export const fetchAllComments = () => {
  return fetch(COMMENTS_URL).then(res => res.json());
};
