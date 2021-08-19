import React from "react";
import "./Appp.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//setup variables
 const img ="https://th.bing.com/th/id/OIP.vLRIczixiK6Qc6wAEYJnUAHaHa?w=173&h=180&c=7&o=5&pid=1.7",
  const item ='leggings',
  const price='R250',
  const cart ='add to the cart'


  const img1 ="https://th.bing.com/th/id/OIP._9KGhuxv7iFeynE--FYSMwHaHa?pid=ImgDet&w=193&h=193&c=7"
  const item1 ='Shorts and t-shirt',
  const price1='R750',
  const cart1 ='add to the cart'

  const img3 ="https://th.bing.com/th/id/OIP.LLLKXbwrDnK7GDz1bXh2BgHaFj?w=252&h=189&c=7&o=5&pid=1.7",
  const item3 ='dumbles',
  const price3='R300',
  const cart3 ='add to the cart'

  
  const img4 ="https://th.bing.com/th/id/OIP.lROGVPxnrjdmjnaX3wsVcgHaHA?w=182&h=172&c=7&o=5&pid=1.7",
  const item4 ='Sports Bra',
  const price4='R150',
  const cart4 ='add to the cart'

  const img5 ="https://th.bing.com/th/id/OIP.TOGkK11c2rd9DoDb-w25JwHaHa?pid=ImgDet&w=193&h=193&c=7",
  const item5 ='Shirt and legging',
  const price5='R450',
  const cart5 ='add to the cart'

  const img6 ="https://th.bing.com/th/id/OIP.dWUhvjKqnkkqq820wdo9jgHaHa?w=189&h=190&c=7&o=5&pid=1.7",
  const item6 ='matt',
  const price6='R200',
  const cart6 ='add to the cart'

  const img7 ="https://th.bing.com/th/id/OIP.TiMjFxA9LqO9wsbL1Bbk3gHaHa?w=164&h=188&c=7&o=5&pid=1.7",
  const item7 ='sneaker',
  const price7='R400',
  const cart7 ='add to the cart'

  const img8 ="https://th.bing.com/th/id/OIP.G6fn3FZI8E3ocKFA2YZUpAHaHa?w=199&h=199&c=7&o=5&pid=1.7",
  const item8 ='Yoga sets',
  const price8='R570',
  const cart8 ='add to the cart'

  const img9="https://th.bing.com/th/id/OIP.EAgNcLh8q6VQVAv-6OQxOAHaHa?w=214&h=214&c=7&o=5&pid=1.7",
  const item9 ='Wheel',
  const price9 ='R570',
  const cart9 ='add to the cart'

export default function Appp() {
  return (
    <section>
      <div>
      <div style={{display:"flex"}}>
  <Router>
  <nav style={{display:"flex"}}>
   
       
         <Link style={{marginLeft:'100px', textDecoration:'none'}} to="/leggings">leggings</Link>
      
      
         <Link style={{marginLeft:'100px', textDecoration:'none'}} to="/sportsbra">SportsBra</Link>
      
       
         <Link style={{marginLeft:'100px', textDecoration:'none'}} to="/sneaker">Sneaker</Link>
       
       
         <Link style={{marginLeft:'100px', textDecoration:'none'}} to="/equipment">Equipment</Link>
      
       
         <Link style={{marginLeft:'100px' , textDecoration:'none'}} to="/shirts">Shirts</Link>
       
      
         <Link  style={{marginLeft:'100px' , textDecoration:'none'}}to="/caps">Caps</Link>
       
    
   </nav>
   <Switch>
   <Route path="/leggings">
           <Leggings/>
          </Route>
          <Route path="/sportsbra">
           <SportsBra/>
          </Route>
          <Route path="/sneaker">
           <Sneaker/>
          </Route>
          <Route path="/equipment">
           <Equipment/>
          </Route>
          <Route path="/shirts">
           <Shirts/>
          </Route>
          <Route path="/caps">
           <Caps/>
          </Route>
        </Switch>
   
   </Router>
   </div>
        </div>
    <div className='ifu'>
        

      <Clothes  />
      <Sets1 />
      <Equipment1 />
      <SingleItem2 />
      < Sets2 />
      <Equipment2 />
      < SingleItem3 />
      < Sets3 />
      <Equipment3 />
     

    </div>
    </section>
  );
}
const Clothes = (props)=>{

  return(
<section>
<img src={img} alt='' />
<h3>{item}</h3>
<h4>{price}</h4>
<h4>{cart}</h4>
</section>
  );
}

