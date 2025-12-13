import React from 'react';
import { galleryData } from './data';
import { StyleDefinition } from './types';
import {
  NeoBrutalistCard,
  GlassmorphismCard,
  NeonDarkCard,
  ClayCard,
  Y2KCard,
  BentoCard,
  MinimalCard,
  MaximalistCard,
  TechnicalPaperCard,
  GeminiTechnicalCard,
  RetroGamingCard,
  MarshmallowCard
} from './components/StyleCards';

const App: React.FC = () => {
  
  const handleDownload = (style: StyleDefinition) => {
    const jsonString = JSON.stringify(style, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${style.category || 'style'}-design-tokens.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  const renderCard = (style: StyleDefinition) => {
    switch (style.id) {
      case 1:
        return <NeoBrutalistCard styleData={style} onDownload={handleDownload} />;
      case 2:
        return <GlassmorphismCard styleData={style} onDownload={handleDownload} />;
      case 3:
        return <NeonDarkCard styleData={style} onDownload={handleDownload} />;
      case 4:
        return <ClayCard styleData={style} onDownload={handleDownload} />;
      case 5:
        return <Y2KCard styleData={style} onDownload={handleDownload} />;
      case 6:
        return <BentoCard styleData={style} onDownload={handleDownload} />;
      case 7:
        return <MinimalCard styleData={style} onDownload={handleDownload} />;
      case 8:
        return <MaximalistCard styleData={style} onDownload={handleDownload} />;
      case 9:
        return <TechnicalPaperCard styleData={style} onDownload={handleDownload} />;
      case 10:
        return <GeminiTechnicalCard styleData={style} onDownload={handleDownload} />;
      case 11:
        return <RetroGamingCard styleData={style} onDownload={handleDownload} />;
      case 12:
        return <MarshmallowCard styleData={style} onDownload={handleDownload} />;
      default:
        return <MinimalCard styleData={style} onDownload={handleDownload} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Styles</span> Gallery
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 font-medium mb-4">
            Add this .JSON file to a new vibe coding project for easy, clean and consistent styling from the very start of development.
          </p>
          <p className="max-w-2xl mx-auto text-base text-gray-500">
            A curated collection of UI aesthetics. Each card below is rendered in its own design language.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-[1fr]">
          {galleryData.styles.map((style) => (
            <div key={style.id} className="h-full min-h-[400px]">
              {renderCard(style)}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center border-t border-gray-200 pt-8">
           <p className="text-gray-400 text-sm">
             Generated with React & Tailwind CSS. All styles are purely CSS-based.
           </p>
        </div>
      </div>
    </div>
  );
};

export default App;