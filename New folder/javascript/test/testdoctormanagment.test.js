const Doctor = require("../src/doctor");
const Admin = require("../src/doctorManagment");
describe("test doctor managmennt", () => {
  test("test that when i crete a object doctor it get created", () => {
    admin = new Admin(1700);
    result = admin.register("ade", "Radiology", "Address");
    expect(result).toBeInstanceOf(Doctor);
  });
  test("test that when is set id it increse", () => {
    admin = new Admin(1700);
    result = admin.register("ade", "Radiology", "Address");
    expect(result).toBeInstanceOf(Doctor);
    results2 = result.getName();
    expect(results2).toBe("ade");
    admin.setId();
    result3 = admin.getId();
    expect(result3).toBe(1701);
  });
  test("when i add a new Doctor to my database", () => {
    admin = new Admin(1700);
    doctor = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor);
    database = admin.registeredDoctor();
    result3 = database.hasOwnProperty("1701");
    expect(result3).toBe(true);
  });
  test("when i add two doctors to my database", () => {
    admin = new Admin(1700);
    doctor = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor);
    database = admin.registeredDoctor();
    result3 = database.hasOwnProperty("1701");
    expect(result3).toBe(true);
    doctor2 = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor2);
    result2 = database.hasOwnProperty("1702");
    expect(result2).toBe(true);
  });
  test("that when i check for a invalide id", () => {
    admin = new Admin(1700);
    doctor = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor);
    database = admin.registeredDoctor();
    result3 = database.hasOwnProperty("1701");
    expect(result3).toBe(true);
    doctor2 = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor2);
    result2 = database.hasOwnProperty("1900");
    expect(result2).toBe(false);
  });
  test("that i can display registerd doctors", () => {
    admin = new Admin(1700);
    doctor = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor);
    database = admin.registeredDoctor();
    result3 = database.hasOwnProperty("1701");
    expect(result3).toBe(true);
    doctor2 = admin.register("ade", "Radiology", "Address");
    admin.addDoctor(doctor2);
    result2 = database.hasOwnProperty("1900");
    expect(result2).toBe(false);
    console.log(database);
    result = admin.getDoctorById("1701");
  });
});
