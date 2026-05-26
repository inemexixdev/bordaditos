import { useState, useEffect } from "react";

const LOGO_URL = "/logo.png";

const T = {
  pink:       "#C4788A",
  pinkDark:   "#A85A6E",
  pinkLight:  "#DDA0B0",
  pinkPale:   "#F7EDF2",
  pinkBorder: "#EDD5E0",
  lavender:   "#A890C8",
  lavPale:    "#EDE8F5",
  gold:       "#C8965A",
  cream:      "#FAF6F3",
  creamWarm:  "#F5EDE8",
  text:       "#3A2028",
  textMid:    "#8A6070",
  textLight:  "#C0A0B0",
  white:      "#FFFFFF",
  green:      "#7ABF8A",
};

const font = {
  serif:  "'Cormorant Garamond','Georgia',serif",
  script: "'Dancing Script',cursive",
  sans:   "'DM Sans',system-ui,sans-serif",
};

const fullScreen = {
  position:"fixed", inset:0, width:"100%", height:"100%",
  display:"flex", flexDirection:"column",
};

const btnBig = {
  width:"100%", padding:"15px 0", borderRadius:20,
  fontSize:15, fontWeight:600, cursor:"pointer",
  border:"none", color:"#fff", fontFamily:font.serif,
  letterSpacing:"0.02em",
  boxShadow:"0 6px 20px rgba(196,120,138,0.28)",
  transition:"transform 0.15s, box-shadow 0.15s",
};

// ── DECORACIONES ─────────────────────────────────────────────────────────────
function Stars() {
  return (
    <>
      {[{t:"7%",l:"5%",s:13,o:0.45},{t:"11%",r:"7%",s:10,o:0.35},
        {t:"20%",l:"12%",s:8,o:0.28},{t:"16%",r:"16%",s:11,o:0.4},
        {t:"5%",l:"42%",s:7,o:0.3},{t:"28%",r:"5%",s:8,o:0.25}
      ].map((s,i)=>(
        <div key={i} style={{position:"absolute",top:s.t,left:s.l,right:s.r,
          fontSize:s.s,opacity:s.o,color:T.gold,pointerEvents:"none",lineHeight:1}}>✦</div>
      ))}
    </>
  );
}

function ThreadDeco() {
  return (
    <div style={{position:"absolute",bottom:0,left:0,right:0,height:200,pointerEvents:"none",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:-20,left:-30,width:170,height:170,
        borderRadius:"50%",background:"radial-gradient(circle,rgba(221,160,176,0.22),transparent 70%)"}}/>
      <div style={{position:"absolute",bottom:-10,right:-20,width:150,height:150,
        borderRadius:"50%",background:"radial-gradient(circle,rgba(168,144,200,0.18),transparent 70%)"}}/>
      <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:200,height:120,
        borderRadius:"50%",background:"radial-gradient(circle,rgba(244,237,232,0.7),transparent 70%)"}}/>
      {[
        {b:28,l:18,w:42,h:42,bg:"linear-gradient(135deg,#E8C0A0,#C89868)",o:0.55},
        {b:18,l:68,w:34,h:34,bg:"linear-gradient(135deg,#F0A0B8,#C47890)",o:0.5},
        {b:48,r:28,w:38,h:38,bg:"linear-gradient(135deg,#A8C8A0,#6A9870)",o:0.5},
        {b:14,r:76,w:30,h:30,bg:"linear-gradient(135deg,#B8C0E8,#8890C0)",o:0.45},
        {b:62,l:108,w:26,h:26,bg:"linear-gradient(135deg,#F0C0D0,#D89090)",o:0.5},
      ].map((d,i)=>(
        <div key={i} style={{position:"absolute",bottom:d.b,left:d.l,right:d.r,
          width:d.w,height:d.h,borderRadius:"50%",background:d.bg,opacity:d.o,
          boxShadow:"0 4px 10px rgba(0,0,0,0.08)"}}/>
      ))}
      <div style={{position:"absolute",bottom:75,right:46,fontSize:26,opacity:0.25,
        transform:"rotate(-35deg)",color:T.gold}}>🪡</div>
    </div>
  );
}

