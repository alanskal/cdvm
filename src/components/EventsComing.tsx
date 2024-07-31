export default function EventsComing() {
  return (
  <div className="mx-auto container mb-12">
    <div className="grid grid-cols-10 justify-items-center">
      <p className="col-start-3 flex justify-self-end text-beige à-venir">Les</p>
      <h2 className="col-start-4 col-end-8 text-beige">ÉVÈNEMENTS</h2>
      <p className="col-start-8 flex justify-self-start self-end text-beige à-venir">à venir...</p>

    </div>
    <div className="grid grid-cols-8 ">
      <div className="col-start-3 col-span-1 border break-words px-4 py-4  ">
        <p>Soirée de lancement</p>
      </div>
      <div className="col-span-1 border break-words px-4 py-4">
        <p>Vendredi 4 aout</p>
      </div>
      <div className="col-span-1 border break-words px-4 py-4 ">
        <p>15H</p>
      </div>
      <div className="col-span-1 border break-words px-4 py-4">
        <p>Lyon</p>
      </div>
     </div>

  </div>
  )
}
