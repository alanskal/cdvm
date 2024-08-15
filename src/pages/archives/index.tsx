/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

export default function Archives() {
  return (
    <div className='mx-auto container'>
      <h2 className='text-blue container'>NOS ARCHIVES</h2>
        <div className='archives-content mb-4'>
          <p className='text-center mb-2'>Depuis 2021, nous rassemblons des pièces emblématiques des marques françaises disparues. Nous nous les procurons sur des sites de vente en ligne, dans des brocantes, friperies ou les recevons en don. Nous collectionnons aussi des archives papier (matériel publicitaire et commercial, croquis etc).</p>

          <Link href="/donne-frere">
            <p className='text-center text-beige mb-2'>Comment devenir donateur ?</p>
          </Link>

            <p className='text-center'>Les vêtements rehaussés par le Conservatoire de la mode vintage représentent l'excellence du prêt-à-porter français de jadis. Les marques collectionnées et archivées ont joué un rôle clé dans l'évolution de l'industrie de la mode hexagonale.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-row-2 gap-6 w-[400px] mx-auto">

            <Link href='/archives/60'>
              <div className="col-span-1 row-span-1 h-[200px] relative">
                <Image src="/images/archives/archive1.jpg" layout='fill' alt="archive1" className='rounded'/>
              </div>
            </Link>

            <Link href='/archives/70'>
              <div className="col-span-1 row-span-1 h-[200px] relative">
                <Image src="/images/archives/archive2.jpg" layout='fill' alt="archive2"className='rounded'/>
              </div>
            </Link>

            <Link href='/archives/80'>
              <div className="col-span-1 row-span-1 h-[200px] relative">
                <Image src="/images/archives/archive3.PNG" layout='fill' alt="archive3"className='rounded'/>
              </div>
            </Link>

            <Link href='/archives/90'>
              <div className="col-span-1 row-span-1 h-[200px] relative">
                <Image src="/images/archives/archive4.jpg" layout='fill' alt="archive4"className='rounded'/>
              </div>
            </Link>

        </div>
    </div>
  )
}
