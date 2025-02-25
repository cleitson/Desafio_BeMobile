import { useEffect, useState } from "react";
import Context from "./Context";
import { EmployeesType } from "../types";

type ContextProviderProps = {
  children: React.ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [employees, setEmployees] = useState<EmployeesType[]>([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    }
    fetchData();
  
  }, [])

  const values = {
    loading,
    setLoading,
    employees,
    setEmployees
  };
  
  return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider