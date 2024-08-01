import Image from "next/image";

export default function IntroBoutique() {
  return (
    <div className="container mx-auto py-8 mb-12">
      <div className="grid grid-cols-7 justify-items-center">
        <div className="col-span-3 flex flex-col justify-start">
          <h2 className="text-red ">Notre boutique seconde main</h2>
          <p>blablablablablablablablablablablabla</p>
        </div>
        <div className="col-span-4">
          <Image
            src='/images/home/homepfw.jpg'
            alt="test"
            width={800}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
