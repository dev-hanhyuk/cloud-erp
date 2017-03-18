import React from 'react'

const styles={}

export default ({ assets }) => {

  const acquisition_cost = (asset) => asset.unit_price * asset.quantity;

  return (
    <section>
      <p>This list will show the current asset list</p>
      <table>
        <thead>
          <tr>
            <td>asset_id</td>
            <td>serial_number</td>
            <td>serial_name</td>
            <td>location</td>
            <td>acquisition_cost</td>
            <td>depreciation_method</td>
            <td>depreciation_cost</td>
            <td>accumulated_depreciation</td>
          </tr>
        </thead>
        <tbody>
          {assets.map(a => (
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.serial_number}</td>
            <td>{a.name}</td>
            <td>{a.location}</td>
            <td>{acquisition_cost(a)}</td>
            <td>{a.depreciation_method}</td>
            <td>{a.depreciation_cost}</td>
            <td>{a.accumulated_depreciation}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}