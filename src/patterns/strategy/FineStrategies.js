export class StandardFineStrategy {
  calculate(daysLate) {
    return daysLate > 0 ? daysLate * 0.5 : 0;
  }
}

export class PremiumMemberFineStrategy {
  calculate(daysLate) {
    return daysLate > 0 ? daysLate * 0.25 : 0;
  }
}
