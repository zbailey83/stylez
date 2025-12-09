import React from 'react';
import { StyleDefinition } from '../types';
import { Download, ArrowRight, Layers, Box, Cpu, Grid, Zap, Layout, FileText, Code2, Terminal, Gamepad2 } from 'lucide-react';

interface CardProps {
  styleData: StyleDefinition;
  onDownload: (data: StyleDefinition) => void;
}

// 1. Neo-Brutalism
export const NeoBrutalistCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full flex flex-col bg-[#FDF9F2] border-[3px] border-black p-6 shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
    <div className="bg-[#FFCC00] border-[3px] border-black p-2 inline-block self-start mb-4">
      <h3 className="font-display font-bold text-xl uppercase tracking-tight text-black">
        {styleData.name}
      </h3>
    </div>
    <p className="font-sans font-medium text-black mb-6 leading-snug flex-grow border-l-[3px] border-black pl-4">
      {styleData.description}
    </p>
    <button
      onClick={() => onDownload(styleData)}
      className="group flex items-center justify-center gap-2 w-full py-3 bg-white border-[3px] border-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
    >
      <span>Download {styleData.name}.JSON</span>
      <Download size={18} className="group-hover:stroke-white" />
    </button>
  </div>
);

// 2. Glassmorphism
export const GlassmorphismCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full relative overflow-hidden rounded-2xl group">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-0"></div>
    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.3)_0%,_transparent_50%)] animate-pulse z-0 pointer-events-none"></div>
    
    <div className="relative z-10 h-full flex flex-col p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-glass transition-transform duration-300 group-hover:scale-[1.02]">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md text-white border border-white/30">
           <Layers size={20} />
        </div>
        <h3 className="font-sans font-semibold text-xl text-white tracking-wide drop-shadow-sm">
          {styleData.name}
        </h3>
      </div>
      <p className="font-sans text-blue-100/90 text-sm leading-relaxed mb-6 flex-grow font-light">
        {styleData.description}
      </p>
      <button
        onClick={() => onDownload(styleData)}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-400 hover:to-purple-400 border border-white/30 text-white font-medium shadow-lg backdrop-blur-md transition-all"
      >
        <span className="text-sm">Download {styleData.name}.JSON</span>
        <Download size={16} />
      </button>
    </div>
  </div>
);

// 3. Dark Mode + Neon
export const NeonDarkCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-[#0a0a0f] border border-cyan-900/50 p-6 rounded-lg relative overflow-hidden group hover:border-cyan-400/50 transition-colors duration-300">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30 transition-all duration-500"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-mono text-cyan-50 text-xl font-bold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
          {styleData.name}
        </h3>
        <Cpu className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" size={24} />
      </div>
      
      <div className="flex-grow mb-6">
        <p className="font-mono text-xs text-cyan-200/70 border-l-2 border-cyan-800 pl-3 py-1">
           System.Style.Description: <br/>
           <span className="text-gray-400 font-sans text-sm">{styleData.description}</span>
        </p>
      </div>

      <button
        onClick={() => onDownload(styleData)}
        className="w-full py-3 border border-cyan-500 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/10 hover:shadow-neon transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group-hover:text-cyan-300"
      >
        [DOWNLOAD {styleData.name}.JSON]
      </button>
    </div>
  </div>
);

// 4. Claymorphism
export const ClayCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-[#f0f4f8] p-8 rounded-[2rem] shadow-clay flex flex-col transform transition-transform duration-300 hover:scale-[1.01]">
    <div className="w-16 h-16 bg-[#eef2f6] rounded-2xl shadow-[inset_6px_6px_12px_#c8ccd4,inset_-6px_-6px_12px_#ffffff] flex items-center justify-center mb-5 text-indigo-500">
      <Box size={32} strokeWidth={2.5} />
    </div>
    
    <h3 className="font-sans font-extrabold text-2xl text-slate-700 mb-3 tracking-tight">
      {styleData.name}
    </h3>
    
    <p className="font-sans text-slate-500 mb-8 leading-relaxed flex-grow">
      {styleData.description}
    </p>
    
    <button
      onClick={() => onDownload(styleData)}
      className="w-full py-4 bg-[#f0f4f8] text-slate-600 font-bold rounded-[1.5rem] shadow-[6px_6px_12px_#c8ccd4,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#c8ccd4,inset_-6px_-6px_12px_#ffffff] hover:text-indigo-500 hover:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
    >
      <span>Download {styleData.name}.JSON</span>
      <Download size={20} strokeWidth={2.5} />
    </button>
  </div>
);

