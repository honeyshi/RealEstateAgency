export const incrementIndex = (currentIndex: number, maxIndex: number) => {
  return currentIndex < maxIndex - 1 ? currentIndex + 1 : 0;
};

export const decrementIndex = (currentIndex: number, maxIndex: number) => {
  return currentIndex > 0 ? currentIndex - 1 : maxIndex - 1;
};
