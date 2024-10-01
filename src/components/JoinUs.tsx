export default function JoinUs() {
  return (
  <div className="bg-blue p-5 flex w-full justify-between ">
    <div>
      <p className="font-bold font text-4xl">
        REJOIGNEZ-NOUS
      </p>
        <p>
        Notre projet vous plaît ? Envie de donner un coup de main ?
        C’est ici que ça se passe !
        </p>
    </div>

    <div className="place-self-end flex space-x-8 xl:pt-20">
      <button type="button" className="bg-[white] text-black rounded-2xl py-4 px-10">
        <p>Devenir</p>
        <p>membre</p>
      </button>
      <button type='button' className="bg-[white] text-black rounded-2xl py-4 px-10">
        <p> Nous </p>
        <p>soutenir</p>
      </button>
    </div>
  </div>
  )
}
