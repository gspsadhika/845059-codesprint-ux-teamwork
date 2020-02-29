export class Order {
  id: number;
  amountINR: number;
  amountPaise: number;
  rFirstName: String;
  rLastName: String;
  address: String;
  city: String;
  state: String;
  country: String;
  pincode: number;
  bFirstName: String;
  bLastName: String;
  phoneNumber: PhoneNumber;
  email: String;
}

class PhoneNumber {
  code: string;
  digit1: number;
  digit2: number;
  digit3: number;
  digit4: number;
  digit5: number;
  digit6: number;
  digit7: number;
  digit8: number;
  digit9: number;
  digit10: number;
  printString(): string {
    return (
      this.code +
      " " +
      this.digit1 +
      this.digit2 +
      this.digit3 +
      this.digit4 +
      this.digit5 +
      this.digit6 +
      this.digit7 +
      this.digit8 +
      this.digit9 +
      this.digit10
    );
  }
}