// ── LOGO ─────────────────────────────────────────────────────────────────────
function Logo({ size=100 }) {
  return (
    <img src={LOGO_URL} alt="Bordaditos"
      style={{width:size, height:size, objectFit:"contain", flexShrink:0}}
    />
  );
}

function AppName({ size=26 }) {
  return (
    <div style={{fontFamily:font.script, fontSize:size, fontWeight:700,
      background:`linear-gradient(135deg,${T.pink},${T.lavender})`,
      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
      backgroundClip:"text", letterSpacing:"0.01em", lineHeight:1.1}}>
      Bordaditos
    </div>
  );
}

// ── SPLASH ────────────────────────────────────────────────────────────────────
function Splash({ onDone }) {
  const [s, setS] = useState(0.5);
  const [o, setO] = useState(0);
  useEffect(()=>{
    setTimeout(()=>{setS(1);setO(1);},60);
    setTimeout(onDone,2400);
  },[]);
  return (
    <div style={{...fullScreen,background:`linear-gradient(160deg,#FAF6F3,#F5EDE8 55%,#EDE8F5)`,
      alignItems:"center",justifyContent:"center"}}>
      <Stars/>
      <div style={{transform:`scale(${s})`,opacity:o,transition:"all 0.75s cubic-bezier(0.34,1.56,0.64,1)",
        display:"flex",flexDirection:"column",alignItems:"center",gap:14}}>
        <Logo size={110}/>
        <AppName size={30}/>
        <div style={{fontSize:12,color:T.textLight,fontFamily:font.sans,letterSpacing:"0.04em"}}>
          🪡 Tu atelier digital de bordado
        </div>
      </div>
      <ThreadDeco/>
    </div>
  );
}

// ── WELCOME ───────────────────────────────────────────────────────────────────
function Welcome({ onRegister, onLogin }) {
  const [v, setV] = useState(false);
  useEffect(()=>{setTimeout(()=>setV(true),80);},[]);

  const features = [
    {emoji:"🎨",title:"Detecta colores DMC",desc:"Toca cualquier color en una foto"},
    {emoji:"📁",title:"Organiza proyectos",desc:"Guarda paletas y listas de compra"},
    {emoji:"🪡",title:"Conecta bordadoras",desc:"Comparte y aprende en comunidad"},
  ];

  return (
    <div style={{...fullScreen,background:`linear-gradient(170deg,#FAF6F3,#F5EDE8 60%,#EDE8F5)`,
      alignItems:"center",overflow:"hidden"}}>
      <Stars/>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
        padding:"56px 28px 16px",zIndex:1,
        opacity:v?1:0,transform:v?"translateY(0)":"translateY(18px)",transition:"all 0.7s ease"}}>

        <Logo size={98}/>
        <div style={{marginTop:14}}><AppName size={28}/></div>

        <div style={{fontFamily:font.serif,fontSize:22,fontWeight:600,color:T.text,
          textAlign:"center",marginTop:12,lineHeight:1.25,letterSpacing:"-0.01em"}}>
          Bienvenida a<br/><em style={{fontStyle:"italic",color:T.pinkDark}}>Bordaditos!</em>
        </div>
        <div style={{fontSize:12,color:T.textMid,textAlign:"center",marginTop:7,
          lineHeight:1.6,maxWidth:255,fontFamily:font.sans,fontWeight:300}}>
          Identifica hilos DMC, organiza tus bordados y conecta con otras bordadoras. ❤️
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:9,marginTop:18,width:"100%"}}>
          {features.map((f,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:11,padding:"10px 13px",
              background:"rgba(255,255,255,0.72)",borderRadius:16,
              border:`1px solid rgba(237,213,224,0.55)`,backdropFilter:"blur(8px)"}}>
              <div style={{width:34,height:34,borderRadius:11,flexShrink:0,
                background:`linear-gradient(135deg,${T.pinkPale},${T.lavPale})`,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:17}}>
                {f.emoji}
              </div>
              <div>
                <div style={{fontSize:12,fontWeight:500,color:T.text,fontFamily:font.sans}}>{f.title}</div>
                <div style={{fontSize:11,color:T.textLight,fontFamily:font.sans}}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{padding:"0 28px 38px",width:"100%",zIndex:1,
        opacity:v?1:0,transition:"opacity 0.7s 0.3s"}}>
        <button style={{...btnBig,background:`linear-gradient(135deg,${T.pink},${T.pinkDark})`}}
          onClick={onRegister}>Registrarse</button>
        <button style={{...btnBig,marginTop:10,background:"rgba(255,255,255,0.82)",
          color:T.pinkDark,border:`1.5px solid ${T.pinkBorder}`,
          boxShadow:"none",backdropFilter:"blur(8px)"}}
          onClick={onLogin}>Iniciar sesión</button>
        <div style={{fontSize:10,color:T.textLight,textAlign:"center",marginTop:13,
          fontFamily:font.sans,lineHeight:1.5}}>
          Al registrarte, aceptas los{" "}
          <span style={{color:T.pinkDark,textDecoration:"underline",cursor:"pointer"}}>Términos y Condiciones</span>
          {" "}y la{" "}
          <span style={{color:T.pinkDark,textDecoration:"underline",cursor:"pointer"}}>Política de Privacidad</span>.
        </div>
      </div>
      <ThreadDeco/>
    </div>
  );
}

