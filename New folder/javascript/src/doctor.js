class Doctor {
  #name;
  #department;
  //  #DEPARTMENT = { RADIOLOGY, DENTIST };
  #contactInformation;
  #availability;
  constructor(name, department, contactInformation) {
    this.name = name;
    this.department = department;
    this.availability = true;
    this.contactInformation = contactInformation;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getDepartment() {
    return this.department;
  }
  setDepartment(department) {
    this.department = department;
  }
  getAvailability() {
    return this.availability;
  }
  // setAvailabilty() {
  //   if (this.availability) this.availability = false;
  //   else this.availability = true;
  // }
}

module.exports = Doctor;
