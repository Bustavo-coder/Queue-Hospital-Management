const Patient = require("./patient");
class PatientManagement {
  #database;
  #id;
  #storeId;
  date = new Date();
  constructor(id) {
    this.database = {};
    this.storeId = [];
    this.id = id;
  }
  register(name, age, contact) {
    user = new Patient(name, age, contact);
    return user;
  }
  #setId() {
    this.id++;
  }
  #getId() {
    return this.id;
  }
  addpatient(patient) {
    this.#setId();
    this.database[this.id + ""] = patient;
    this.storeId.push(this.#getId());
  }
  registeredPatient() {
    return this.database;
  }
  getPatient(id) {
    if (!this.database.hasOwnProperty(id))
      throw new Error("Patient id Does Not Exists");
    return this.database[id];
  }
  bookAppointment(id) {
    if (!this.database.hasOwnProperty(id))
      throw new Error("Patient id Does Not Exists");
    this.#isBooked(id);
    this.database[id].setAppointment();
  }
  #isBooked(id) {
    if (this.database[id].getAppointment() == true) {
      throw new Error("Appointment Has Been Booked");
    }
  }
}
module.exports = PatientManagement;
