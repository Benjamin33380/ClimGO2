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
              <h2 className="mt-8 text-2xl font-bold climText mb-3">🌊 Bassin d’Arcachon</h2>
              <ul aria-label="Zones desservies sur le Bassin d'Arcachon" className="ml-4 list-disc">
                <li className="py-0.5"><Link href="/blog/arcachon/">Arcachon</Link></li>
                <li className="py-0.5"><Link href="/blog/la-teste-de-buch/">La Teste-de-Buch</Link></li>
                <li className="py-0.5"><Link href="/blog/gujan-mestras/">Gujan-Mestras</Link></li>
                <li className="py-0.5"><Link href="/blog/le-teich/">Le Teich</Link></li>
                <li className="py-0.5"><Link href="/blog/biganos/">Biganos</Link></li>
                <li className="py-0.5"><Link href="/blog/audenge/">Audenge</Link></li>
                <li className="py-0.5"><Link href="/blog/lanton/">Lanton</Link></li>
                <li className="py-0.5"><Link href="/blog/andernos-les-bains/">Andernos-les-Bains</Link></li>
                <li className="py-0.5"><Link href="/blog/arès/">Arès</Link></li>
                <li className="py-0.5"><Link href="/blog/cap-ferret/">Cap Ferret</Link></li>
              </ul>
            </section>

            <section className="text-left mb-10">
              <h2 className="mt-8 text-2xl font-bold climText mb-3">🌳 Val de l’Eyre</h2>
              <ul aria-label="Zones desservies dans le Val de l’Eyre" className="ml-4 list-disc">
                <li className="py-0.5"><Link href="/blog/marcheprime/">Marcheprime</Link></li>
                <li className="py-0.5"><Link href="/blog/Le Barp/">Le Barp</Link></li>
                <li className="py-0.5"><Link href="/blog/mios/">Mios</Link></li>
                <li className="py-0.5"><Link href="/blog/salles/">Salles</Link></li>
                <li className="py-0.5"><Link href="/blog/belin-beliet/">Belin-Béliet</Link></li>
              </ul>
            </section>

            <section className="text-left mb-10">
              <h2 className="mt-8 text-2xl font-bold climText mb-3">🏙 Agglomération Bordelaise</h2>
              <ul aria-label="Zones desservies dans l’agglomération de Bordeaux" className="ml-4 list-disc">
                <li className="py-0.5"><Link href="/blog/cestas/">Cestas</Link></li>
                <li className="py-0.5"><Link href="/blog/canéjan/">Canéjan</Link></li>
                <li className="py-0.5"><Link href="/blog/pessac/">Pessac</Link></li>
                <li className="py-0.5"><Link href="/blog/gradignan/">Gradignan</Link></li>
                <li className="py-0.5"><Link href="/blog/talence/">Talence</Link></li>
                <li className="py-0.5"><Link href="/blog/villeneuve-d-ornon/">Villenave-d&apos;Ornon</Link></li>
                <li className="py-0.5"><Link href="/blog/begles/">Bègles</Link></li>
                <li className="py-0.5"><Link href="/blog/merignac/">Mérignac</Link></li>
                <li className="py-0.5"><Link href="/blog/bordeaux">Bordeaux</Link></li>
              </ul>
            </section>

            <section className="text-left mb-10">
              <h2 className="mt-8 text-2xl font-bold climText mb-3">🌲 Nord des Landes</h2>
              <ul aria-label="Zones desservies dans le Nord des Landes" className="ml-4 list-disc">
                <li className="py-0.5"><Link href="/blog/sanguinet/">Sanguinet</Link></li>
                <li className="py-0.5"><Link href="/blog/parentis-en-born/">Parentis-en-Born</Link></li>
                <li className="py-0.5"><Link href="/blog/biscarrosse/">Biscarrosse</Link></li>
                <li className="py-0.5"><Link href="/blog/cazaux/">Cazaux</Link></li>
                <li className="py-0.5"><Link href="/blog/mimizan/">Mimizan</Link></li>
              </ul>
            </section>

            <section className="text-left mb-10">
              <h2 className="mt-8 text-2xl font-bold climText mb-3">🌾 Gironde</h2>
              <ul aria-label="Zones desservies en Gironde" className="ml-4 list-disc">
                <li className="py-0.5"><Link href="/blog/le-porge/">Le Porge</Link></li>
                <li className="py-0.5"><Link href="/blog/lacanau/">Lacanau</Link></li>
                <li className="py-0.5"><Link href="/blog/le-temple/">Le Temple</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-loubes/">Saint-Loubès</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-selve/">Saint-Selve</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-jean-d-illac/">Saint-Jean-d&apos;Illac</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-medard-en-jalles/">Saint-Médard-en-Jalles</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-aubin-de-medoc/">Saint-Aubin-de-Médoc</Link></li>
                <li className="py-0.5"><Link href="/blog/saucats/">Saucats</Link></li>
                <li className="py-0.5"><Link href="/blog/martignas-sur-jalle/">Martignas-sur-Jalle</Link></li>
                <li className="py-0.5"><Link href="/blog/saint-savin/">Saint-Savin</Link></li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
