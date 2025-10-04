const User = require("../src/patient");
describe("test patient class", () => {
  test("test that i can change patient name after creation incase of mispelt", () => {
    patient = new User("Ade", 25, "Address");
    patient.setName("Fatai");
    expect(patient.getName()).toBe("Fatai");
  });
  test("test that when i put an invalid age it raise", () => {
    patient = new User("Ade", 25, "Address");
    patient.setName("Fatai");
    expect(patient.getName()).toBe("Fatai");
    expect(() => patient.setAge(-1)).toThrow(Error);
    expect(() => patient.setAge(190)).toThrow(Error);
  });
  test("test that when i can change my address", () => {
    patient = new User("Ade", 25, "Address");
    patient.setName("Fatai");
    expect(patient.getName()).toBe("Fatai");
    expect(() => patient.setAge(-1)).toThrow(Error);
    expect(() => patient.setAge(190)).toThrow(Error);
    patient.setContact("Ikorodu");
    expect(patient.getContact()).toBe("Ikorodu");
  });
  test("test that i can Book and appointment", () => {
    patient = new User("Ade", 25, "Address");
    patient.setName("Fatai");
    expect(patient.getName()).toBe("Fatai");
    expect(() => patient.setAge(-1)).toThrow(Error);
    expect(() => patient.setAge(190)).toThrow(Error);
    patient.setContact("Ikorodu");
    expect(patient.getContact()).toBe("Ikorodu");
    patient.setAppointment();
    expect(patient.getAppointment()).toBeTruthy();
  });
  test("test that i can book an emergency", () => {
    patient = new User("Ade", 25, "Address");
    patient.setName("Fatai");
    expect(patient.getName()).toBe("Fatai");
    expect(() => patient.setAge(-1)).toThrow(Error);
    expect(() => patient.setAge(190)).toThrow(Error);
    patient.setContact("Ikorodu");
    expect(patient.getContact()).toBe("Ikorodu");
    patient.setAppointment();
    expect(patient.getAppointment()).toBeTruthy();
    patient.setEmergency();
    expect(patient.getEmergency()).toBeTruthy();
  });
});