const Sets1 = (props)=>{
  
  return(
<section>
<img src={img1} alt='' />
<h3>{item1}</h3>
<h4>{price1}</h4>
<h4>{cart1}</h4>
</section>
  );
}

const Equipment1 = (props)=>{
  return(
<section>
<img src={img3} alt='' />
<h3>{item3}</h3>
<h4>{price3}</h4>
<h4>{cart3}</h4>
</section>
  );
}
const SingleItem2 = (props)=>{
  return(
<section>
<img src={img4} alt='' />
<h3>{item4}</h3>
<h4>{price4}</h4>
<h4>{cart4}</h4>
</section>
  );
}

const Sets2 = (props)=>{
  return(
<section>
<img src={img5} alt='' />
<h3>{item5}</h3>
<h4>{price5}</h4>
<h4>{cart5}</h4>
</section>
  );
}

const Equipment2 = (props)=>{
  return(
<section>
<img src={img6} alt='' />
<h3>{item6}</h3>
<h4>{price6}</h4>
<h4>{cart6}</h4>
</section>
  );
}

const SingleItem3 = (props)=>{
  return(
<section>
<img src={img7} alt='' />
<h3>{item7}</h3>
<h4>{price7}</h4>
<h4>{cart7}</h4>
</section>
  );
}

const Sets3= (props)=>{
  return(
<section>
<img src={img8} alt='' />
<h3>{item8}</h3>
<h4>{price8}</h4>
<h4>{cart8}</h4>
</section>
  );
}

const Equipment3 = (props)=>{
  return(
<section>
<img src={img9} alt='' />
<h3>{item9}</h3>
<h4>{price9}</h4>
<h4>{cart9}</h4>
</section>
  );
}

//setup variables
const imgA ="https://th.bing.com/th/id/OIP.3fpdQWeJfEKYc7pP0_bEzwHaHa?w=182&h=182&c=7&o=5&pid=1.7",
const itemA ='leggings',
const priceA='R250',
const cartA ='add to the cart'

const imgB ="https://th.bing.com/th/id/OIP.paFh_zhiWSn4rHRbTMnvMAHaHa?pid=ImgDet&w=193&h=193&c=7",
const itemB ='leggings',
const priceB='R250',
const cartB ='add to the cart'


const imgC ="https://th.bing.com/th/id/OIP.3G_MS4D3JKGC8wPxgdT8vwHaHa?w=182&h=182&c=7&o=5&pid=1.7",
const itemC ='leggings',
const priceC='R250',
const cartC ='add to the cart'

const imgD ="https://th.bing.com/th/id/OIP.xH7aO65JHX0zizzqtcaNHgHaLz?w=182&h=291&c=7&o=5&pid=1.7",
const itemD ='leggings',
const priceD='R250',
const cartD ='add to the cart'

const imgE ="https://th.bing.com/th/id/OIP.UNwWkKx573tKdyQD4BEPigHaJt?w=182&h=239&c=7&o=5&pid=1.7",
const itemE ='leggings',
const priceE='R250',
const cartE ='add to the cart'

