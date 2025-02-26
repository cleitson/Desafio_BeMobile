import { useEffect, useState, useMemo } from "react";
import Context from "./Context";
import { EmployeesType } from "../types";
import { useSearchParams } from "react-router";

type ContextProviderProps = {
  children: React.ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [employees, setEmployees] = useState<EmployeesType[]>([]);
  const [searchParam] = useSearchParams();
  const search = searchParam.get('search') || '';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredEmployees = useMemo(() => {
    if (search) {
      return employees.filter(employee =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.job.toLowerCase().includes(search.toLowerCase()) ||
        employee.phone.includes(search) ||
        employee.admission_date.includes(search)
      );
    }
    return employees;
  }, [search, employees]);

  const values = useMemo(() => ({
    loading,
    setLoading,
    employees,
    filteredEmployees
  }), [loading, employees, filteredEmployees]);

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;