// ── INPUT FIELD ───────────────────────────────────────────────────────────────
function Field({ icon, placeholder, type="text", value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{position:"relative"}}>
      <div style={{position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",
        fontSize:17,pointerEvents:"none"}}>{icon}</div>
      <input value={value} onChange={e=>onChange(e.target.value)} type={type}
        placeholder={placeholder}
        onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
        style={{width:"100%",padding:"14px 16px 14px 46px",borderRadius:16,fontSize:13,
          fontFamily:font.sans,border:`1.5px solid ${focused?T.pink:T.pinkBorder}`,
          background:focused?"#fff":T.pinkPale,color:T.text,outline:"none",
          boxShadow:focused?`0 0 0 3px rgba(196,120,138,0.12)`:"none",
          transition:"all 0.2s",boxSizing:"border-box"}}
      />
    </div>
  );
}

// ── REGISTER ─────────────────────────────────────────────────────────────────
function Register({ onContinue, onLogin }) {
  const [name,setName]   = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass]   = useState("");
  const [v,setV]         = useState(false);
  useEffect(()=>{setTimeout(()=>setV(true),80);},[]);
  const valid = name.trim().length>1 && email.includes("@") && pass.length>=6;

  return (
    <div style={{...fullScreen,background:`linear-gradient(170deg,#FAF6F3,#F5EDE8 60%,#EDE8F5)`,
      alignItems:"center",overflow:"hidden"}}>
      <Stars/>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
        padding:"48px 28px 16px",width:"100%",zIndex:1,
        opacity:v?1:0,transform:v?"translateY(0)":"translateY(18px)",transition:"all 0.6s ease"}}>

        <Logo size={80}/>
        <div style={{marginTop:10}}><AppName size={24}/></div>

        <div style={{fontFamily:font.serif,fontSize:22,fontWeight:600,color:T.text,
          textAlign:"center",marginTop:12}}>Ingresa tus datos</div>
        <div style={{fontSize:12,color:T.textMid,textAlign:"center",marginTop:5,
          fontFamily:font.sans,fontWeight:300}}>
          Regístrate en Bordaditos para continuar.
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:11,marginTop:20,width:"100%"}}>
          <Field icon="🐰" placeholder="Tu nombre" value={name} onChange={setName}/>
          <Field icon="✉️" placeholder="Tu correo electrónico" type="email" value={email} onChange={setEmail}/>
          <Field icon="🔒" placeholder="Contraseña (mín. 6 caracteres)" type="password" value={pass} onChange={setPass}/>
        </div>

        <button style={{...btnBig,marginTop:20,
          background:valid?`linear-gradient(135deg,${T.pink},${T.pinkDark})`:T.pinkBorder,
          cursor:valid?"pointer":"default",opacity:valid?1:0.65}}
          onClick={()=>valid&&onContinue(name)}>
          Continuar
        </button>

        <div style={{fontSize:12,color:T.textMid,textAlign:"center",marginTop:14,fontFamily:font.sans}}>
          ¿Ya tienes una cuenta?{" "}
          <span style={{color:T.pinkDark,fontWeight:500,cursor:"pointer",textDecoration:"underline"}}
            onClick={onLogin}>Iniciar sesión</span>
        </div>
      </div>
      <ThreadDeco/>
    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ onContinue, onRegister }) {
  const [email,setEmail] = useState("");
  const [pass,setPass]   = useState("");
  const [v,setV]         = useState(false);
  useEffect(()=>{setTimeout(()=>setV(true),80);},[]);
  const valid = email.includes("@") && pass.length>=6;

  return (
    <div style={{...fullScreen,background:`linear-gradient(170deg,#FAF6F3,#F5EDE8 60%,#EDE8F5)`,
      alignItems:"center",overflow:"hidden"}}>
      <Stars/>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
        padding:"48px 28px 16px",width:"100%",zIndex:1,
        opacity:v?1:0,transform:v?"translateY(0)":"translateY(18px)",transition:"all 0.6s ease"}}>

        <Logo size={80}/>
        <div style={{marginTop:10}}><AppName size={24}/></div>

        <div style={{fontFamily:font.serif,fontSize:22,fontWeight:600,color:T.text,
          textAlign:"center",marginTop:12}}>Bienvenida de vuelta</div>
        <div style={{fontSize:12,color:T.textMid,textAlign:"center",marginTop:5,
          fontFamily:font.sans,fontWeight:300}}>Inicia sesión para continuar bordando.</div>

        <div style={{display:"flex",flexDirection:"column",gap:11,marginTop:20,width:"100%"}}>
          <Field icon="✉️" placeholder="Tu correo electrónico" type="email" value={email} onChange={setEmail}/>
          <Field icon="🔒" placeholder="Contraseña" type="password" value={pass} onChange={setPass}/>
          <div style={{textAlign:"right"}}>
            <span style={{fontSize:11,color:T.pinkDark,cursor:"pointer",fontFamily:font.sans}}>
              ¿Olvidaste tu contraseña?
            </span>
          </div>
        </div>

        <button style={{...btnBig,marginTop:16,
          background:valid?`linear-gradient(135deg,${T.pink},${T.pinkDark})`:T.pinkBorder,
          cursor:valid?"pointer":"default",opacity:valid?1:0.65}}
          onClick={()=>valid&&onContinue(email.split("@")[0])}>
          Iniciar sesión
        </button>

        <div style={{fontSize:12,color:T.textMid,textAlign:"center",marginTop:14,fontFamily:font.sans}}>
          ¿No tienes cuenta?{" "}
          <span style={{color:T.pinkDark,fontWeight:500,cursor:"pointer",textDecoration:"underline"}}
            onClick={onRegister}>Regístrate gratis</span>
        </div>
      </div>
      <ThreadDeco/>
    </div>
  );
}

