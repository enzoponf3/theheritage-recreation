import React from "react"
import ReactDOM from "react-dom"
import Layout from "./app/components/layout"
import "./index.css"
import Home from "./app/screens/home"
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
)
