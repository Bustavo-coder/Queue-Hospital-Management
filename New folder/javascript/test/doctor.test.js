const Doctor = require("../src/doctor");
describe("test doc classs", () => {
  test("test setName to farid", () => {
    user = new Doctor("ade", "Dentist", "contact");
    user.setName("Farid Adewale");
    result = user.getName();
    expect(result).toBe("Farid Adewale");
  });
  test("test when i change departement", () => {
    user = new Doctor("ade", "Dentist", "contact");
    user.setDepartment("Radiology");
    result = user.getDepartment();
    expect(result).toBe("Radiology");
  });
  test("test when the docotr is available", () => {
    user = new Doctor("ade", "Dentist", "contact");
    user.setDepartment("Radiology");
    result = user.getDepartment();
    expect(result).toBe("Radiology");
    result2 = user.getAvailability();
    expect(result2).toBe(true);
  });
});
