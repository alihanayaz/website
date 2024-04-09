export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatDate(date: string) {
  const newDate = new Date(date);
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    newDate
  );
  const formattedDate = `${monthName} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  return formattedDate;
}

export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return str;
}
