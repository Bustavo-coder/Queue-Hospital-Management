class Patient {
  #name;
  #age;
  #contact;
  #reason;
  #appointment;
  #emergency;
  constructor(name, age, contact) {
    this.#validate_age(age);
    this.name = name;
    this.contact = contact;
    this.age = age;
    this.appointment = false;
    this.emergency = false;
    this.reason = "To Book";
  }
  #validate_age(age) {
    if (age < 0 || age > 150)
      throw new Error("Invalid age age must be between rang 1 - 150");
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAge(age) {
    this.#validate_age(age);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  getContact() {
    return this.contact;
  }
  setContact(contact) {
    this.contact = contact;
  }
  setEmergency() {
    if (!this.emergency) this.emergency = true;
    else this.emergency = false;
  }
  getEmergency() {
    return this.emergency;
  }
  setAppointment() {
    if (!this.appointment) this.appointment = true;
    else this.appointment = false;
  }
  getAppointment() {
    return this.appointment;
  }
}
module.exports = Patient;
