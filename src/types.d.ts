export type contextType = {
  loading: boolean,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>
  employees: EmployeesType[],
  setEmployees: React.Dispatch<React.SetStateAction<EmployeesType[]>>
}

export type EmployeesType = {
  id: number,
  name: string,
  job: string,
  admission_date: string,
  phone: string,
  image: string
}