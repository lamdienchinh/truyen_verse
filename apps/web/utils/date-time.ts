import { format, formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

/**
 * Format a date to `dd/MM/yyyy`.
 * @param {Date | string | number} date - The date to format.
 * @returns {string} The formatted date.
 */
export function formatDateDDMMYYYY(date: Date | string) {
  return format(new Date(date), "dd/MM/yyyy", { locale: vi });
}

/**
 * Format a date to `HH:mm dd/MM/yyyy`.
 * @param {Date | string | number} date - The date to format.
 * @returns {string} The formatted date and time.
 */
export function formatDateTime(date: Date | string) {
  return format(new Date(date), "HH:mm dd/MM/yyyy", { locale: vi });
}

/**
 * Get a relative time string (e.g., "3 giờ trước", "2 ngày trước").
 * @param {Date | string | number} date - The date to calculate from.
 * @returns {string} The relative time string.
 */
export function formatRelativeTime(date: Date | string) {
  return formatDistanceToNow(new Date(date), { locale: vi, addSuffix: true });
}
