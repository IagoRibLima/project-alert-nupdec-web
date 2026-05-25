import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  MapPin, 
  Bell, 
  User, 
  Menu, 
  X,
  Cpu,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Alertas baseados no projeto
  const alerts = [
    { id: 1, type: 'warning', title: 'Aviso: Previsão de Chuva Forte - Centro', time: '27 minutos atrás' },
    { id: 2, type: 'warning', title: 'Aviso: Previsão de Chuva Forte - Centro', time: '27 minutos atrás' },
    { id: 3, type: 'warning', title: 'Aviso: Previsão de Chuva Forte - Centro', time: '27 minutos atrás' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-16">
      
      {/* HEADER INTEGRADO */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo e Nome do Projeto com a sua imagem real */}
          <div className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-9 h-9 transform group-hover:scale-105 transition-all">
              <img 
                src="/logo-nupdec.png" 
                alt="Logo Acelera Alert Nupdec" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-base font-black text-slate-900 tracking-tight leading-none mb-1">Acelera Alert Nupdec</h1>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Sistema Municipal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#overview" className="text-orange-600 border-b-2 border-orange-500 pb-1.5 transition-all">Visão Geral</a>
            <a href="#relatorios" className="hover:text-slate-900 transition-colors pb-1.5">Relatórios</a>
            <a href="#mapa" className="hover:text-slate-900 transition-colors pb-1.5">Mapa</a>
          </nav>

          {/* Perfil Operador */}
          <div className="hidden md:flex items-center gap-3 bg-slate-100 border border-slate-200/60 py-2 px-4 rounded-xl shadow-inner">
            <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 font-bold border border-orange-500/20">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-slate-700">Defesa Civil - Cruzeiro SP</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-600 bg-slate-100 border border-slate-200 rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-inner">
            <a href="#overview" className="block text-orange-600 font-bold py-1">Visão Geral</a>
            <a href="#relatorios" className="block text-slate-600 font-medium py-1">Relatórios</a>
            <a href="#mapa" className="block text-slate-600 font-medium py-1">Mapa</a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        
        {/* HERO HERO MAIS VIVO */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-orange-500/[0.03] to-transparent pointer-events-none" />
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 border border-orange-200/60 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              Painel Operacional Ativo
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Monitoramento Comunitário Ativo
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
              Plataforma dedicada à coleta de dados e prevenção activa junto às comunidades atingidas, unindo planejamento e informação rápida em tempo real.
            </p>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1 group">
            Gerenciar Alertas <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </section>

        {/* CARDS INDICADORES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Áreas de Risco Monitoradas</span>
              <p className="text-3xl font-black text-slate-900 tracking-tight">257</p>
            </div>
            <div className="p-3 bg-slate-50 text-slate-500 rounded-xl border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-100 transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2 - Troca pelo seu logo real conforme circulado */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Voluntários Ativos</span>
              <p className="text-3xl font-black text-slate-900 tracking-tight">23</p>
            </div>
            <div className="w-12 h-12 transform group-hover:scale-105 transition-all p-1">
              <img 
                src="/logo-nupdec.png" 
                alt="Ícone Voluntários Nupdec" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Alertas Emitidos</span>
              <p className="text-3xl font-black text-slate-900 tracking-tight">0</p>
            </div>
            <div className="p-3 bg-slate-50 text-slate-500 rounded-xl border border-slate-100 group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-100 transition-colors">
              <Bell className="w-5 h-5" />
            </div>
          </div>

        </section>

        {/* ESP32 E ALERTAS LADO A LADO */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* TELEMETRIA ESP32 */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[360px] hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-sm font-bold text-slate-900">Telemetria ESP32</h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
                <Cpu className="w-3.5 h-3.5 text-orange-500" />
                <span>Hardware Ativo</span>
              </div>
            </div>

            {/* BOX CENTRALIZADO DO IAGO */}
            <div className="flex-1 flex items-center justify-center my-6 bg-slate-50/50 border border-slate-200/80 rounded-xl min-h-[180px] shadow-inner relative overflow-hidden px-4">
              <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-wider text-slate-700 bg-white border border-slate-200 shadow-sm px-6 sm:px-10 py-3 rounded-xl z-10 whitespace-nowrap">
                Aqui Iago
              </span>
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
              <span>Status:</span>
              <span className="text-slate-500">Aguardando integração com os sensores analógicos de campo.</span>
            </div>
          </div>

          {/* ALERTAS RECENTES */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[360px] hover:border-slate-300 transition-all">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Alertas Recentes</h3>
              <span className="text-[10px] bg-orange-50 text-orange-600 border border-orange-100 font-bold px-2 py-0.5 rounded-md">Log</span>
            </div>

            <div className="space-y-3.5 flex-1 my-4 overflow-y-auto max-h-[210px] pr-1">
              {alerts.map((alert) => (
                <div key={alert.id} className="border-b border-slate-100 pb-3.5 last:border-0 last:pb-0 group cursor-pointer">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1" />
                    {alert.title}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400 mt-1.5 block pl-3.5">{alert.time}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md">
              Ver Histórico Completo
            </button>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 pt-6 text-[11px] text-slate-400 font-bold flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-600">Acelera Alert Nupdec</span>
          <span>•</span>
          <span className="font-medium text-slate-400">Extensão Acadêmica</span>
        </div>
        <p className="font-medium">© {new Date().getFullYear()} Cruzeiro SP</p>
      </footer>

    </div>
  );
}