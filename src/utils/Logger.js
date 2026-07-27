export class Logger {
  static levels = { INFO: "INFO", WARN: "WARN", ERROR: "ERROR" };

  static log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  static info(message) { Logger.log(Logger.levels.INFO, message); }
  static warn(message) { Logger.log(Logger.levels.WARN, message); }
  static error(message) { Logger.log(Logger.levels.ERROR, message); }
}
