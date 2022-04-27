import Head from 'next/head';
import About from '../components/home/About';
import Contact from '../components/home/contact';
import Food from '../components/home/Food';
import Homepage from '../components/home/homePage';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Homepage />
      <About />
      <Food />
      <Contact />
    </Layout>
  )
}

export default Home
