export default function EventsComing() {

  return (


  <div className="mb-12">
    <header>
      <div className="flex justify-center items-center space-x-4 ">
        <div className="border-t flex-1 border-gray-300"></div>
        <h2 className="text-red">ÉVENEMENTS À VENIR</h2>
        <div className="border-t flex-1 border-gray-300"></div>

      </div>
    </header>
    <div className="container mx-auto">

    <div className="grid grid-cols-4 gap-0 justify-items-center mb-2">
      <p className="event-title">Évenement</p>
      <p className="event-title">Date(s)</p>
      <p className="event-title">Horaires</p>
      <p className="event-title">Lieu</p>
    </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-0 justify-items-center border rounded mb-1">


          <p>Marché de la mode vintage</p>
          <p>28-29 Septembre 2024</p>
          <p>10h-10h</p>
          <p>Dijon, Parc des expositions</p>

        </div>
      </div>


    </div>
  </div>


  )
}
