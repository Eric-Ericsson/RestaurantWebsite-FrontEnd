import Head from 'next/head'
import Footer from '../home/Footer'
import NavigationBar from '../home/NavBar'
import { useRouter } from 'next/router'


export default function Layout({title, keywords,description, children}) {
  const router = useRouter()

  return (
    <div className='scroll-smooth'>
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
    <div className={`scroll-smooth ${router.pathname == '/menu' ? 'px-0' : 'px-8 md:px-20 bg-[#06273A]'}`}>
    {children}
    </div>
    <Footer />
  </div>
  )
}

Layout.defaultProps = {
    title: "Home | DARMA RESTAURANT",
    description: "Find the best food restaurant closest to you",
    keywords: "Ayisha kitchen, restaurant, dinner, pizza,"
}