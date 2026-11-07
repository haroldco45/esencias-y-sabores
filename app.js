/* Esencias y Sabores — app de pedidos · Vibras Positivas HM
   Para cambiar nombres, precios o fotos, edita solo la lista PRODUCTOS. */
const WA = '573147115798';
const LICENCIA_HASTA = '2027-05-07'; // 6 meses desde el 7 nov 2026

const PRODUCTOS = [
  // Sales sazonadoras — $13.000
  { id:'tocineta',   cat:'sales',   precio:13000, img:'tocineta.jpg',
    es:['Sal de tocineta','Con trocitos de tocineta. Ideal para arroz, huevos, papas y frijoles.'],
    en:['Bacon salt','With bacon bits. Great on rice, eggs, potatoes and beans.'] },
  { id:'ahumada',    cat:'sales',   precio:13000, img:'ahumada.jpg',
    es:['Sal ahumada','Sabor a leña para carnes, pollo y verduras asadas.'],
    en:['Smoked salt','Wood-fire flavor for meat, chicken and roasted veggies.'] },
  { id:'picante',    cat:'sales',   precio:13000, img:'picante.jpg',
    es:['Sal picante','Con ají para darle candela a frutas, mazorca y carnes.'],
    en:['Spicy salt','With chili for fruit, corn on the cob and meat.'] },
  { id:'parrillera', cat:'sales',   precio:13000, img:'parrillera.jpg',
    es:['Sal parrillera','Mezcla de hierbas para la parrilla y el asado del domingo.'],
    en:['Grill salt','Herb blend for the grill and Sunday barbecue.'] },
  { id:'casa',       cat:'sales',   precio:13000, img:'casa.jpg',
    es:['Sal de la casa','La sazón de mamá para todos los días, en cualquier comida.'],
    en:['House salt','Mom\'s everyday seasoning for any meal.'] },

  // Salsas, ajíes y esencias — $15.000
  { id:'rosada',      cat:'salsas', precio:15000, img:'rosada.jpg',
    es:['Salsa rosada','Cremosa, para perros, hamburguesas, papas y mariscos.'],
    en:['Pink sauce','Creamy, for hot dogs, burgers, fries and seafood.'] },
  { id:'barbecue',    cat:'salsas', precio:15000, img:'barbecue.jpg',
    es:['Salsa para carnes','Para marinar y bañar costillas, pollo y cerdo.'],
    en:['Meat sauce','To marinate and glaze ribs, chicken and pork.'] },
  { id:'guiso',       cat:'salsas', precio:15000, img:'guiso.jpg',
    es:['Guiso casero','Base de hogao lista para sudados, arroces y frijoles.'],
    en:['Homemade stew base','Ready sofrito for stews, rice and beans.'] },
  { id:'ajo-aceite',  cat:'esencias', precio:15000, img:'ajo-aceite.jpg',
    es:['Ajo en aceite','Ajo triturado conservado en aceite, listo para cocinar.'],
    en:['Garlic in oil','Crushed garlic preserved in oil, ready to cook.'] },
  { id:'chimichurri', cat:'esencias', precio:15000, img:'chimichurri.jpg',
    es:['Chimichurri','Hierbas, ajo y aceite para carnes y panes.'],
    en:['Chimichurri','Herbs, garlic and oil for meat and bread.'] },
  { id:'chimichurri-seco', cat:'esencias', precio:15000, img:'chimichurri-seco.jpg',
    es:['Hierbas para sazonar','Mezcla de hierbas finas para adobar.'],
    en:['Seasoning herbs','Fine herb blend for marinades.'] },
  { id:'aji-criollo', cat:'ajies',  precio:15000, img:'aji-criollo.jpg',
    es:['Ají criollo','El ají de la casa para empanadas, sopas y fritos.'],
    en:['Creole chili sauce','House chili for empanadas, soups and fried food.'] },
  { id:'aji-picante', cat:'ajies',  precio:15000, img:'aji-picante.jpg',
    es:['Ají picante','Con pimentón y picante de verdad.'],
    en:['Hot chili sauce','With bell pepper and real heat.'] },
  { id:'encurtido',   cat:'ajies',  precio:15000, img:'encurtido.jpg',
    es:['Encurtido','Verduras en vinagre para acompañar el almuerzo.'],
    en:['Pickled veggies','Vegetables in vinegar to go with lunch.'] },
];

