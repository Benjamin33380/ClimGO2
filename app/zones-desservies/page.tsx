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
        <section className="zones-desservies-section">
          <div className="max-w-[1200px] mx-auto px-4 pt-24 text-[#1a1a1a]">
            <h1>Zones desservies</h1>

            <p>
              Nous intervenons pour la pose, l’installation, l’entretien et la maintenance de systèmes de climatisation,
              chauffage, pompes à chaleur, chauffe-eau et ventilation sur l’ensemble du Bassin d’Arcachon, du Val de l’Eyre
              jusqu’à la métropole bordelaise. Découvrez les villes desservies par ClimGO :
            </p>

            <section>
              <h2 className="mt-8">🌊 Bassin d’Arcachon</h2>
              <ul aria-label="Zones desservies sur le Bassin d'Arcachon" className="list-none pl-0">
                <li><Link href="/arcachon/">Arcachon</Link></li>
                <li><Link href="/la-teste-de-buch/">La Teste-de-Buch</Link></li>
                <li><Link href="/gujan-mestras/">Gujan-Mestras</Link></li>
                <li><Link href="/le-teich/">Le Teich</Link></li>
                <li><Link href="/biganos/">Biganos</Link></li>
                <li><Link href="/audenge/">Audenge</Link></li>
                <li><Link href="/lanton/">Lanton</Link></li>
                <li><Link href="/andernos-les-bains/">Andernos-les-Bains</Link></li>
                <li><Link href="/arès/">Arès</Link></li>
                <li><Link href="/cap-ferret/">Cap Ferret</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="mt-8">🌳 Val de l’Eyre</h2>
              <ul aria-label="Zones desservies dans le Val de l’Eyre" className="list-none pl-0">
                <li><Link href="/marcheprime/">Marcheprime</Link></li>
                <li><Link href="/Le Barp/">Le Barp</Link></li>
                <li><Link href="/mios/">Mios</Link></li>
                <li><Link href="/salles/">Salles</Link></li>
                <li><Link href="/belin-beliet/">Belin-Béliet</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="mt-8">🏙 Agglomération Bordelaise</h2>
              <ul aria-label="Zones desservies dans l’agglomération de Bordeaux" className="list-none pl-0">
                <li><Link href="/cestas/">Cestas</Link></li>
                <li><Link href="/canéjan/">Canéjan</Link></li>
                <li><Link href="/pessac/">Pessac</Link></li>
                <li><Link href="/gradignan/">Gradignan</Link></li>
                <li><Link href="/talence/">Talence</Link></li>
                <li><Link href="/villeneuve-d-ornon/">Villenave-d&apos;Ornon</Link></li>
                <li><Link href="/begles/">Bègles</Link></li>
                <li><Link href="/merignac/">Mérignac</Link></li>
                <li><Link href="/bordeaux/">Bordeaux</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="mt-8">🌲 Nord des Landes</h2>
              <ul aria-label="Zones desservies dans le Nord des Landes" className="list-none pl-0">
                <li><Link href="/sanguinet/">Sanguinet</Link></li>
                <li><Link href="/parentis-en-born/">Parentis-en-Born</Link></li>
                <li><Link href="/biscarrosse/">Biscarrosse</Link></li>
                <li><Link href="/cazaux/">Cazaux</Link></li>
                <li><Link href="/mimizan/">Mimizan</Link></li>
              </ul>
            </section>

            <section>
              <h2 className="mt-8">🌾 Gironde</h2>
              <ul aria-label="Zones desservies en Gironde" className="list-none pl-0">
                <li><Link href="/le-porge/">Le Porge</Link></li>
                <li><Link href="/lacanau/">Lacanau</Link></li>
                <li><Link href="/le-temple/">Le Temple</Link></li>
                <li><Link href="/saint-loubes/">Saint-Loubès</Link></li>
                <li><Link href="/saint-selve/">Saint-Selve</Link></li>
                <li><Link href="/saint-jean-d-illac/">Saint-Jean-d&apos;Illac</Link></li>
                <li><Link href="/saint-medard-en-jalles/">Saint-Médard-en-Jalles</Link></li>
                <li><Link href="/saint-aubin-de-medoc/">Saint-Aubin-de-Médoc</Link></li>
                <li><Link href="/saucats/">Saucats</Link></li>
                <li><Link href="/martignas-sur-jalle/">Martignas-sur-Jalle</Link></li>
                <li><Link href="/saint-savin/">Saint-Savin</Link></li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
