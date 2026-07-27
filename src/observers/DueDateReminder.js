import { Notifier } from "../interfaces/Notifier.js";
import { Logger } from "../utils/Logger.js";

export class DueDateReminder extends Notifier {
  async notify(event, payload) {
    if (event === "loan:created") {
      Logger.info(`Reminder scheduled for loan ${payload.loanId}, due ${payload.dueAt}`);
    }
  }
}
