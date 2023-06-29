type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const test: ElevatedEmployee = {
  name: "bijan",
  privileges: ["server", "client"],
  startDate: new Date(),
};
