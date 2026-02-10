/**
 * Greeting module for GWA Demo
 */

export function greet(name: string): string {
  if (!name || name.trim() === '') {
    return 'Hello, World!';
  }
  return `Hello, ${name}!`;
}

export function greetFormal(name: string, title?: string): string {
  if (title) {
    return `Good day, ${title} ${name}.`;
  }
  return `Good day, ${name}.`;
}
