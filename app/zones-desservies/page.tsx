import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ZonesDesservies() {
  return (
    <>
      <Head>
        <title>Zones desservies – ClimGO</title>
        <meta
          name="description"
          content="Découvrez les zones desservies par ClimGO pour l'installation, l'entretien et le dépannage de vos systèmes de climatisation, chauffage et pompe à chaleur."
        />
      </Head>
      <main>
        <section className="py-20 bg-[#FAFAF6] text-center px-4">
          <div className="w-full max-w-[900px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold climText mb-6 mt-24">Zones desservies</h1>
            <p className="text-xl md:text-2xl font-semibold climText mb-12 max-w-3xl mx-auto">
              Nous intervenons en Gironde, sur tout le Bassin d’Arcachon et Bordeaux Métropole
            </p>
            <p className="mb-6 text-lg text-justify max-w-2xl mx-auto">
              Nous intervenons pour la pose, l’installation, l’entretien et la maintenance de systèmes de climatisation,
              chauffage, pompes à chaleur, chauffe-eau et ventilation sur l’ensemble du Bassin d’Arcachon, du Val de l’Eyre
              jusqu’à la métropole bordelaise.
            </p>
            <p className="mb-12 max-w-2xl mx-auto">
              Découvrez les villes desservies par ClimGO :
            </p>

            <section className="text-left mb-10">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="bg-[#F8F9F4] p-4 px-6 rounded-md mb-10 text-center shadow-sm mx-auto w-fit">
                  <h2 className="text-2xl font-bold climText">🌊 Bassin d’Arcachon</h2>
                </div>
                <div aria-label="Zones desservies sur le Bassin d'Arcachon" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-3">
                  <div><Link href="/blog/arcachon/">Arcachon</Link></div>
                  <div><Link href="/blog/la-teste-de-buch/">La Teste-de-Buch</Link></div>
                  <div><Link href="/blog/gujan-mestras/">Gujan-Mestras</Link></div>
                  <div><Link href="/blog/le-teich/">Le Teich</Link></div>
                  <div><Link href="/blog/biganos/">Biganos</Link></div>
                  <div><Link href="/blog/audenge/">Audenge</Link></div>
                  <div><Link href="/blog/lanton/">Lanton</Link></div>
                  <div><Link href="/blog/andernos-les-bains/">Andernos-les-Bains</Link></div>
                  <div><Link href="/blog/arès/">Arès</Link></div>
                  <div><Link href="/blog/cap-ferret/">Cap Ferret</Link></div>
                </div>
              </div>
            </section>

            <section className="text-left mb-10">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="bg-[#F8F9F4] p-4 px-6 rounded-md mb-10 text-center shadow-sm mx-auto w-fit">
                  <h2 className="text-2xl font-bold climText">🌳 Val de l’Eyre</h2>
                </div>
                <div aria-label="Zones desservies dans le Val de l’Eyre" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-3">
                  <div><Link href="/blog/Marcheprime/">Marcheprime</Link></div>
                  <div><Link href="/blog/le-Barp/">Le Barp</Link></div>
                  <div><Link href="/blog/mios/">Mios</Link></div>
                  <div><Link href="/blog/salles/">Salles</Link></div>
                  <div><Link href="/blog/belin-beliet/">Belin-Béliet</Link></div>
                </div>
              </div>
            </section>

            <section className="text-left mb-10">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="bg-[#F8F9F4] p-4 px-6 rounded-md mb-10 text-center shadow-sm mx-auto w-fit">
                  <h2 className="text-2xl font-bold climText">🏙 Agglomération Bordelaise</h2>
                </div>
                <div aria-label="Zones desservies dans l’agglomération de Bordeaux" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-3">
                  <div><Link href="/blog/cestas/">Cestas</Link></div>
                  <div><Link href="/blog/canéjan/">Canéjan</Link></div>
                  <div><Link href="/blog/pessac/">Pessac</Link></div>
                  <div><Link href="/blog/gradignan/">Gradignan</Link></div>
                  <div><Link href="/blog/talence/">Talence</Link></div>
                  <div><Link href="/blog/villeneuve-d-ornon/">Villenave-d&apos;Ornon</Link></div>
                  <div><Link href="/blog/begles/">Bègles</Link></div>
                  <div><Link href="/blog/merignac/">Mérignac</Link></div>
                  <div><Link href="/blog/bordeaux">Bordeaux</Link></div>
                </div>
              </div>
            </section>

            <section className="text-left mb-10">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="bg-[#F8F9F4] p-4 px-6 rounded-md mb-10 text-center shadow-sm mx-auto w-fit">
                  <h2 className="text-2xl font-bold climText">🌲 Nord des Landes</h2>
                </div>
                <div aria-label="Zones desservies dans le Nord des Landes" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-3">
                  <div><Link href="/blog/sanguinet/">Sanguinet</Link></div>
                  <div><Link href="/blog/parentis-en-born/">Parentis-en-Born</Link></div>
                  <div><Link href="/blog/biscarrosse/">Biscarrosse</Link></div>
                  <div><Link href="/blog/cazaux/">Cazaux</Link></div>
                  <div><Link href="/blog/mimizan/">Mimizan</Link></div>
                </div>
              </div>
            </section>

            <section className="text-left mb-10">
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="bg-[#F8F9F4] p-4 px-6 rounded-md mb-10 text-center shadow-sm mx-auto w-fit">
                  <h2 className="text-2xl font-bold climText">🌾 Gironde</h2>
                </div>
                <div aria-label="Zones desservies en Gironde" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-3">
                  <div><Link href="/blog/le-porge/">Le Porge</Link></div>
                  <div><Link href="/blog/lacanau/">Lacanau</Link></div>
                  <div><Link href="/blog/le-temple/">Le Temple</Link></div>
                  <div><Link href="/blog/saint-loubes/">Saint-Loubès</Link></div>
                  <div><Link href="/blog/saint-selve/">Saint-Selve</Link></div>
                  <div><Link href="/blog/saint-jean-d-illac/">Saint-Jean-d&apos;Illac</Link></div>
                  <div><Link href="/blog/saint-medard-en-jalles/">Saint-Médard-en-Jalles</Link></div>
                  <div><Link href="/blog/saint-aubin-de-medoc/">Saint-Aubin-de-Médoc</Link></div>
                  <div><Link href="/blog/saucats/">Saucats</Link></div>
                  <div><Link href="/blog/martignas-sur-jalle/">Martignas-sur-Jalle</Link></div>
                  <div><Link href="/blog/saint-savin/">Saint-Savin</Link></div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
