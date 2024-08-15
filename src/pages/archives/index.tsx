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

      <div className="container mx-auto pt-4">

        <div className="grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-6">

          <Link href='/archives/60' className='relative row-span-1 mx-[32px]'>
            <div className="">
              <Image src="/images/archives/archive1.jpg" layout='fill' objectFit='fill' alt="archive1" className='rounded absolute'/>
            </div>
            </Link>
            <div className="col-span-1 row-span-1 ">
              <p className='self-center'>La mode des années 1960 est marquée par un renversement complet des préceptes établis lors de la précédente décennie. La Haute Couture voit sa suprématie supplantée par le prêt-à-porter, porté par un vent de libération. La jeunesse devient à la fois source d’inspiration et client final du vêtement.
              </p>
              </div>

            <div className="col-span-1 row-span-1 ">
              <p className='text-right self-center'>Dans les années 1970, la mode occidentale se caractérise par deux grandes tendances : les vêtements fantaisie et les tenues pratiques du prêt-à-porter. Les vêtements unisexe, surtout les jeans, gagnent en popularité. Les styles hippie, punk, glam-rock et disco marquent cette période.
              </p>
            </div>
            <Link href='/archives/70' className='relative col-span-1 row-span-1 mx-[32px]'>
              <div className="col-span-1 row-span-1 h-[200px]">
                <Image src="/images/archives/archive2.jpg" layout='fill' alt="archive2"className='rounded absolute'/>
              </div>
            </Link>
        </div>
      </div>



            {/* <div>
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
            </div> */}

    </div>
  )
}
