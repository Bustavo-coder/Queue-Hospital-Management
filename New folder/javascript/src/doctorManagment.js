const Doctor = require("./doctor");

class DoctorMangment {
  #database;
  #id;
  constructor(id) {
    this.database = {};
    this.id = id;
  }
  register(name, department, contactInformation) {
    staff = new Doctor(name, department, contactInformation);
    return staff;
  }
  setId() {
    this.id++;
  }
  getId() {
    return this.id;
  }
  addDoctor(doctor) {
    this.setId();
    this.database[this.id + ""] = doctor;
  }
  registeredDoctor() {
    return this.database;
  }
}
module.exports = DoctorMangment;
