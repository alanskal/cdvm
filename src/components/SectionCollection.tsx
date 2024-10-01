import Image from "next/image";

export default function SectionCollection() {


  return (
    <>

    <header>
      <div className="flex justify-center items-center space-x-4 ">
        <div className="border-t border-gray-300 flex-1"></div>
        <h2 className=" text-red mb-2">NOS ARCHIVES</h2>
        <div className="border-t border-gray-300 flex-1"></div>


      </div>


    </header>
      <section className="mb-12 ">

        <div className="flex justify-around">


          <div className="image-container">
            <div className="z-10">
                <p className="text-red font-bold text-6xl">60s</p>
            </div>
            <Image
              src="/images/archives/archive1.jpg"
              alt="test"
              fill
              className="border rounded grayscale"
              />
          </div>

          <div className="image-container">
            <div className="z-10">
                <p className="text-red font-bold text-6xl">70s</p>
            </div>
            <Image
              src="/images/archives/archive2.jpg"
              alt="test"
              fill
              className="border rounded grayscale"
            />
          </div>

          <div className="image-container">
            <div className="z-10">
                <p className="text-red font-bold text-6xl">80s</p>
            </div>
            <Image
              src="/images/archives/archive3.png"
              alt="test"
              fill
              className="border rounded grayscale"
              />
            </div>

          <div className="image-container">
            <div className="z-10">
                <p className="text-red font-bold text-6xl">90s</p>
            </div>
            <Image
              src="/images/archives/archive4.jpg"
              alt="test"
              fill
              className="border rounded grayscale"
            />
          </div>


        </div>
      </section>

      <style jsx>{`
        .image-container {
          width: 180px;
          height: 180px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

        }

        .grayscale {
          filter: grayscale(100%);}


      `}</style>

    </>

  )
}
