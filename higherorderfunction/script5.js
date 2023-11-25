import { posts } from "./posts.js";
//foreEach
// posts.forEach((post) => {
//   console.log(post);
// });
const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);
const mappedPosts = filteredPosts.map((post) => {
  return post.id + 10;
});
console.log(mappedPosts);
const reduceMappedValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reduceMappedValue);
