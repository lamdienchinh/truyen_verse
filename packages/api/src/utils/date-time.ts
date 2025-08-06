export function formatDate(
  date: Date | string,
  locale: string = "vi-VN",
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

export function formatRelativeTime(
  date: Date | string,
  locale: string = "vi-VN"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const diffInMs = dateObj.getTime() - Date.now();
  const diffInSeconds = Math.floor(diffInMs / 1000);

  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, "second");
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(diffInMinutes, "minute");
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (Math.abs(diffInHours) < 24) {
    return rtf.format(diffInHours, "hour");
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (Math.abs(diffInDays) < 30) {
    return rtf.format(diffInDays, "day");
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (Math.abs(diffInMonths) < 12) {
    return rtf.format(diffInMonths, "month");
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return rtf.format(diffInYears, "year");
}

export function isToday(date: Date | string): boolean {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const today = new Date();
  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
}

export function isThisWeek(date: Date | string): boolean {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return dateObj >= startOfWeek && dateObj <= endOfWeek;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function startOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}