// ── WELCOME BACK ──────────────────────────────────────────────────────────────
function WelcomeBack({ userName, onContinue }) {
  const [step,setStep] = useState(0);
  const first = userName.split(" ")[0];
  useEffect(()=>{
    setTimeout(()=>setStep(1),100);
    setTimeout(()=>setStep(2),650);
    setTimeout(()=>setStep(3),1150);
  },[]);

  return (
    <div style={{...fullScreen,background:`linear-gradient(170deg,#FAF6F3,#F5EDE8 60%,#EDE8F5)`,
      alignItems:"center",overflow:"hidden"}}>
      <Stars/>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",
        justifyContent:"center",padding:"40px 28px 20px",zIndex:1,textAlign:"center"}}>

        <div style={{opacity:step>=1?1:0,transform:step>=1?"scale(1)":"scale(0.65)",
          transition:"all 0.65s cubic-bezier(0.34,1.56,0.64,1)"}}>
          <Logo size={92}/>
        </div>

        <div style={{marginTop:14,opacity:step>=1?1:0,transition:"opacity 0.6s 0.2s"}}>
          <AppName size={26}/>
        </div>

        <div style={{fontFamily:font.serif,fontSize:26,fontWeight:600,color:T.text,
          marginTop:16,lineHeight:1.2,letterSpacing:"-0.01em",
          opacity:step>=2?1:0,transform:step>=2?"translateY(0)":"translateY(14px)",
          transition:"all 0.6s ease"}}>
          ¡Bienvenida,<br/><em style={{fontStyle:"italic",color:T.pinkDark}}>{first}!</em>
        </div>

        <div style={{fontSize:13,color:T.textMid,marginTop:10,lineHeight:1.6,
          maxWidth:265,fontFamily:font.sans,fontWeight:300,
          opacity:step>=2?1:0,transform:step>=2?"translateY(0)":"translateY(10px)",
          transition:"all 0.6s 0.1s ease"}}>
          Explora Bordaditos y encuentra el hilo DMC exacto para cada uno de tus proyectos, con amor y dedicación. 🪡
        </div>

        {/* Avatar */}
        <div style={{marginTop:22,width:76,height:76,borderRadius:"50%",
          background:`linear-gradient(135deg,${T.pinkPale},${T.lavPale})`,
          border:`3px solid ${T.pinkBorder}`,
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,
          boxShadow:`0 8px 24px rgba(196,120,138,0.18)`,
          opacity:step>=3?1:0,transform:step>=3?"scale(1)":"scale(0.5)",
          transition:"all 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s"}}>
          🧵
        </div>

        <div style={{fontSize:11,color:T.textLight,marginTop:8,fontFamily:font.sans,
          opacity:step>=3?1:0,transition:"opacity 0.5s 0.3s"}}>
          {first} · Bordaditos
        </div>

        {/* Progress dots */}
        <div style={{display:"flex",gap:6,marginTop:24,
          opacity:step>=3?1:0,transition:"opacity 0.5s 0.4s"}}>
          {[0,1,2].map(i=>(
            <div key={i} style={{width:i===2?20:7,height:7,borderRadius:4,
              background:i===2?T.pink:T.pinkBorder,transition:"all 0.3s"}}/>
          ))}
        </div>
      </div>

      <div style={{padding:"0 28px 42px",width:"100%",zIndex:1,
        opacity:step>=3?1:0,transition:"opacity 0.6s 0.5s"}}>
        <button style={{...btnBig,background:`linear-gradient(135deg,${T.pink},${T.pinkDark})`}}
          onClick={onContinue}>Continuar ✦</button>
        <div style={{textAlign:"center",marginTop:12}}>
          <span style={{fontSize:12,color:T.textLight,cursor:"pointer",fontFamily:font.sans}}
            onClick={onContinue}>Omitir</span>
        </div>
      </div>
      <ThreadDeco/>
    </div>
  );
}

