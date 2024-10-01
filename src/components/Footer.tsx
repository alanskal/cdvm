export default function Footer() {
  return (
    <section>
      <div className="p-4 mx-auto flex justify-around">
       <div className="basis-1/3">
          <p>Conservatoire de la mode vintage</p>
          <p>Association loi 1901</p>
          <p>Siège social : 20, rue Docteur Butterlin - 38500 Voiron</p>
          <p>Numéro de Siret : 93100519300012</p>

       </div>
       <div className="basis-1/3 text-center">
        <p>Politique de vie privée</p>
        <p>Mentions légales & crédits</p>
        <p>Contacts</p>
       </div>
       <div className="basis-1/3">
        <p className="font-bold">Retrouvez nous sur...</p>
       </div>
      </div>
    </section>
  )
}
