import { useContext } from "react";
import Context from "../Context/Context";
import { ConvertDate, formatPhoneNumber } from "../utils/Formatters";

function TableEmployees() {
  const { filteredEmployees, loading } = useContext(Context);

  if (loading) {
    return (
      <div className="w-full max-w-11/12 mx-auto justify-center items-center flex">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
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
        <tbody className="bg-white p-3 text-center">
          {filteredEmployees.length > 0 && filteredEmployees.map((employee) => (
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
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{ConvertDate(employee.admission_date)}</td>
              <td>{formatPhoneNumber(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        filteredEmployees.length === 0 &&
        <div className="w-full max-w-11/12 mx-auto justify-center items-center flex">
          <h1>No employees to display.</h1>
        </div>
      }
    </>
  );
}

export default TableEmployees;