export const capitalizeSentence = (sentence) => {
  const words = sentence.split("_");
  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
