import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/main.scss"
import Hero from "../components/hero"
import Overview from "../components/overview"
import Tutorial from "../components/tutorial"
import Features from "../components/features"
import LatestBlog from "../components/latestBlog"
import About from "../components/about"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Layout title="Home">
        <Hero />
        <Overview />
        <Tutorial />
        <Features />
        <LatestBlog />
        <About />
      </Layout>
    </>
  )
}

export default IndexPage