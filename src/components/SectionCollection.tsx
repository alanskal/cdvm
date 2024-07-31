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
            src="/images/petiteimage.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />
          <Image
            src="/images/petiteimage.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />
          <Image
            src="/images/petiteimage.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />

          <Image
            src="/images/petiteimage.jpg"
            alt="test"
            width={150}
            height={150}
            className="border rounded"
          />


        </div>
      </section>
    </>

  )
}