const Leggings = (props)=>{
  return(
<section>
<img src={imgA} alt='' />
<h3>{itemA}</h3>
<h4>{priceA}</h4>
<h4>{cartA}</h4>

<img src={imgB} alt='' />
<h3>{itemB}</h3>
<h4>{priceB}</h4>
<h4>{cartB}</h4>

<img src={imgC} alt='' />
<h3>{itemC}</h3>
<h4>{priceC}</h4>
<h4>{cartC}</h4>

<img src={imgD} alt='' />
<h3>{itemD}</h3>
<h4>{priceD}</h4>
<h4>{cartD}</h4>

<img src={imgE} alt='' />
<h3>{itemE}</h3>
<h4>{priceE}</h4>
<h4>{cartE}</h4>

</section>
  );
}
//setup variables
const imgF ="https://th.bing.com/th/id/OIP.kZHQtsGpzG-bhbYX6iymwwHaHa?w=193&h=192&c=7&o=5&pid=1.7",
const itemF ='Sports Bra',
const priceF='R150',
const cartF ='add to the cart'

const imgG="data:image/jpeg;base64,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",
const itemG ='Sports Bra',
const priceG='R150',
const cartG ='add to the cart'

const imgH="https://th.bing.com/th/id/OIP._UOQF5OmpG2e7WCDo7k48QAAAA?w=162&h=184&c=7&o=5&pid=1.7",
const itemH ='Sports Bra',
const priceH='R150',
const cartH ='add to the cart'

const imgI="https://th.bing.com/th/id/OIP.pDpFMRFaBHaq9mIm4pC_fAHaHa?w=182&h=182&c=7&o=5&pid=1.7",
const itemI ='Sports Bra',
const priceI='R150',
const cartI ='add to the cart'

const imgJ="data:image/jpeg;base64,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",
const itemJ ='Sports Bra',
const priceJ='R150',
const cartJ ='add to the cart'

const SportsBra = (props)=>{
return(
  <section>
    <img src={imgF} alt='' />
    <h3>{itemF}</h3>
    <h4>{priceF}</h4>
    <h4>{cartF}</h4> 

    <img src={imgG} alt='' />
    <h3>{itemG}</h3>
    <h4>{priceG}</h4>
    <h4>{cartG}</h4> 

    <img src={imgH} alt='' />
    <h3>{itemH}</h3>
    <h4>{priceH}</h4>
    <h4>{cartH}</h4> 

    <img src={imgI} alt='' />
    <h3>{itemI}</h3>
    <h4>{priceI}</h4>
    <h4>{cartI}</h4> 

    <img src={imgJ} alt='' />
    <h3>{itemJ}</h3>
    <h4>{priceJ}</h4>
    <h4>{cartJ}</h4> 

    </section>
);
}
//setup variables
const imgK ="https://th.bing.com/th/id/OIP.0uEUEnS_RRLdoBEJSTvUJwHaHZ?w=192&h=191&c=7&o=5&pid=1.7",
  const itemK='sneaker',
  const priceK='R400',
  const cartK ='add to the cart'

  const imgL ="https://th.bing.com/th/id/OIP.0dMAsaQ1TtlVOsIFnCYRTQHaHa?w=192&h=191&c=7&o=5&pid=1.7",
  const itemL='sneaker',
  const priceL='R400',
  const cartL ='add to the cart'

  const imgM ="https://th.bing.com/th/id/OIP.rBmOoXtT980S4YFVbAWQdAHaHa?w=190&h=190&c=7&o=5&pid=1.7",
  const itemM='sneaker',
  const priceM='R400',
  const cartM ='add to the cart'

  const imgN ="https://th.bing.com/th/id/OIP.UINeIDWgnBOSL_byxju8EgHaHa?w=189&h=192&c=7&o=5&pid=1.7",
  const itemN='sneaker',
  const priceN='R400',
  const cartN ='add to the cart'

  const img0="https://th.bing.com/th/id/OIP.xKzFVoWsYpWfcFKoTzO-7QHaHa?w=158&h=180&c=7&o=5&pid=1.7",
  const item0='sneaker',
  const price0='R400',
  const cart0 ='add to the cart'

  const Sneaker = (props)=>{
    return(
<section>
<img src={imgK} alt='' />
<h3>{itemK}</h3>
<h4>{priceK}</h4>
<h4>{cartK}</h4>

<img src={imgL} alt='' />
<h3>{itemL}</h3>
<h4>{priceL}</h4>
<h4>{cartL}</h4>

<img src={imgM} alt='' />
<h3>{itemM}</h3>
<h4>{priceM}</h4>
<h4>{cartM}</h4>

<img src={imgN} alt='' />
<h3>{itemN}</h3>
<h4>{priceN}</h4>
<h4>{cartN}</h4>

<img src={img0} alt='' />
<h3>{item0}</h3>
<h4>{price0}</h4>
<h4>{cart0}</h4>


  </section>
    );
  }

