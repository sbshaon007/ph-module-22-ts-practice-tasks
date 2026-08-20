interface Employee {
    name: string,
    id: number,
    salary: number,
    department: string
}

const updateEmployee = (employee: Partial<Employee>): void => {
    console.log(employee);
}

type EmployeeBasicInfo = Pick<Employee, "name" | "id">;
type EmployeeWithoutSalary = Omit<Employee, "salary">;

const basicInfo: EmployeeBasicInfo = {
    name: "Rafi",
    id: 101
}

const publicEmployee: EmployeeWithoutSalary = {
    name: "Rafi",
    id: 101,
    department: "Engineering"
};

updateEmployee({ name: "Rafi" });

console.log(basicInfo);
console.log(publicEmployee);