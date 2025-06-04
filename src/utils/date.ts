export function formatDateShort(dateInput: string | Date): string {
  const date = new Date(dateInput);
  
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace('.', ''); // Optional: remove dot if needed
}
