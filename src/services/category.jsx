export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Technology" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Leadership" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Travel" }
];

export function getCategories() {
  return categories.filter(c => c);
}
