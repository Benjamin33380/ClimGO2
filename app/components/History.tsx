import Link from "next/link";

export default function History() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03144a] mb-8">
              Fondateur de ClimGO
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12 items-center">            

            {/* Texte de présentation */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Passionné par mon métier depuis plus de 10 ans, je mets mon <strong>expérience</strong> et mon <strong>savoir-faire</strong> à votre disposition pour assurer votre confort au quotidien. <strong>Proximité</strong>, <strong>sérieux</strong> et <strong>qualité</strong> guident chacun de mes projets.
              </p>
              
              <div className="flex flex-col items-center justify-center text-center space-y-4 mt-12">
                <Link href="/a-propos" className="bg-[#03144a] text-white px-6 py-3 rounded-full shadow-md transition transform hover:scale-105 duration-300">
                  Notre histoire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}