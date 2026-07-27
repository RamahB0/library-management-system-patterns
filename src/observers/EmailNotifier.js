import { Notifier } from "../interfaces/Notifier.js";
import { Logger } from "../utils/Logger.js";

export class EmailNotifier extends Notifier {
  async notify(event, payload) {
    Logger.info(`Email sent for "${event}" to member ${payload.memberId}`);
  }
}
