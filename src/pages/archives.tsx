import Image from 'next/image';

export default function Archives() {
  return (
    <div className='mx-auto container'>
      <h2 className='text-blue container'>NOS ARCHIVES</h2>
        <div className='archives-content mb-4'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse porttitor lorem ut ultricies fermentum. Fusce
            blandit ligula massa, et faucibus eros convallis sit amet.
            Nam aliquam, magna nec vehicula commodo, nunc nulla aliquam augue,
            nec varius ante justo non quam. In euismod efficitur mauris
            Quisque viverra nibh ac pretium ultricies.
            Praesent dictum velit quis velit dignissim fringilla.
            Orci varius natoque penatibus et magnis dis parturient montes,
            </p>
        </div>
        <div className="grid grid-cols-2 grid-row-2 gap-6 w-[400px] mx-auto">
          <div className="col-span-1 row-span-1 h-[200px] relative">
            <Image src="/images/archives/archive1.jpg" layout='fill' alt="archive1" className='rounded'/>
          </div>
          <div className="col-span-1 row-span-1 h-[200px] relative">
            <Image src="/images/archives/archive2.jpg" layout='fill' alt="archive2"className='rounded'/>
          </div>
          <div className="col-span-1 row-span-1 h-[200px] relative">
            <Image src="/images/archives/archive3.jpg" layout='fill' alt="archive3"className='rounded'/>
          </div>
          <div className="col-span-1 row-span-1 h-[200px] relative">
            <Image src="/images/archives/archive4.jpg" layout='fill' alt="archive4"className='rounded'/>
          </div>

        </div>
    </div>
  )
}