//setup variables
const imgP="https://th.bing.com/th/id/OIP.mh3ScRIJSRztffb2G3oPpQHaE7?pid=ImgDet&w=193&h=128&c=7",
const itemP ='dumbles',
const priceP='R300',
const cartP ='add to the cart'

  const imgQ="https://th.bing.com/th/id/OIP.uAUd7I0T2GfVnxDXdPsVGwHaHa?pid=ImgDet&w=193&h=193&c=7",
  const itemQ ='dumbles',
  const priceQ='R300',
  const cartQ ='add to the cart'

  const imgR="https://th.bing.com/th/id/OIP.RlmoAafHmMsroniLYorFjAHaHa?pid=ImgDet&w=193&h=193&c=7",
  const itemR ='dumbles',
  const priceR='R300',
  const cartR='add to the cart'


  const imgS="https://th.bing.com/th/id/OIP.p8894LHNrEllgwAtzFlPrAHaHa?pid=ImgDet&w=193&h=193&c=7",
  const itemS ='dumbles',
  const priceS='R300',
  const cartS='add to the cart'

  const imgT="https://th.bing.com/th/id/OIP.yFIcBle2GlkJEz5YQIMQVgAAAA?pid=ImgDet&w=193&h=193&c=7",
  const itemT='dumbles',
  const priceT='R300',
  const cartT ='add to the cart'

  const Equipment = (props)=>{
    return(
      <section>
       <img src={imgP} alt='' />
      <h3>{itemP}</h3>
      <h4>{priceP}</h4>
      <h4>{cartP}</h4>

      <img src={imgQ} alt='' />
      <h3>{itemQ}</h3>
      <h4>{priceQ}</h4>
      <h4>{cartQ}</h4>

      <img src={imgR} alt='' />
      <h3>{itemR}</h3>
      <h4>{priceR}</h4>
      <h4>{cartR}</h4>

      <img src={imgS} alt='' />
      <h3>{itemS }</h3>
      <h4>{priceS}</h4>
      <h4>{cartS}</h4>

      <img src={imgT} alt='' />
      <h3>{itemT}</h3>
      <h4>{priceT}</h4>
      <h4>{cartT}</h4>
       </section>
    )
  }
  const imgU="https://th.bing.com/th/id/OIP.mf8Na0zWfRydM5v9cwJUjgHaJX?w=153&h=194&c=7&o=5&pid=1.7",
  const itemU='dumbles',
  const priceU='R300',
  const cartU ='add to the cart'

  const imgV="https://th.bing.com/th/id/OIP.5C1NO2Mx90j7ufUExUUD6gHaHa?w=194&h=194&c=7&o=5&pid=1.7",
  const itemV='dumbles',
  const priceV='R300',
  const cartV ='add to the cart'

  const imgW="https://th.bing.com/th/id/OIP.oKZtrZRqOmEnLmpWlLvDTgHaHa?w=190&h=189&c=7&o=5&pid=1.7",
  const itemW='dumbles',
  const priceW='R300',
  const cartW ='add to the cart'

  const imgX="https://th.bing.com/th/id/OIP.StM7eyGUKK9GDwhHXfixOQHaHa?w=197&h=197&c=7&o=5&pid=1.7",
  const itemX='dumbles',
  const priceX='R300',
  const cartX ='add to the cart'

  const imgY="https://th.bing.com/th/id/OIP.Ja-HclPEWkYd85Rc9PU9jQHaHa?w=194&h=194&c=7&o=5&pid=1.7",
  const itemY='dumbles',
  const priceY='R300',
  const cartY ='add to the cart'

  const Shirts = (props)=>{
    return(
      <section>
      <img src={imgU} alt='' />
      <h3>{itemU}</h3>
      <h4>{priceU}</h4>
      <h4>{cartU}</h4>

      <img src={imgV} alt='' />
      <h3>{itemV}</h3>
      <h4>{priceV}</h4>
      <h4>{cartV}</h4>

      <img src={imgW} alt='' />
      <h3>{itemW}</h3>
      <h4>{priceW}</h4>
      <h4>{cartW}</h4>

      <img src={imgX} alt='' />
      <h3>{itemX}</h3>
      <h4>{priceX}</h4>
      <h4>{cartX}</h4>

      <img src={imgY} alt='' />
      <h3>{itemY}</h3>
      <h4>{priceY}</h4>
      <h4>{cartY}</h4>
        </section>
    )
  }
  const imgZ="https://th.bing.com/th/id/OIP.Gvw8-9_4yLJXJBNLANI5mwHaHa?w=169&h=180&c=7&o=5&pid=1.7",
  const itemZ='dumbles',
  const priceZ='R300',
  const cartZ ='add to the cart'

  const imgZ1="https://th.bing.com/th/id/OIP.rMj5NSu0QXfyYaI_OdWAOAHaHa?w=196&h=196&c=7&o=5&pid=1.7",
  const itemZ1='dumbles',
  const priceZ1='R300',
  const cartZ1 ='add to the cart'

  const imgZ2="https://th.bing.com/th/id/OIP.nIDxuOPDPMIVbMG6H8VnRQHaHa?w=182&h=182&c=7&o=5&pid=1.7",
  const itemZ2='dumbles',
  const priceZ2='R300',
  const cartZ2 ='add to the cart'

  const imgZ3="https://th.bing.com/th/id/OIP.QAzzd9c2qW8zvEePJSL5aQHaHa?pid=ImgDet&w=193&h=193&c=7",
  const itemZ3='dumbles',
  const priceZ3='R300',
  const cartZ3 ='add to the cart'

  const imgZ4="https://th.bing.com/th/id/OIP.ytFa2E_TpO9XaQHw-VmegwHaHa?w=180&h=180&c=7&o=5&pid=1.7",
  const itemZ4='dumbles',
  const priceZ4='R300',
  const cartZ4 ='add to the cart'

  

  const Caps = (props)=>{
    return(
      <section>
         <img src={imgZ} alt='' />
      <h3>{itemZ}</h3>
      <h4>{priceZ}</h4>
      <h4>{cartZ}</h4>

      <img src={imgZ1} alt='' />
      <h3>{itemZ1}</h3>
      <h4>{priceZ1}</h4>
      <h4>{cartZ1}</h4>

      <img src={imgZ2} alt='' />
      <h3>{itemZ2}</h3>
      <h4>{priceZ2}</h4>
      <h4>{cartZ2}</h4>

      <img src={imgZ3} alt='' />
      <h3>{itemZ3}</h3>
      <h4>{priceZ3}</h4>
      <h4>{cartZ3}</h4>

      <img src={imgZ4} alt='' />
      <h3>{itemZ4}</h3>
      <h4>{priceZ4}</h4>
      <h4>{cartZ4}</h4>

     </section>
    )
  }
   