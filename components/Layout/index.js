import Head from 'next/head'
import Footer from '../home/Footer'
import NavigationBar from '../home/NavBar'

export default function Layout({title, keywords,description, children}) {
  return (
    <div>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <link
        rel="icon"
        href=" "
      />
    </Head>
    <NavigationBar />
    {children}
    <Footer />
  </div>
  )
}

Layout.defaultProps = {
    title: "Home | DARMA RESTAURANT",
    description: "Find the best food restaurant closest to you",
    keywords: "Ayisha kitchen, restaurant, dinner, pizza,"
}