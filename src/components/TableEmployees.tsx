import { useContext } from "react";
import Context from "../Context/Context";
import { ConvertDate, formatPhoneNumber } from "../utils/Formatters";

function TableEmployees() {
  const { employees } = useContext(Context);

  // Early return for invalid or empty data
  if (!Array.isArray(employees) || employees.length === 0) {
    return <h1 className="text-center">No employees to display.</h1>;
  }

  return (
    <table className="w-full max-w-11/12 mx-auto">
      <thead className="bg-blue-primary text-white">
        <tr>
          <th className="p-3 text-center font-bold rounded-tl-lg">FOTO</th>
          <th className="p-3 text-center font-bold">NOME</th>
          <th className="p-3 text-center font-bold">CARGO</th>
          <th className="p-3 text-center font-bold">DATA DE ADMISSÃO</th>
          <th className="p-3 text-center font-bold rounded-tr-lg">TELEFONE</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {employees.map((employee) => (
          <tr key={employee.id} className="shadow-01">
            <td className="p-3 text-center">
              <img
                src={employee.image}
                alt={employee.name}
                width={34}
                height={34}
                className="rounded-full mx-auto"
              />
            </td>
            <td className="p-3 text-center">{employee.name}</td>
            <td className="p-3 text-center">{employee.job}</td>
            <td className="p-3 text-center">{ConvertDate(employee.admission_date)}</td>
            <td className="p-3 text-center">{formatPhoneNumber(employee.phone)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableEmployees;