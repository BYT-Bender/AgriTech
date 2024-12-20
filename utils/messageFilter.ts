import { PHONE_PATTERN, EMAIL_PATTERN } from '../constants/patterns';

export function filterMessage(message: string): string {
  if (PHONE_PATTERN.test(message) || EMAIL_PATTERN.test(message)) {
    return "[Message Filtered: Contact information detected]";
  }
  return message;
}

