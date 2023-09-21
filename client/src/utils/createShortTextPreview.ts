export function createShortTextPreview(
  description: string,
  maxLength: number,
  ellipsis = '...'
) {
  if (typeof description !== 'string' || typeof maxLength !== 'number') {
    throw new Error(
      'Invalid input. Description must be a string, and maxLength must be a number.'
    );
  }

  if (description.length <= maxLength) {
    return description;
  }

  // Ensure the maxLength accounts for the length of the ellipsis
  maxLength = maxLength - ellipsis.length;

  // Extract the substring from the beginning of the description
  const preview = description.substring(0, maxLength);

  // Add ellipsis if the description was truncated
  return preview + ellipsis;
}
