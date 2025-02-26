import React, { useContext, useState, JSX } from "react";
import Context from "../Context/Context";
import { ConvertDate, formatPhoneNumber } from "../utils/Formatters";
import Up from "../icons/Up";
import Down from "../icons/Down";
import Circle from "../icons/Circle";

const Accordion = ({ title, image, children }: { title: string, image: string, children: string | JSX.Element | JSX.Element[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-01 border-b-1 border-gray-10">
      <button
        className={`w-full bg-white py-5 px-6 flex justify-between items-center`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-6 items-center">
          <img
            src={image}
            alt={title}
            width={34}
            height={34}
            className="rounded-full"
          />
          <p>{title}</p>
        </div>
        {isOpen ? <Up /> : <Down />}
      </button>
      {isOpen && (
        <div className="bg-white p-4">
          {children}
        </div>
      )}
    </div>
  );
};

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
      {/* Desk */}
      <div className="hidden md:flex">
        <table className="w-full max-w-11/12 mx-auto">
          <thead className="bg-blue-primary text-white">
            <tr>
              <th className="p-3 rounded-tl-lg">FOTO</th>
              <th className="p-3">NOME</th>
              <th className="p-3">CARGO</th>
              <th className="p-3">DATA DE ADMISSÃO</th>
              <th className="p-3 rounded-tr-lg">TELEFONE</th>
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
      </div>
      {/* Mobile */}
      <div className="md:hidden px-3.5">
        <div className="bg-blue-primary text-white rounded-t-lg flex justify-between items-center ">
          <div className="flex gap-6 p-4">
            <h2>FOTO</h2>
            <h2>NOME</h2>
          </div>
          <div className="flex px-9">
            <Circle />
          </div>
        </div>
        {filteredEmployees.length > 0 && filteredEmployees.map((employee) => (
          <Accordion
            key={employee.id}
            title={employee.name}
            image={employee.image}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b-2 border-dotted border-gray-10">
                <p className="font-bold">Cargo</p>
                <p>{employee.job}</p>
              </div>
              <div className="flex justify-between items-center border-b-2 border-dotted border-gray-10">
                <p className="font-bold">Data de admissão</p>
                <p>{ConvertDate(employee.admission_date)}</p>
              </div>
              <div className="flex justify-between items-center border-b-2 border-dotted border-gray-10">
                <p className="font-bold">Telefone</p>
                <p>{formatPhoneNumber(employee.phone)}</p>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
      {
        filteredEmployees.length === 0 &&
        <div className="w-full max-w-11/12 mt-20 mx-auto justify-center items-center flex">
          <h1>No employees to display.</h1>
        </div>
      }
    </>
  );
}

export default TableEmployees;