// ── MAIN PLACEHOLDER ──────────────────────────────────────────────────────────
function Main({ userName }) {
  return (
    <div style={{...fullScreen,background:T.cream,alignItems:"center",justifyContent:"center",
      flexDirection:"column",gap:14}}>
      <Logo size={80}/>
      <AppName size={24}/>
      <div style={{fontSize:13,color:T.textMid,fontFamily:font.sans}}>
        ¡Hola {userName.split(" ")[0]}! La app principal va aquí 🎨
      </div>
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen,setScreen] = useState("splash");
  const [userName,setUserName] = useState("");

  const goWelcomeBack = name => { setUserName(name); setScreen("welcomeback"); };

  return (
    <div style={{maxWidth:430,margin:"0 auto",height:"100vh",position:"relative",
      overflow:"hidden",background:T.cream,fontFamily:font.sans}}>
      <style>{`
    
        *{box-sizing:border-box;margin:0;padding:0;}
        input::placeholder{color:#C0A0B0;}
        button:active{transform:scale(0.97);}
      `}</style>

      {screen==="splash"      && <Splash       onDone={()=>setScreen("welcome")}/>}
      {screen==="welcome"     && <Welcome      onRegister={()=>setScreen("register")} onLogin={()=>setScreen("login")}/>}
      {screen==="register"    && <Register     onContinue={goWelcomeBack} onLogin={()=>setScreen("login")}/>}
      {screen==="login"       && <Login        onContinue={goWelcomeBack} onRegister={()=>setScreen("register")}/>}
      {screen==="welcomeback" && <WelcomeBack  userName={userName} onContinue={()=>setScreen("main")}/>}
      {screen==="main"        && <Main         userName={userName}/>}
    </div>
  );
}