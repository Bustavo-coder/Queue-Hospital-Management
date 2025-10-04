const Patient = require("../src/patient");
const User = require("../src/patientManagement");
describe("test Patient Mangement", () => {
  test("test that i can create a patient", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
  });
  test("that i can add a patient to my database", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
    admin.addpatient(result);
    database = admin.registeredPatient();
    expect(database.hasOwnProperty("1701")).toBeTruthy();
    console.log(database);
  });
  test("test that i can get a patient by passing id", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
    admin.addpatient(result);
    database = admin.registeredPatient();
    expect(database.hasOwnProperty("1701")).toBeTruthy();
    patientBase = admin.getPatient("1701");
    expect(patientBase.getName()).toBe("Adeyemi");
  });
  test("test that when i tried getting a patient with an invalid id it throws", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
    expect(() => admin.getPatient("200")).toThrow();
  });
  test("test that i can book an appointment", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
    admin.addpatient(result);
    admin.bookAppointment("1701");
    expect(admin.getPatient("1701").getAppointment()).toBeTruthy();
  });
  test("test that i cannot book an appointment twice when have not attended", () => {
    admin = new User(1700);
    result = admin.register("Adeyemi", 25, "Address");
    expect(result).toBeInstanceOf(Patient);
    admin.addpatient(result);
    admin.bookAppointment("1701");
    expect(() => admin.bookAppointment("1701")).toThrow();
  });
});