const T = {
  es:{kicker:'Caucasia, Antioquia',tagline:'Hechas con el amor de mamá',
    lead:'Salsas, esencias y acompañamientos deliciosos. Calidad, sabor y tradición en cada producto.',
    ctaSee:'Ver productos',ctaWa:'Pedir por WhatsApp',
    p13:'Sales sazonadoras: tocineta, ahumada, picante, parrillera y de la casa',p15:'Salsas, ajíes, encurtidos y esencias',
    catTitle:'Nuestros productos',search:'Buscar producto...',
    mamaTitle:'Del fogón de mamá a tu mesa',
    mamaText:'Cada frasco se prepara en casa, en pequeñas tandas, con ingredientes frescos y la sazón de siempre. Sin afanes, como se hacen las cosas buenas.',
    call:'Llamar · 314 711 5798',footSlogan:'¡Dale un toque único a tus comidas!',madeBy:'App hecha por',
    seeOrder:'Ver mi pedido',myOrder:'Mi pedido',name:'Tu nombre',address:'Barrio / dirección',note:'Nota (opcional)',
    send:'Enviar pedido por WhatsApp',sendNote:'El domicilio y la forma de pago se acuerdan por WhatsApp.',
    add:'Agregar',added:'Agregado a tu pedido',empty:'Tu pedido está vacío',lic:'Licencia vigente hasta el',
    cats:{all:'Todo',sales:'Sales',salsas:'Salsas',esencias:'Esencias',ajies:'Ajíes'},
    ticker:['Hechas con el amor de mamá','Sales a $13.000','Salsas y ajíes a $15.000','Pide por WhatsApp 314 711 5798','Calidad premium','Caucasia, Antioquia'],
    waHi:'Hola Esencias y Sabores, quiero hacer este pedido:',waName:'Nombre',waAddr:'Dirección',waNote:'Nota',waGen:'Hola Esencias y Sabores, quiero información de sus productos.'},
  en:{kicker:'Caucasia, Colombia',tagline:'Made with mom\'s love',
    lead:'Delicious sauces, seasonings and sides. Quality, flavor and tradition in every jar.',
    ctaSee:'See products',ctaWa:'Order on WhatsApp',
    p13:'Seasoning salts: bacon, smoked, spicy, grill and house',p15:'Sauces, chili sauces, pickles and essences',
    catTitle:'Our products',search:'Search product...',
    mamaTitle:'From mom\'s stove to your table',
    mamaText:'Every jar is made at home in small batches, with fresh ingredients and the same old family touch. No rush — the way good things are made.',
    call:'Call · +57 314 711 5798',footSlogan:'Give your meals a unique touch!',madeBy:'App made by',
    seeOrder:'See my order',myOrder:'My order',name:'Your name',address:'Neighborhood / address',note:'Note (optional)',
    send:'Send order on WhatsApp',sendNote:'Delivery and payment are arranged on WhatsApp.',
    add:'Add',added:'Added to your order',empty:'Your order is empty',lic:'License valid until',
    cats:{all:'All',sales:'Salts',salsas:'Sauces',esencias:'Essences',ajies:'Chili'},
    ticker:['Made with mom\'s love','Salts COP 13,000','Sauces & chili COP 15,000','Order on WhatsApp +57 314 711 5798','Premium quality','Caucasia, Colombia'],
    waHi:'Hi Esencias y Sabores, I would like to order:',waName:'Name',waAddr:'Address',waNote:'Note',waGen:'Hi Esencias y Sabores, I would like info about your products.'}
};

let lang = localGet('es_lang') || 'es';
let cat = 'all', q = '';
let cart = JSON.parse(localGet('es_cart') || '{}');

function localGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function localSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
const $ = s => document.querySelector(s);
const money = n => '$' + n.toLocaleString('es-CO');
const P = id => PRODUCTOS.find(p => p.id === id);

/* Hero con fotos reales que rotan */
const heroPics = ['tocineta','rosada','aji-picante','encurtido','chimichurri-seco','ahumada'];
$('#heroSlides').innerHTML = heroPics.map((n,i)=>`<img src="img/${n}.jpg" alt="" class="${i?'':'on'}">`).join('');
let hi = 0;
setInterval(()=>{const im=document.querySelectorAll('.hero-slides img');im[hi].classList.remove('on');hi=(hi+1)%im.length;im[hi].classList.add('on')},4200);

function applyLang(){
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n; if(t[k]) el.textContent=t[k]});
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=t[el.dataset.i18nPh]);
  $('#langBtn').textContent = lang==='es' ? 'EN' : 'ES';
  const items = t.ticker.map(s=>`<span>${s}</span>`).join('');
  $('#ticker').innerHTML = items + items;
  $('#heroWa').href = `https://wa.me/${WA}?text=${encodeURIComponent(t.waGen)}`;
  const d = new Date(LICENCIA_HASTA+'T12:00:00-05:00');
  $('#license').textContent = `${t.lic} ${d.toLocaleDateString(lang==='es'?'es-CO':'en-US',{day:'numeric',month:'long',year:'numeric',timeZone:'America/Bogota'})}`;
  renderTabs(); renderGrid(); renderCart();
}

