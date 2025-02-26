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
    const countryCode = cleaned.slice(0, 2);
    const areaCode = cleaned.slice(2, 4);
    const firstPart = cleaned.slice(4, 9);
    const secondPart = cleaned.slice(9, 13);
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  }

  return null;
}