// 5. Y2K / Retro
export const Y2KCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-gradient-to-b from-gray-200 to-gray-400 p-1 border-2 border-t-white border-l-white border-b-gray-800 border-r-gray-800 flex flex-col shadow-xl">
    {/* Title Bar */}
    <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex items-center justify-between">
      <span className="text-white font-bold font-sans text-sm tracking-wide flex items-center gap-1">
        <Zap size={12} className="text-yellow-300 fill-yellow-300" />
        {styleData.name}.exe
      </span>
      <div className="flex gap-1">
        <div className="w-4 h-4 bg-gray-300 border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] font-bold">_</div>
        <div className="w-4 h-4 bg-gray-300 border border-t-white border-l-white border-b-black border-r-black flex items-center justify-center text-[10px] font-bold">X</div>
      </div>
    </div>

    {/* Content Area */}
    <div className="flex-grow bg-white m-1 border-2 border-b-white border-r-white border-t-gray-600 border-l-gray-600 p-4 flex flex-col relative overflow-hidden">
        {/* Decorative Glitch Text */}
        <div className="absolute top-10 right-[-20px] text-6xl font-heavy text-gray-100 opacity-50 rotate-[-15deg] pointer-events-none">
          Y2K
        </div>

        <h3 className="font-heavy text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#00d4ff] drop-shadow-sm">
          RETRO_FUTR
        </h3>

        <p className="font-retro text-lg leading-tight text-gray-700 mb-6 bg-yellow-100 p-2 border border-black border-dashed flex-grow">
          {styleData.description}
        </p>

        <button 
          onClick={() => onDownload(styleData)}
          className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black px-4 py-2 font-sans text-sm active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:bg-gray-400 flex items-center justify-center gap-2 hover:bg-[#dcdcdc]"
        >
          <span className="text-black font-bold">Download {styleData.name}.JSON</span>
          <img src="https://win98icons.alexmeub.com/icons/png/floppy_drive_3_5-0.png" alt="save" className="w-5 h-5" />
        </button>
    </div>
  </div>
);

// 6. Bento Grid
export const BentoCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-gray-50 p-4 rounded-[2rem] flex flex-col gap-4 border border-gray-200">
    <div className="grid grid-cols-2 gap-3 flex-grow">
      {/* Tile 1: Title */}
      <div className="col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
         <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
            <Layout size={18} />
         </div>
         <h3 className="font-sans font-bold text-xl text-gray-900 leading-tight">
          {styleData.name}
         </h3>
      </div>
      
      {/* Tile 2: Visual */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 text-white flex items-end shadow-sm">
        <span className="text-xs font-medium opacity-80">Modular</span>
      </div>

      {/* Tile 3: Stat */}
      <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-sm border border-gray-100">
         <span className="text-2xl font-bold text-gray-800">3x3</span>
         <span className="text-[10px] text-gray-400 uppercase tracking-wider">Grid System</span>
      </div>
      
      {/* Tile 4: Description (Spanning) */}
      <div className="col-span-2 bg-gray-100 rounded-2xl p-5 flex items-center">
        <p className="text-xs text-gray-600 font-medium leading-relaxed">
          {styleData.description}
        </p>
      </div>
    </div>

    <button
      onClick={() => onDownload(styleData)}
      className="w-full py-3 bg-black text-white rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gray-200"
    >
      Download {styleData.name}.JSON
      <ArrowRight size={14} />
    </button>
  </div>
);