function renderTabs(){
  const c = T[lang].cats;
  $('#tabs').innerHTML = Object.keys(c).map(k=>`<button class="tab ${k===cat?'on':''}" data-c="${k}">${c[k]}</button>`).join('');
}

function renderGrid(){
  const t = T[lang];
  const list = PRODUCTOS.filter(p => (cat==='all'||p.cat===cat) &&
    (p[lang][0]+' '+p[lang][1]).toLowerCase().includes(q.toLowerCase()));
  $('#grid').innerHTML = list.map(p=>{
    const n = cart[p.id]||0;
    return `<article class="card">
      <div class="ph"><img src="img/${p.img}" alt="${p[lang][0]}" loading="lazy"><span class="badge">${t.cats[p.cat]}</span></div>
      <div class="bd"><h3>${p[lang][0]}</h3><p>${p[lang][1]}</p><span class="pr">${money(p.precio)}</span>
      ${n ? `<div class="qty"><button data-m="${p.id}">−</button><span>${n}</span><button data-p="${p.id}">+</button></div>`
          : `<button class="add" data-p="${p.id}">${t.add}</button>`}
      </div></article>`;
  }).join('');
  const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
  document.querySelectorAll('.card').forEach((c,i)=>{c.style.transitionDelay=(i%6)*60+'ms';io.observe(c)});
}

function change(id,d){
  cart[id] = (cart[id]||0) + d;
  if(cart[id]<=0) delete cart[id];
  localSet('es_cart', JSON.stringify(cart));
  if(d>0) toast(T[lang].added);
  renderGrid(); renderCart();
  document.querySelectorAll('.card').forEach(c=>c.classList.add('in'));
  const b=$('#cartBtn'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
}

function totals(){
  let n=0,s=0; for(const id in cart){const p=P(id); if(!p) continue; n+=cart[id]; s+=cart[id]*p.precio}
  return {n,s};
}

function renderCart(){
  const {n,s} = totals(), t=T[lang];
  $('#cartBtn').classList.toggle('hidden', !n);
  $('#cartCount').textContent = n; $('#cartTotal').textContent = money(s); $('#sheetTotal').textContent = money(s);
  $('#cartList').innerHTML = n ? Object.keys(cart).filter(P).map(id=>{const p=P(id);return `<div class="ci">
    <img src="img/${p.img}" alt=""><span class="n">${p[lang][0]}<br><small>${money(p.precio)}</small></span>
    <div class="qty"><button data-m="${id}">−</button><span>${cart[id]}</span><button data-p="${id}">+</button></div></div>`}).join('')
    : `<p class="muted">${t.empty}</p>`;
}

function sendOrder(){
  const t=T[lang], {s}=totals();
  if(!s){toast(t.empty);return}
  const name=$('#cName').value.trim(), addr=$('#cAddr').value.trim(), note=$('#cNote').value.trim();
  localSet('es_name',name); localSet('es_addr',addr);
  let msg = t.waHi + '\n\n' + Object.keys(cart).filter(P).map(id=>{const p=P(id);return `• ${cart[id]} x ${p.es[0]} — ${money(cart[id]*p.precio)}`}).join('\n');
  msg += `\n\nTotal: ${money(s)}`;
  if(name) msg += `\n${t.waName}: ${name}`;
  if(addr) msg += `\n${t.waAddr}: ${addr}`;
  if(note) msg += `\n${t.waNote}: ${note}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank');
}

let tt; function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),1500)}

document.addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.dataset.p) change(b.dataset.p,1);
  else if(b.dataset.m) change(b.dataset.m,-1);
  else if(b.dataset.c){cat=b.dataset.c;renderTabs();renderGrid()}
});
$('#search').addEventListener('input',e=>{q=e.target.value;renderGrid()});
$('#langBtn').onclick=()=>{lang=lang==='es'?'en':'es';localSet('es_lang',lang);applyLang()};
$('#cartBtn').onclick=()=>$('#sheet').classList.remove('hidden');
$('#closeSheet').onclick=()=>$('#sheet').classList.add('hidden');
$('#sheet').onclick=e=>{if(e.target.id==='sheet')$('#sheet').classList.add('hidden')};
$('#sendWa').onclick=sendOrder;
$('#cName').value=localGet('es_name')||''; $('#cAddr').value=localGet('es_addr')||'';

applyLang();
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
