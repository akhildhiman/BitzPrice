import { useState } from "react"

const Prices = ({ bpiData }) => {
  const [currency, setCurrency] = useState("USD")
  const bpi = bpiData.bpi

  return currency ? (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {bpi[currency].description} :
          <span className="badge badge-primary">{bpi[currency].code}</span>
          <strong>{bpi[currency].rate}</strong>
        </li>
      </ul>

      <select
        onChange={(e) => setCurrency(e.target.value)}
        value={currency}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  ) : null
}

export default Prices
