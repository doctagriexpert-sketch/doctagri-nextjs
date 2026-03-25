'use client'
import { useState, useEffect } from 'react'
export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const slides = [[{name:'Koffi Mensah',role:'Kpalime',culture:'Tomate',text:'DoctAgri a reduit mes pertes de 60%.'},{name:'Afi Akossiwa',role:'Sokode',culture:'Mais',text:'Je diagnostique mes cultures moi-meme maintenant.'},{name:'Yao Kokou',role:'Atakpame',culture:'Piment',text:'Sans internet, DoctAgri fonctionne parfaitement.'}],[{name:'Abla Dzigbodi',role:'Tsevie',culture:'Manioc',text:'Sauve toute ma recolte grace a DoctAgri.'},{name:'Komlan Agbeko',role:'Dapaong',culture:'Mais',text:'DoctAgri est comme un expert dans ma poche.'},{name:'Mawuli Gbedemah',role:'Lome',culture:'Tomate',text:'Les pertes ont diminue de 40% en un trimestre.'}],[{name:'Kossiwa Amegbo',role:'Aneho',culture:'Legumes',text:'Je sais quelle maladie attaque mes cultures.'},{name:'Teko Dossou',role:'Kara',culture:'Mais',text:'24 ans et fier d utiliser DoctAgri chaque jour.'},{name:'Ama Tagbor',role:'Vogan',culture:'Maraichage',text:'Notre jardin nourrit 200 familles avec DoctAgri.'}]]
  useEffect(() => { const t = setInterval(() => setCurrent(c => (c+1)%3), 5000); return () => clearInterval(t) }, [])
  return (
    <section style={{padding:'80px 0',background:'#f9fafb'}}>
      <div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <span style={{display:'inline-block',background:'#00C853',color:'white',padding:'8px 20px',borderRadius:'999px',fontSize:'13px',fontWeight:'600',marginBottom:'16px'}}>TEMOIGNAGES</span>
          <h2 style={{fontSize:'40px',fontWeight:'800',color:'#1B3A1F',marginBottom:'12px'}}>Ce Que Disent Nos Agriculteurs</h2>
          <p style={{fontSize:'18px',color:'#6b7280'}}>Des milliers d agriculteurs togolais font confiance a DoctAgri</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px',marginBottom:'32px'}}>
          {slides[current].map((t,i) => (
            <div key={i} style={{background:'white',borderRadius:'16px',padding:'24px',boxShadow:'0 4px 20px rgba(0,0,0,0.08)',border:'1px solid #f0f0f0'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'#00C853',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:'bold',fontSize:'20px',marginBottom:'12px'}}>{t.name.charAt(0)}</div>
              <div style={{fontWeight:'700',color:'#111827',marginBottom:'4px'}}>{t.name}</div>
              <div style={{fontSize:'12px',color:'#9ca3af',marginBottom:'8px'}}>{t.role}</div>
              <span style={{display:'inline-block',background:'#dcfce7',color:'#15803d',fontSize:'11px',padding:'3px 10px',borderRadius:'999px',marginBottom:'12px'}}>{t.culture}</span>
              <p style={{color:'#4b5563',fontSize:'14px',lineHeight:'1.7',fontStyle:'italic',marginBottom:'16px'}}>"{t.text}"</p>
              <div>{[1,2,3,4,5].map(j => <span key={j} style={{color:'#facc15'}}>★</span>)}</div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'16px'}}>
          <button onClick={() => setCurrent(c => (c-1+3)%3)} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid #e5e7eb',background:'white',cursor:'pointer',fontSize:'20px'}}>‹</button>
          <div style={{display:'flex',gap:'8px'}}>{[0,1,2].map(i => <button key={i} onClick={() => setCurrent(i)} style={{width:i===current?'28px':'12px',height:'12px',borderRadius:'999px',background:i===current?'#00C853':'#d1d5db',border:'none',cursor:'pointer',transition:'all 0.3s'}} />)}</div>
          <button onClick={() => setCurrent(c => (c+1)%3)} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid #e5e7eb',background:'white',cursor:'pointer',fontSize:'20px'}}>›</button>
        </div>
      </div>
    </section>
  )
}
