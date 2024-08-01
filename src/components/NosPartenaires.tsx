  import Image from 'next/image'

  export default function NosPartenaires() {
    return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-blue">Nos partenaires</h2>
      </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-10 ">
            <div className="col-span-1 flex items-center justify-center text-center py-16 ">
              <div className='relative w-[120px] h-[120px] mr-2'>
                <Image
                src="/images/justeprvoir.jpg"
                alt="justeprvoir"
                layout='fill'
                objectFit='cover'
                className='border rounded-full !h-[120px]'
                />
              </div>
                <div className='w-[160px]'>
                  <p> At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-center py-16 ">
              <div className='relative w-[120px] h-[120px] mr-2'>
                <Image
                src="/images/home/homeprofile.jpg"
                alt="justeprvoir"
                layout='fill'
                objectFit='cover'
                className='border rounded-full !h-[120px]'
                />
              </div>
                <div className='w-[160px]'>
                  <p> blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-2 gap-4 h-[50px]'>
        <button className='border w-[150px] justify-self-end bg-blue hover:bg-lightBlue rounded'>
          <a style={{color: 'white'}} href="#">Devenir membre</a>
        </button>
        <button className='border w-[150px] justify-self-start bg-blue hover:bg-lightBlue rounded'>
          <a style={{color: 'white'}} href="#">Nous soutenir</a>
        </button>
      </div>
    </section>
    )
  }
