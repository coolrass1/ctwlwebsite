import React from 'react'

const Table = () => {
  return (
    <table className="auto border-collapse border border-slate-400 border-spacing-9 py-16 ">
    {/* <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Year</th>
      </tr>
    </thead> */}
    <tbody>
      <tr>
        <td  tabindex="0" className="border border-slate-300  px-8 py-4 hover:bg-gray-50 focus:bg-red-300">Passenger:yes</td>
        <td className="border border-slate-300  px-8 py-4">Iphone Charger:yes</td>
        <td className="border border-slate-300  px-8 py-4">Fully insured:yes</td>
      </tr>
      <tr className="hover:bg-gray-200 focus:bg-gray-300"
    tabindex="0">
        <td className="border border-slate-300  px-8 py-4">
          Interior: Black Leather
        </td>
        <td className="border border-slate-300  px-8 py-4">On Board Drinks: Yes</td>
        <td className="border border-slate-300  px-8 py-4">Smoking: No</td>
      </tr>
      <tr>
        <td className="border border-slate-300   px-8 py-4">DVD Player: Yes</td>
        <td className="border border-slate-300   px-8 py-4">On Board Snacks: Yes</td>
        <td className="border border-slate-300  px-8 py-4">Surround Sound: Yes</td>
      </tr>
      <tr>
        <td className="border border-slate-300  px-8 py-4">On Board Wifi: Yes</td>
        <td className="border border-slate-300  px-8 py-4">Bag Capacity: 2</td>
        <td className="border border-slate-300  px-8 py-4">LCD Screens: Yes</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Table