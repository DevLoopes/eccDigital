export class CustomLogger {
  static info(message: string, context?: string) {
    console.log(`[INFO] [${context || 'APP'}] ${new Date().toISOString()} - ${message}`);
  }

  static error(message: string, trace?: string, context?: string) {
    console.error(`[ERROR] [${context || 'APP'}] ${new Date().toISOString()} - ${message}`, trace || '');
  }
}