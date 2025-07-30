import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ZonesDesservies() {
  const cityCardStyle: React.CSSProperties = {
    //backgroundColor: '#03144a', // blue-900
    backgroundColor: '#F8F9F4',
    color: '#03144a',
    padding: '12px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    fontWeight: 'bold'
  };

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
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold climText mb-6 mt-24">Zones desservies</h1>
            <p className="text-xl md:text-2xl font-semibold climText mb-12 max-w-3xl mx-auto">
              Nous intervenons en Gironde, sur tout le Bassin d&apos;Arcachon et Bordeaux Métropole
            </p>
            <p className="mb-6 text-lg text-justify max-w-2xl mx-auto">
              Nous intervenons pour la pose, l&apos;installation, l&apos;entretien et la maintenance de systèmes de climatisation,
              chauffage, pompes à chaleur, chauffe-eau et ventilation sur l&apos;ensemble du Bassin d&apos;Arcachon, du Val de l&apos;Eyre
              jusqu&apos;à la métropole bordelaise.
            </p>
            <p className="mb-12 max-w-2xl mx-auto">
              Découvrez les villes desservies par ClimGO :
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', width: '100%' }}>
              {/* Bassin d'Arcachon */}
              <section style={{ textAlign: 'left', marginBottom: '40px', padding: '0 16px', gridColumn: 'span 2' }}>
                <div style={{ backgroundColor: '#03144a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#F8F9F4', padding: '16px 24px', borderRadius: '6px', marginBottom: '40px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', margin: '0 auto 40px auto', width: 'fit-content' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                      <Link href="/blog/bassin-darcachon-chauffage-climatisation/">🌊 Bassin d&apos;Arcachon</Link>
                    </h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={cityCardStyle}>
                      <Link href="/blog/arcachon/" style={{ color: '#03144a', textDecoration: 'none' }}>Arcachon</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/la-teste-de-buch/" style={{ color: '#03144a', textDecoration: 'none' }}>La Teste-de-Buch</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/gujan-mestras/" style={{ color: '#03144a', textDecoration: 'none' }}>Gujan-Mestras</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/le-teich/" style={{ color: '#03144a', textDecoration: 'none' }}>Le Teich</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/biganos/" style={{ color: '#03144a', textDecoration: 'none' }}>Biganos</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/audenge/" style={{ color: '#03144a', textDecoration: 'none' }}>Audenge</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/lanton/" style={{ color: '#03144a', textDecoration: 'none' }}>Lanton</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/andernos-les-bains/" style={{ color: '#03144a', textDecoration: 'none' }}>Andernos-les-Bains</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/ares/" style={{ color: '#03144a', textDecoration: 'none' }}>Arès</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/lege-cap-ferret/" style={{ color: '#03144a', textDecoration: 'none' }}>Lège Cap Ferret</Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Val de l'Eyre */}
              <section style={{ textAlign: 'left', marginBottom: '40px', padding: '0 16px' }}>
                <div style={{ backgroundColor: '#03144a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#F8F9F4', padding: '16px 24px', borderRadius: '6px', marginBottom: '40px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', margin: '0 auto 40px auto', width: 'fit-content' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🌳 Val de l&apos;Eyre</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                    <div style={cityCardStyle}>
                      <Link href="/blog/marcheprime/" style={{ color: '#03144a', textDecoration: 'none' }}>Marcheprime</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/le-barp/" style={{ color: '#03144a', textDecoration: 'none' }}>Le Barp</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/mios/" style={{ color: '#03144a', textDecoration: 'none' }}>Mios</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/salles/" style={{ color: '#03144a', textDecoration: 'none' }}>Salles</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/belin-beliet/" style={{ color: '#03144a', textDecoration: 'none' }}>Belin-Béliet</Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Nord des Landes */}
              <section style={{ textAlign: 'left', marginBottom: '40px', padding: '0 16px' }}>
                <div style={{ backgroundColor: '#03144a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#F8F9F4', padding: '16px 24px', borderRadius: '6px', marginBottom: '40px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', margin: '0 auto 40px auto', width: 'fit-content' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🌲 Nord des Landes</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                    <div style={cityCardStyle}>
                      <Link href="/blog/sanguinet/" style={{ color: '#03144a', textDecoration: 'none' }}>Sanguinet</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/parentis-en-born/" style={{ color: '#03144a', textDecoration: 'none' }}>Parentis-en-Born</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/biscarrosse/" style={{ color: '#03144a', textDecoration: 'none' }}>Biscarrosse</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/cazaux/" style={{ color: '#03144a', textDecoration: 'none' }}>Cazaux</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/mimizan/" style={{ color: '#03144a', textDecoration: 'none' }}>Mimizan</Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Agglomération Bordelaise */}
              <section style={{ textAlign: 'left', marginBottom: '40px', padding: '0 16px', gridColumn: 'span 2' }}>
                <div style={{ backgroundColor: '#03144a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
                  <div style={{ backgroundColor: '#F8F9F4', padding: '16px 24px', borderRadius: '6px', marginBottom: '40px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', margin: '0 auto 40px auto', width: 'fit-content' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🏙 Agglomération Bordelaise</h2>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={cityCardStyle}>
                      <Link href="/blog/cestas/" style={{ color: '#03144a', textDecoration: 'none' }}>Cestas</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/canejan/" style={{ color: '#03144a', textDecoration: 'none' }}>Canéjan</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/pessac/" style={{ color: '#03144a', textDecoration: 'none' }}>Pessac</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/gradignan/" style={{ color: '#03144a', textDecoration: 'none' }}>Gradignan</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/talence/" style={{ color: '#03144a', textDecoration: 'none' }}>Talence</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/villenave-d-ornon/" style={{ color: '#03144a', textDecoration: 'none' }}>Villenave-d&apos;Ornon</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/begles/" style={{ color: '#03144a', textDecoration: 'none' }}>Bègles</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/merignac/" style={{ color: '#03144a', textDecoration: 'none' }}>Mérignac</Link>
                    </div>
                    <div style={cityCardStyle}>
                      <Link href="/blog/bordeaux" style={{ color: '#03144a', textDecoration: 'none' }}>Bordeaux</Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Section Gironde - Prend toute la largeur sur 3 colonnes */}
            <section style={{ textAlign: 'center', marginBottom: '40px', padding: '0 16px', marginTop: '32px', gridColumn: 'span 3' }}>
              <div style={{ backgroundColor: '#03144a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '32px', width: '100%' }}>
                <div style={{ backgroundColor: '#F8F9F4', padding: '16px 24px', borderRadius: '6px', marginBottom: '40px', textAlign: 'center', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', margin: '0 auto 40px auto', width: 'fit-content' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🌾 Gironde</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', width: '100%' }}>
                  <div style={cityCardStyle}>
                    <Link href="/blog/le-porge/" style={{ color: '#03144a', textDecoration: 'none' }}>Le Porge</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/lacanau/" style={{ color: '#03144a', textDecoration: 'none' }}>Lacanau</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/le-temple/" style={{ color: '#03144a', textDecoration: 'none' }}>Le Temple</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-loubes/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Loubès</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-selve/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Selve</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-jean-dillac/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Jean-d&apos;Illac</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-medard-en-jalles/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Médard-en-Jalles</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-aubin-de-medoc/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Aubin-de-Médoc</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saucats/" style={{ color: '#03144a', textDecoration: 'none' }}>Saucats</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/martignas-sur-jalle/" style={{ color: '#03144a', textDecoration: 'none' }}>Martignas-sur-Jalle</Link>
                  </div>
                  <div style={cityCardStyle}>
                    <Link href="/blog/saint-savin/" style={{ color: '#03144a', textDecoration: 'none' }}>Saint-Savin</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}