import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto py-8">
      <table className="table-auto border-collapse border border-slate-400 w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="border border-slate-300 px-6 py-3">Feature 1</th>
            <th className="border border-slate-300 px-6 py-3">Feature 2</th>
            <th className="border border-slate-300 px-6 py-3">Feature 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              tabIndex={0}
              className="border border-slate-300 px-6 py-4 hover:bg-gray-50 focus:bg-red-100"
            >
              Passenger: Yes
            </td>
            <td className="border border-slate-300 px-6 py-4">
              iPhone Charger: Yes
            </td>
            <td className="border border-slate-300 px-6 py-4">
              Fully Insured: Yes
            </td>
          </tr>
          <tr tabIndex={0} className="hover:bg-gray-50 focus:bg-red-100">
            <td className="border border-slate-300 px-6 py-4">
              Interior: Black Leather
            </td>
            <td className="border border-slate-300 px-6 py-4">
              On Board Drinks: Yes
            </td>
            <td className="border border-slate-300 px-6 py-4">Smoking: No</td>
          </tr>
          <tr>
            <td className="border border-slate-300 px-6 py-4">DVD Player: Yes</td>
            <td className="border border-slate-300 px-6 py-4">
              On Board Snacks: Yes
            </td>
            <td className="border border-slate-300 px-6 py-4">
              Surround Sound: Yes
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 px-6 py-4">
              On Board Wi-Fi: Yes
            </td>
            <td className="border border-slate-300 px-6 py-4">Bag Capacity: 2</td>
            <td className="border border-slate-300 px-6 py-4">LCD Screens: Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
