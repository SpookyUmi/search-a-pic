// Here we format what the user write in our search form in order to pass it in our API url.
// We need to replace the spaces with '&' and to lowercase the string, just by security.
export const searchFormat = (string) => {
  string.replace(/ /g, '&').toLowerCase();
  return string;
}
