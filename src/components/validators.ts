/* eslint-disable */
class Validators {
  protected constructor() {}

  static required(value: string): boolean {
    return !value;
  }

  static requiredName(value: string): boolean {
    return !(value && value.trim().length > 1);
  }

  static requiredPhone(value: string): boolean {
    const isValid = new RegExp(/^[0-9+\-()]*$/, 'gi').test(value);
    return !(isValid && value.length > 10);
  }

  static requiredEmail(value: string): boolean {
    const isValid = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'gi',
    ).test(value);
    return !isValid;
  }

  static requiredProfileLink(value: string): boolean {
    return !(value && value.trim().length > 2);
  }
}

export default Validators;
