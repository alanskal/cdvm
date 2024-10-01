  import Image from 'next/image'

  export default function NosPartenaires() {
    return (
    <section className='mb-2'>
      <div className="flex justify-center">
        <h2 className="text-blue">Nos partenaires</h2>
      </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-36 ">

            <div className="col-span-1 items-center justify-items-center  justify-self-center text-center py-16 ">
              <div className='relative w-[120px] h-[120px] mx-auto '>
                <Image
                src="/images/home/justeprvoir.jpg"
                alt="justeprvoir"
                layout='fill'
                objectFit='cover'
                className='border rounded-full  '
                />
              </div>
                <div className='w-[160px]'>
                  <p> At vero eos et accusamus et iusto odio dignissimos ducimus</p>
                </div>
            </div>
            <div className="col-span-1 items-center justify-center text-center py-16 ">
              <div className='relative w-[120px] h-[120px] mx-auto'>
                <Image
                src="/images/home/homeprofile.jpg"
                alt="justeprvoir"
                layout='fill'
                objectFit='cover'
                className='border rounded-full'
                />
              </div>
                <div className='w-[160px]'>
                  <p> blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                </div>
            </div>
          </div>
      </div>
    </section>
    )
  }
