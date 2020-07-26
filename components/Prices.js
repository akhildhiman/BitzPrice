class Prices extends React.Component {
  state = {
    currency: "USD",
  }

  render() {
    console.log(this.props)
    const { currency } = this.state
    const { bpi } = this.props.bpiData
    return currency ? (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpi[this.state.currency].description} :
            <span className="badge badge-primary">{bpi[currency].code}</span>
            <strong>{bpi[currency].rate}</strong>
          </li>
        </ul>

        <select
          className="form-control"
          onChange={(e) => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    ) : null
  }
  h
}

export default Prices
