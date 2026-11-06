import {
  Users, Monitor, FolderKanban,
  ShoppingBasket, Radar, Database, TrendingUp, BarChart3,
  ShieldCheck, Layers3, Clock3, CircleHelp, FileWarning
} from 'lucide-react';

export const modules = [
  {
    name: 'FinCRM', tag: 'Gestión de clientes y cobranza', key: 'crm', icon: FolderKanban,
    features: ['Administración de clientes', 'Registro de obligaciones y deudas', 'Seguimiento de pagos y saldos', 'Control de cartera', 'Gestión de usuarios y empresas', 'Reglas de contacto para procesos de cobranza']
  },
  {
    name: 'FinPOS', tag: 'Ventas e inventario', key: 'pos', icon: ShoppingBasket,
    features: ['Registro de productos', 'Control de existencias', 'Registro de ventas', 'Diferentes medios de pago', 'Historial de transacciones', 'Control y cierre de caja']
  },
  {
    name: 'FinRadar', tag: 'Inteligencia para tu negocio', key: 'radar', icon: Radar,
    features: ['Indicadores financieros', 'Análisis de rentabilidad', 'Identificación de alertas', 'Recomendaciones con IA', 'Simulación de decisiones empresariales', 'Consultas sobre información del negocio']
  }
];

export const plans = [
  { id: 'esencial', name: 'Esencial', price: 39900, tag: 'Entrada', desc: 'Para pequeños negocios que necesitan organizar clientes, controlar deudas y registrar pagos.', features: ['FinCRM básico', 'Hasta 2 usuarios', 'Control de cartera', 'Soporte por correo'] },
  { id: 'negocio', name: 'Negocio', price: 79900, tag: 'Recomendado', featured: true, desc: 'Para empresas que necesitan control de inventarios, registro de ventas y gestión de cartera.', features: ['FinCRM + FinPOS', 'Hasta 5 usuarios', 'Inventario y caja', 'Soporte prioritario'] },
  { id: 'inteligente', name: 'Inteligente', price: 129900, tag: 'Avanzado', desc: 'Para empresas que buscan indicadores, análisis de información e inteligencia artificial.', features: ['Los 3 módulos', 'Hasta 10 usuarios', 'IA y alertas', 'Soporte dedicado'] }
];

export const problems = [
  { title: 'Pérdida de información', text: 'Datos repartidos entre cuadernos, hojas de cálculo y aplicaciones que no se hablan entre sí.', icon: FileWarning },
  { title: 'Dificultad para controlar pagos', text: 'Cuentas por cobrar sin seguimiento, fechas vencidas y saldos que se pierden de vista.', icon: Clock3 },
  { title: 'Decisiones sin datos', text: 'Decisiones tomadas por intuición, sin indicadores claros de rentabilidad ni de cartera.', icon: CircleHelp }
];

export const benefits = [
  { title: 'Una plataforma', text: 'Diferentes procesos del negocio en un solo lugar.', icon: Layers3 },
  { title: 'Información centralizada', text: 'Deja de repartir datos entre cuadernos y hojas de cálculo.', icon: Database },
  { title: 'Mejor seguimiento de cartera', text: 'Control claro de cuentas por cobrar y pagos.', icon: TrendingUp },
  { title: 'Ventas e inventarios ordenados', text: 'Registro de ventas, stock y cierre de caja integrados.', icon: Monitor },
  { title: 'Indicadores para decidir', text: 'Métricas y alertas que facilitan la toma de decisiones.', icon: BarChart3 },
  { title: 'Hecho para PYMES colombianas', text: 'Planes adaptables al crecimiento de tu empresa.', icon: Users },
  { title: 'Buenas prácticas en cobranza', text: 'Reglas de contacto y trazabilidad diseñadas para apoyar una gestión responsable.', icon: ShieldCheck, wide: true }
];

const rows = [
  { cliente: 'Distribuidora El Roble', saldo: '$2.4M', estado: 'Pendiente', pago: '12 oct' },
  { cliente: 'Panadería La 80', saldo: '$890K', estado: 'Pagado', pago: '11 oct' },
  { cliente: 'Ferretería Central', saldo: '$1.7M', estado: 'Vencido', pago: '03 oct' },
];

// Todos los indicadores y clientes de este panel son datos ficticios de demostración.
export const dashboardData = {
  resumen: {
    title: 'Cartera pendiente · últimos 30 días',
    kpis: [
      { label: 'Cuentas por cobrar', value: 12.4, decimals: 1, prefix: '$', suffix: 'M', badge: '+8.2%' },
      { label: 'Clientes activos', value: 342, badge: '+12' },
      { label: 'Ventas del día', value: 840, prefix: '$', suffix: 'K', badge: '+3.1%' },
      { label: 'Cartera vencida', value: 1.2, decimals: 1, prefix: '$', suffix: 'M', badge: 'Pendiente', pending: true }
    ], rows
  },
  clientes: {
    title: 'Actividad de clientes · últimos 30 días',
    kpis: [
      { label: 'Clientes registrados', value: 342, badge: '+12' },
      { label: 'Clientes con pagos', value: 218, badge: '+9' },
      { label: 'Clientes pendientes', value: 86, badge: 'Pendiente', pending: true },
      { label: 'Clientes nuevos', value: 12, badge: '+12' }
    ], rows
  },
  cartera: {
    title: 'Evolución de cartera · últimos 30 días',
    kpis: [
      { label: 'Cartera total', value: 14.6, decimals: 1, prefix: '$', suffix: 'M', badge: '+8.2%' },
      { label: 'Recaudo del mes', value: 8.9, decimals: 1, prefix: '$', suffix: 'M', badge: '+15%' },
      { label: 'Cartera por vencer', value: 3.4, decimals: 1, prefix: '$', suffix: 'M', badge: 'Pendiente', pending: true },
      { label: 'Cartera vencida', value: 1.2, decimals: 1, prefix: '$', suffix: 'M', badge: 'Pendiente', pending: true }
    ], rows
  },
  ventas: {
    title: 'Tendencia de ventas · últimos 30 días',
    kpis: [
      { label: 'Ventas del día', value: 840, prefix: '$', suffix: 'K', badge: '+3.1%' },
      { label: 'Ventas del mes', value: 9.4, decimals: 1, prefix: '$', suffix: 'M', badge: '+11%' },
      { label: 'Transacciones', value: 126, badge: '+7' },
      { label: 'Ticket promedio', value: 74, prefix: '$', suffix: 'K', badge: '+2.4%' }
    ], rows
  }
};

export const money = (value) => '$' + new Intl.NumberFormat('es-CO').format(value);
