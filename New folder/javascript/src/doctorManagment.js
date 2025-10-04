const Doctor = require("./doctor");

class DoctorMangment {
  #database;
  #id;
  #storeId;
  constructor(id) {
    this.database = {};
    this.id = id;
    this.storeId = [];
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
    this.storeId.push(this.getId());
  }
  registeredDoctor() {
    return this.database;
  }
  getDoctorById(id) {
    if (!this.database.hasOwnProperty(id)) throw new Error("Invalid id");
    return this.database[id].getName(), this.database[id].getDepartment();
  }
  #getStoredId() {
    return this.storeId;
  }
}

module.exports = DoctorMangment;
