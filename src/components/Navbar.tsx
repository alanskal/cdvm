import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='Navbar grid grid-cols-7 items-center'>
      <Image
        src={'/images/LogoFullCouleur.png'}
        alt='logo'
        className='col-span-1'
        width={150}
        height={100}
        />
          <Link href='/' className='text-red'><p>Archives</p></Link>
          <Link href='/' className='text-red' ><p>Boutique</p></Link>
          <Link href='/' className='text-red' ><p>Évenement</p></Link>
          <Link href='/' className='text-red' ><p>À propos</p></Link>
          <Link href='/' className='text-red' ><p>RGPD</p></Link>
          <Link href='/' className='text-red' ><p>Rechercher</p> </Link>


    </div>

  )
}
