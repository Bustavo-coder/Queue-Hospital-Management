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

  setDoctorsSchedule(args) {
    available = this.storeId.filter((x) => x % 2 == args);
    base = this.database;
    available.map((doctors) => {
      base[doctors].setAvailabilty();
    });
    //     for (i = 0; i < this.storeId.length; i += 2) {
    //       dd = this.storeId[i];
    //       base[dd].setAvailabilty();
    //     }
    //     for (doctors in base) {
    //       if (base[doctors].getAvailability()) {
    //         available.push(base[doctors]);
    //       }
    //     }
  }

  displayAvailableDoctors() {
    base = this.database;
    available = [];
    for (doctor in base) {
      if (base[doctor].getAvailability()) {
        available.push(base[doctor]);
      }
    }
    return available;
  }
}

module.exports = DoctorMangment;
