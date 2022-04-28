import Image from 'next/image'

const OpeningHours = () => {
  return (
    <div className="h-[600px] py-20 text-light">
      <div className="relative flex flex-col text-center items-center gap-8 justify-center h-full">
      <Image src="https://static.wixstatic.com/media/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg/v1/fill/w_466,h_520,fp_0.50_0.50,lg_1,q_80,enc_auto/e894f1_9afd2a055d3b44b09ab2974fe1692f17~mv2.jpg" alt='' layout='fill'/>
      <div className='absolute flex flex-col gap-8 text-[20px]'>

        <span>Opening Hours</span>
        <span>Dine in or take away</span>
        <div>
          <span>Monday - Saturday 11am - 11pm</span>
          <br />
          <span>Sunday 11am - 7pm</span>
        </div>
      </div>

      </div>
    </div>
  )
}

export default OpeningHours
