/* Utils */

/**
 * Formats a phone number by replacing '+' with '00' and removing spaces, parentheses, and dashes.
 *
 * @param input
 *
 * @returns Formatted phone number string
 */
export const formatPhoneNumber = (input: string): string => {
  return input.replaceAll(/[+\s()-]/g, match => (match === '+' ? '00' : ''));
};
