import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='Navbar grid grid-cols-6 items-center '>
      <Link href="/">
        <Image
          src={'/images/LogoFullCouleur.png'}
          alt='logo'
          className=''
          width={150}
          height={100}
          />
      </Link>
          <Link href='/archives' className='text-red'><p>Archives</p></Link>
          <Link href='/' className='text-red' ><p>Évenement</p></Link>
          <Link href='/' className='text-red' ><p>À propos</p></Link>
          <Link href='/' className='text-[white]'>
            <button type="button" className='bg-blue rounded px-2 py-1 hover:bg-red hover:duration-150'>
              <p>Rejoignez nous</p>
            </button>
          </Link>
          <Link href='/' className='text-red' ><p>Rechercher</p> </Link>


    </div>

  )
}