// 7. Minimal 2.0
export const MinimalCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-white border border-gray-100 rounded-xl p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col group">
    <div className="mb-6">
      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors duration-300">
        <Grid size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
      </div>
      <h3 className="font-sans font-semibold text-lg text-gray-900 mb-2">
        {styleData.name}
      </h3>
      <p className="font-sans text-sm text-gray-500 leading-relaxed">
        {styleData.description}
      </p>
    </div>
    
    <div className="mt-auto pt-6 border-t border-gray-50">
      <button 
        onClick={() => onDownload(styleData)}
        className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group/btn"
      >
        <span>Download {styleData.name}.JSON</span>
        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

// 8. Maximalism
export const MaximalistCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full relative p-2 group">
    {/* Background Shapes */}
    <div className="absolute inset-0 bg-[#FF6B9D] rounded-sm transform rotate-1 border-4 border-black z-0"></div>
    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#9AFF00] rounded-full border-2 border-black z-10"></div>
    <div className="absolute bottom-10 -left-4 w-16 h-8 bg-[#00D4FF] -rotate-12 border-2 border-black z-10"></div>
    
    {/* Main Card Content */}
    <div className="relative z-20 bg-white border-4 border-black h-full p-5 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform duration-200">
       <div className="bg-black text-white px-3 py-1 text-xs font-bold uppercase inline-block self-start transform -rotate-2 mb-4">
         More is More
       </div>
       
       <h3 className="font-heavy text-4xl leading-[0.9] mb-4 text-black uppercase break-words">
         {styleData.name.split('/')[0]}
       </h3>
       
       <div className="flex-grow relative">
         <p className="font-sans font-bold text-sm bg-yellow-300 p-2 border-2 border-black shadow-[4px_4px_0px_black] transform rotate-1 inline-block">
            {styleData.description}
         </p>
       </div>
       
       <button
         onClick={() => onDownload(styleData)}
         className="mt-6 bg-[#43e97b] border-4 border-black font-black uppercase text-black py-4 px-2 shadow-[4px_4px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
       >
         <span className="transform -rotate-1">Download {styleData.name}.JSON</span>
       </button>
    </div>
  </div>
);

// 9. Technical Paper Glass (Light)
export const TechnicalPaperCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm group">
    {/* Grid Background using standard CSS linear-gradient due to complex arbitrary value syntax in Tailwind */ }
    <div className="absolute inset-0 z-0 opacity-100" 
         style={{
             backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
             backgroundSize: '24px 24px'
         }}>
    </div>
    
    {/* Gradient Accent Blob */}
    <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-gradient-to-br from-sky-400/20 to-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>

    <div className="relative z-10 h-full flex flex-col p-6">
      {/* Header Panel */}
      <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">ID: {styleData.id}</span>
        </div>
        <h3 className="font-sans font-bold text-xl text-slate-800 tracking-tight">
          {styleData.name}
        </h3>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="font-sans text-slate-600 leading-relaxed text-sm bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50">
          {styleData.description}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => onDownload(styleData)}
        className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-sky-400/10 to-purple-500/10 border border-slate-200 hover:border-sky-300 text-slate-700 font-semibold text-sm transition-all hover:shadow-md flex items-center justify-center gap-2 group-hover:bg-white/80"
      >
        <span>Download {styleData.name}.JSON</span>
        <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center">
            <Download size={10} />
        </div>
      </button>
    </div>
  </div>
);

