import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { ArrowRight, ChartNoAxesCombined, CreditCard, Monitor, Users, Mail, Copy } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import Logo from './components/Logo.jsx';
import DashboardPreview, { MockRows } from './components/DashboardPreview.jsx';
import { modules, plans, problems, benefits, money, dashboardData } from './data/content.js';

const links = [
  ['#que-es', 'Qué es'],
  ['#productos', 'Productos'],
  ['#planes', 'Planes'],
  ['#justificacion-precios', 'Precios: por qué'],
  ['#por-que', 'Ventajas']
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${compact ? 'is-compact' : ''}`} id="nav">
      <div className="container nav__inner">
        <a href="#inicio" aria-label="FinCRM — Inicio" onClick={() => setOpen(false)}><Logo /></a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} id="navLinks" aria-label="Principal">
          {links.map(([href, text]) => <a href={href} key={href} onClick={() => setOpen(false)}>{text}</a>)}
          <a href="#contacto" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>Conocer FinCRM</a>
        </nav>
        <button type="button" className="nav__toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="navLinks" onClick={() => setOpen(value => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-bg" aria-hidden="true" />
      <svg className="hero__data-line" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <motion.path d="M -100 760 C 300 680, 700 420, 1560 200" stroke="#FF7A1A" strokeWidth="2" fill="none" strokeLinecap="round"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.85 }} transition={{ duration: reduced ? 0 : 2.2, ease: 'easeInOut' }} />
      </svg>
      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal as="p" className="eyebrow">SAAS FINANCIERO · HECHO EN COLOMBIA</Reveal>
          <Reveal as="h1" className="hero__h1" delay={0.09}>FinCRM — Tu negocio bajo control, tus decisiones con inteligencia.</Reveal>
          <Reveal as="p" className="hero__sub" delay={0.17}>
            Centraliza tus clientes, administra tus cuentas por cobrar, registra ventas y transforma los datos de tu empresa en decisiones más inteligentes.
          </Reveal>
          <Reveal className="hero__actions" delay={0.25}>
            <a href="#planes" className="btn btn-primary">Conoce nuestros planes <ArrowRight size={18} /></a>
            <a href="#productos" className="btn btn-secondary">Explorar FinCRM</a>
          </Reveal>
          <Reveal className="hero__trust" delay={0.3} aria-label="Características del proyecto">
            <span>EN DESARROLLO · MVP</span><span className="sep">·</span>
            <span>TRES MÓDULOS</span><span className="sep">·</span><span>PLANES EN COP</span>
          </Reveal>
        </div>
        <Reveal className="hero__dashboard" delay={0.25}><DashboardPreview /></Reveal>
      </div>
    </section>
  );
}

const integrationNodes = [
  { text: 'Clientes', className: 'integration__node--tl', icon: Users },
  { text: 'Cobranza', className: 'integration__node--tr', icon: CreditCard },
  { text: 'Ventas', className: 'integration__node--bl', icon: Monitor },
  { text: 'Analítica', className: 'integration__node--br', icon: ChartNoAxesCombined }
];
function About() {
  return (
    <section className="section section--light" id="que-es"><div className="container what-grid">
      <Reveal>
        <p className="eyebrow">QUÉ ES</p><h2>Una sola plataforma para toda tu operación.</h2>
        <p>FinCRM es una solución tecnológica desarrollada para ayudar a las pequeñas y medianas empresas colombianas a organizar su información comercial y financiera desde una sola plataforma.</p>
        <p>Integra gestión de clientes, control de deudas, registro de pagos, inventario, ventas y análisis de información para facilitar la administración y el crecimiento empresarial.</p>
        <div className="chips">{['Clientes', 'Cobranza', 'Inventario', 'Analítica'].map(x => <span key={x} className="chip">{x}</span>)}</div>
      </Reveal>
      <Reveal className="integration" delay={0.12}>
        <svg className="integration__lines" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
          <line x1="200" y1="200" x2="70" y2="80" /><line x1="200" y1="200" x2="330" y2="80" />
          <line x1="200" y1="200" x2="70" y2="320" /><line x1="200" y1="200" x2="330" y2="320" />
        </svg>
        <div className="integration__center">FinCRM</div>
        {integrationNodes.map(({ text, className, icon: Icon }, i) => (
          <motion.div key={text} className={`integration__node ${className}`}
            initial={{ opacity: 0, scale: 0.86 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.11, duration: 0.3 }}>
            <Icon size={16} />{text}
          </motion.div>
        ))}
      </Reveal>
    </div></section>
  );
}

function Problems() {
  return (
    <section className="section section--dark" id="problema"><div className="section--dark__grid-bg" /><div className="container problem-split">
      <Reveal>
        <p className="eyebrow">EL PROBLEMA</p>
        <h2 className="problem-title">Cuadernos, hojas de cálculo y apps sueltas no escalan.</h2>
        <div className="problem-list">{problems.map(({ title, text, icon: Icon }) => (
          <article className="problem-card" key={title}><Icon size={22} aria-hidden="true" /><div><h4>{title}</h4><p>{text}</p></div></article>
        ))}</div>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="eyebrow eyebrow--green">CON FINCRM</p>
        <h3 className="solution-title">Todo en un solo lugar.</h3>
        <div className="solution-panel">
          <div className="kpi-grid">
            <div className="kpi-card"><span className="kpi-label">Cartera total</span><div className="kpi-value-row"><span className="kpi-value">$14.6M</span><span className="kpi-badge kpi-badge--up">+8.2%</span></div></div>
            <div className="kpi-card"><span className="kpi-label">Cobrado mes</span><div className="kpi-value-row"><span className="kpi-value">$8.9M</span><span className="kpi-badge kpi-badge--up">+15%</span></div></div>
          </div>
          <MockRows rows={dashboardData.resumen.rows} />
          <p className="sample-note">Cifras y clientes ficticios para ilustrar el producto.</p>
        </div>
      </Reveal>
    </div></section>
  );
}

function Products() {
  return (
    <section className="section section--alt" id="productos"><div className="container">
      <Reveal className="section__head"><p className="eyebrow">MÓDULOS</p><h2>Tres módulos, una sola plataforma.</h2><p>Conecta la cobranza, el punto de venta y la analítica. Mismos datos, distintas preguntas.</p></Reveal>
      <div className="products-grid">
        {modules.map((mod, i) => <Reveal as="article" delay={0.08 * (i+1)} className={`module-card module-card--${mod.key}`} key={mod.key}>
          <div className="module-icon"><mod.icon aria-hidden="true" /></div>
          <h3>{mod.name}{mod.key === 'radar' && <span className="module-badge">IA</span>}</h3>
          <p className="module-tag">{mod.tag}</p>
          <ul className="module-list">{mod.features.map(item => <li key={item}>{item}</li>)}</ul>
          <a href="#planes" className="module-link">Explorar módulo <ArrowRight size={16} /></a>
        </Reveal>)}
      </div>
      <p className="availability-note">FinCRM está en desarrollo. FinPOS y FinRadar forman parte de la hoja de ruta del producto.</p>
    </div></section>
  );
}

function Pricing({ onChoosePlan }) {
  return (
    <section className="section section--light" id="planes"><div className="container">
      <Reveal className="section__head"><p className="eyebrow">PLANES</p><h2>Planes que crecen con tu negocio.</h2><p>Precios de referencia en pesos colombianos para un futuro lanzamiento.</p></Reveal>
      <div className="pricing-grid">
        {plans.map((plan, i) => <Reveal as="article" key={plan.id} delay={(i + 1) * 0.08} className={`price-card ${plan.featured ? 'price-card--featured' : ''}`}>
          {plan.featured && <span className="price-badge">Recomendado</span>}
          <h3>{plan.name}</h3>
          <div className="price-amount"><span className="num">{money(plan.price)}</span><span className="suffix">COP/mes</span></div>
          <ul className="price-list">{plan.features.map(item => <li key={item}>{item}</li>)}</ul>
          <button type="button" className={`btn btn--full ${plan.featured ? 'btn-primary' : 'btn-outline'}`} onClick={() => onChoosePlan(plan.id)}>Consultar plan</button>
        </Reveal>)}
      </div>
      <p className="pricing-note">* Propuesta comercial para la actividad de emprendimiento. No constituye una oferta de venta activa. Impuestos y condiciones por definir.</p>
    </div></section>
  );
}

function PriceRationale() {
  return (
    <section className="section pricing-why" id="justificacion-precios"><div className="container">
      <Reveal className="section__head"><p className="eyebrow">NUESTRO CRITERIO</p><h2>¿Por qué estos precios?</h2><p>Cómo definimos los valores propuestos para cada plan.</p></Reveal>
      <Reveal className="pricing-why__intro"><p>Para definirlos, consideramos el público objetivo, las funcionalidades, los costos estimados de funcionamiento y los rangos de precios de soluciones similares en Colombia.</p><p>Buscamos que las PYMES accedan a herramientas digitales sin una inversión inicial elevada; por eso proponemos una suscripción mensual escalonada.</p></Reveal>
      <div className="pricing-why__grid">
        {plans.map((plan, i) => <Reveal as="article" key={plan.id} delay={(i + 1) * 0.08} className={`pricing-why__card ${plan.featured ? 'pricing-why__card--featured' : ''}`}>
          <span className="pricing-why__plan">{plan.tag}</span><h3>{plan.name}</h3><div className="pricing-why__price">{money(plan.price)} <span>COP/mes</span></div>
          <p className="pricing-why__desc">{plan.desc}</p>
        </Reveal>)}
      </div>
      <Reveal className="pricing-why__rationale">
        <div><h4>Referencia de mercado</h4><p>Contrastamos la propuesta con software empresarial colombiano como Alegra. El precio por sí solo no hace equivalentes los productos: también se deben comparar funcionalidades y límites.</p></div>
        <div><h4>Modelo de suscripción mensual</h4><p>La suscripción ayuda a distribuir el gasto del cliente y permite proyectar ingresos recurrentes para infraestructura, mantenimiento y mejoras. Los costos y la disposición a pagar se deben validar antes del lanzamiento.</p></div>
      </Reveal>
    </div></section>
  );
}

function WhyFinCRM() {
  return (
    <section className="section section--dark" id="por-que"><div className="section--dark__grid-bg" /><div className="container">
      <Reveal className="why-header"><div><p className="eyebrow">VENTAJAS</p><h2>Diseñado para PYMES colombianas.</h2></div><span className="ledger ledger--light">SOLUCIÓN EN DESARROLLO</span></Reveal>
      <div className="why-grid">{benefits.map(({ title, text, icon: Icon, wide }, i) => <Reveal as="article" key={title} delay={Math.min(i % 4 * 0.08, 0.24)} className={`why-card ${wide ? 'why-card--wide' : ''}`}>
        <Icon className="why-icon" aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div>
      </Reveal>)}</div>
    </div></section>
  );
}

function Contact({ selectedPlan, onPlanChange }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim();
  const planName = plans.find(p => p.id === selectedPlan)?.name || 'FinCRM';

  function buildMessage() {
    return `Hola, me gustaría conocer más sobre FinCRM.\n\nNombre: ${name}\nCorreo: ${email}\nPlan de interés: ${planName}\nMensaje: ${message || 'Deseo obtener más información.'}`;
  }

  async function handleContact(e) {
    e.preventDefault();
    setStatus('');
    if (contactEmail) {
      const subject = encodeURIComponent(`Consulta FinCRM: plan ${planName}`);
      const body = encodeURIComponent(buildMessage());
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setStatus('Se abrió tu aplicación de correo. Revisa el mensaje antes de enviarlo.');
      return;
    }
    try {
      await navigator.clipboard.writeText(buildMessage());
      setStatus('Mensaje copiado. Para habilitar el envío por correo, configura VITE_CONTACT_EMAIL en el archivo .env.');
    } catch {
      setStatus('El correo de contacto aún no está configurado. Agrega VITE_CONTACT_EMAIL en el archivo .env.');
    }
  }

  return (
    <section className="cta-final" id="contacto"><div className="cta-final__grid-bg" />
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">CONTÁCTANOS</p>
          <h2>Haz que la información de tu negocio trabaje a tu favor.</h2>
          <p>Conoce los planes propuestos para FinCRM y cuéntanos qué necesitaría tu empresa.</p>
          <span className="ledger ledger--light">LANDING DE PRESENTACIÓN · ETAPA MVP</span>
        </Reveal>
        <Reveal className="contact-card" delay={0.13}>
          <form onSubmit={handleContact}>
            <h3>Solicitar información</h3>
            <label htmlFor="contact-name">Tu nombre</label>
            <input id="contact-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre y apellido" required maxLength={90} />
            <label htmlFor="contact-email">Correo electrónico</label>
            <input id="contact-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="correo@ejemplo.com" required maxLength={140} />
            <label htmlFor="contact-plan">Plan de interés</label>
            <select id="contact-plan" value={selectedPlan} onChange={e => onPlanChange(e.target.value)}>
              {plans.map(p => <option value={p.id} key={p.id}>{p.name} — {money(p.price)}/mes</option>)}
            </select>
            <label htmlFor="contact-message">Mensaje (opcional)</label>
            <textarea id="contact-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="¿Qué te gustaría conocer?" rows={3} maxLength={800} />
            <button className="btn btn-primary btn--full" type="submit">{contactEmail ? <Mail size={18} /> : <Copy size={18} />} {contactEmail ? 'Preparar correo' : 'Copiar consulta'}</button>
            <p className="contact-footnote">No se registra información en una base de datos; este formulario prepara un correo o copia tu consulta.</p>
            {status && <p className="contact-status" role="status">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer"><div className="container">
      <div className="footer__grid">
        <div className="footer__brand"><a href="#inicio" aria-label="FinCRM — Inicio"><Logo /></a><p>FinCRM — Tecnología para gestionar, analizar y crecer.</p></div>
        <div className="footer__col"><h4>Producto</h4><a href="#productos">FinCRM</a><a href="#productos">FinPOS</a><a href="#productos">FinRadar</a></div>
        <div className="footer__col"><h4>Soluciones</h4><a href="#problema">Cobranza</a><a href="#productos">Punto de venta</a><a href="#productos">Inteligencia de negocios</a></div>
        <div className="footer__col"><h4>Explorar</h4><a href="#planes">Planes</a><a href="#justificacion-precios">Justificación de precios</a><a href="#contacto">Contacto</a></div>
      </div>
      <div className="footer__bottom"><p>© {new Date().getFullYear()} FinCRM. Hecho en Colombia.</p><div className="footer__bottom-links"><a href="#inicio">Inicio</a><a href="#contacto">Contacto</a><span className="ledger ledger--light">v1.0 · Proyecto MVP</span></div></div>
    </div></footer>
  );
}

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState('negocio');
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });
  function selectPlan(id) {
    setSelectedPlan(id);
    document.getElementById('contacto')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Navigation />
      <main>
        <Hero /><About /><Problems /><Products />
        <Pricing onChoosePlan={selectPlan} /><PriceRationale /><WhyFinCRM />
        <Contact selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
      </main>
      <Footer />
    </>
  );
}
