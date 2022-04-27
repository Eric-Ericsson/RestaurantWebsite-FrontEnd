import Head from 'next/head';
import About from '../components/home/About';
import Contact from '../components/home/contact';
import Food from '../components/home/Food';
import FoodServed from '../components/home/FoodServed';
import Homepage from '../components/home/homePage';
import OpeningHours from '../components/home/OpeningHours';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Homepage />
      <About />
      <FoodServed />
      <Food />
      <Contact />
      <OpeningHours />
    </Layout>
  )
}

export default Home
