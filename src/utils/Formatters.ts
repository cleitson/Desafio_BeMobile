export function ConvertDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  return date.toLocaleDateString('pt-BR', options);
}

export function formatPhoneNumber(phone: string): string | null {
  // Remove any non-digit characters from the input
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 13) {
    const countryCode = cleaned.slice(0, 2); // "55"
    const areaCode = cleaned.slice(2, 4);    // e.g., "55"
    const firstPart = cleaned.slice(4, 9);   // e.g., "55555"
    const secondPart = cleaned.slice(9, 13); // e.g., "5555"

    // Return formatted string
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }

  // Return null or throw an error if the input is invalid
  return null; // You could also throw an error or return a different default value
}