// 10. Gemini Technical Artifacts
export const GeminiTechnicalCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-[#09090b] text-[#fafafa] relative overflow-hidden rounded-xl border border-[#27272a] hover:border-[#3f3f46] transition-colors duration-300 flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
    
    {/* Dot Grid Background */}
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
         style={{
             backgroundImage: 'radial-gradient(circle, #71717a 1px, transparent 1px)',
             backgroundSize: '24px 24px'
         }}>
    </div>

    {/* Technical Corner Brackets */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#3f3f46] z-20"></div>
    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#3f3f46] z-20"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#3f3f46] z-20"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#3f3f46] z-20"></div>

    <div className="relative z-10 flex flex-col h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-[#a1a1aa]" />
          <span className="font-mono text-xs text-[#52525b] uppercase tracking-wider">v1.0.0</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#27272a]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#27272a]"></div>
        </div>
      </div>

      {/* Title Area */}
      <div className="mb-4">
        <h3 className="font-sans font-medium text-lg text-[#fafafa] tracking-tight mb-1">
          {styleData.name}
        </h3>
        <div className="h-[1px] w-12 bg-blue-500/50"></div>
      </div>

      {/* Description Panel */}
      <div className="flex-grow">
        <div className="bg-[#18181b]/50 border border-[#27272a] rounded-lg p-4 backdrop-blur-sm">
           <p className="font-sans text-sm text-[#a1a1aa] leading-relaxed">
             {styleData.description}
           </p>
           <div className="mt-3 flex gap-2">
             <span className="px-1.5 py-0.5 bg-[#27272a] rounded text-[10px] font-mono text-[#71717a]">ZINC-950</span>
             <span className="px-1.5 py-0.5 bg-[#27272a] rounded text-[10px] font-mono text-[#71717a]">INTER</span>
           </div>
        </div>
      </div>

      {/* Action */}
      <div className="mt-6 pt-6 border-t border-[#27272a] border-dashed">
        <button
          onClick={() => onDownload(styleData)}
          className="w-full py-2.5 bg-[#fafafa] text-black font-sans font-medium text-sm rounded hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2"
        >
          <span>Download JSON</span>
          <Code2 size={14} />
        </button>
      </div>
    </div>
  </div>
);

// 11. 8-Bit / Retro Console
export const RetroGamingCard: React.FC<CardProps> = ({ styleData, onDownload }) => (
  <div className="h-full bg-[#212529] p-1 shadow-[4px_4px_0_0_#000000] flex flex-col group relative overflow-hidden">
    {/* CRT Overlay Effect */}
    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-30"></div>
    <div className="absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(circle,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.4)_100%)]"></div>

    {/* Main Container Board */}
    <div className="flex-grow border-4 border-white p-4 flex flex-col bg-[#2a2d3e] relative z-20">
      
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-6 border-b-4 border-white pb-2 bg-[#212529] p-2">
        <div className="flex items-center gap-2">
           <Gamepad2 size={24} className="text-[#4cb050]" />
           <span className="font-pixel text-[10px] text-white uppercase leading-none mt-1">LVL.11</span>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-[#e7040f] shadow-[2px_2px_0_black]"></div>
          <div className="w-3 h-3 bg-[#ffcc00] shadow-[2px_2px_0_black]"></div>
        </div>
      </div>

      {/* Content Text */}
      <h3 className="font-pixel text-sm text-[#4cb050] mb-4 leading-relaxed uppercase tracking-widest drop-shadow-[2px_2px_0_black]">
        {styleData.name}
      </h3>
      
      <div className="flex-grow bg-[#212529] border-2 border-[#9ca3af] p-3 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]">
        <p className="font-retro text-xl text-white leading-tight">
          {styleData.description}
          <span className="inline-block w-2 h-4 bg-[#4cb050] ml-1 animate-pulse"></span>
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onDownload(styleData)}
        className="mt-6 w-full py-4 bg-[#e6e6e6] border-b-4 border-r-4 border-b-gray-600 border-r-gray-600 border-t-4 border-l-4 border-t-white border-l-white active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white active:translate-y-1 active:shadow-none transition-none flex items-center justify-center gap-3 hover:bg-white"
      >
        <span className="font-pixel text-[10px] text-black uppercase">Start Download</span>
      </button>

    </div>
  </div>
);
