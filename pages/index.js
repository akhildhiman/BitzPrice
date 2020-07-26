import Layout from "../components/Layout"
import Prices from "../components/Prices"
import axios from "axios"

const Home = (props) => {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpiData={props.bpiData} />
      </div>
    </Layout>
  )
}

Home.getInitialProps = async function () {
  const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
  const data = res.data
  return {
    bpiData: data,
  }
}

export default Home
