import Head from "next/head"
import Navbar from "../components/Navbar"

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="styleSheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  )
}

export default Layout
