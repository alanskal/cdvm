import Image from "next/image";

export default function SectionCollection() {

  return (
    <>
    <header>
      <h2 className="flex justify-center text-blue">NOTRE COLLECTION</h2>
    </header>
      <section className="mb-12">
        <div className="flex justify-around">
          <Image
            src="/images/home/petiteimage.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />
          <Image
            src="/images/collections/collec2.jpeg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />
          <Image
            src="/images/collections/collec3.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />

          <Image
            src="/images/collections/collec4.jpg"
            alt="test"
            width={150}
            height={150}
            layout="contain"
            className="border rounded"
          />


        </div>
      </section>
    </>

  )
}
