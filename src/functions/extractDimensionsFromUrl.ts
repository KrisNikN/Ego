export const extractDimensionsFromUrl = (
  url: string,
): { width: number; height: number } => {
  const matches = url.match(/\/(\d+)x(\d+)\//);
  if (matches && matches.length === 3) {
    const width = parseInt(matches[1], 10);
    const height = parseInt(matches[2], 10);
    return { width, height };
  }
  const width = 0;
  const height = 0;
  return { width, height };
};
