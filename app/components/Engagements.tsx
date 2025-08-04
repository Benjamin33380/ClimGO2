export default function Engagements() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-center bg-cover bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: "url('/fond2.png')",
          filter: "brightness(0.3)",
        }}
        aria-hidden="true"
      ></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f8f8f5] mb-6 text-center drop-shadow-lg">
          Notre savoir-faire
        </h2>
        <p className="text-lg text-[#f8f8f5] max-w-4xl mx-auto leading-relaxed mb-8 text-center drop-shadow-md">
          Chez <strong>ClimGO</strong>, nous vous accompagnons dans tous les domaines du confort thermique et sanitaire : <strong>chauffage</strong>, <strong>climatisation</strong>, <strong>eau chaude sanitaire</strong> et <strong>maintenance</strong>. Nos solutions sont pensées pour allier <strong>performance</strong>, <strong>durabilité</strong>, <strong>économies d’énergie</strong> et <strong>sérénité</strong>, année après année.
        </p>
      </div>
    </section>
  );
}