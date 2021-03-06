import React from 'react'
import ListCollection from './ListCollection';
import { SocialIcon } from 'react-social-icons'


function Home() {
    return (
        <>
        < ListCollection/>
        <div >

            <img style={{width:'100%',height:'200px',margin:'20px'}} 
            src="https://i-mcr.unimedias.fr/sites/art-de-vivre/files/styles/teaser_front_block/public/salon-blanc-design.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=1218"></img>
    
    <h1 style={{fontFamily:"Lucida Console", textAlign:"center"}}>Professional tips for an Art Deco style</h1>
    <div style={{margin:'20px',flexWrap:"colum", display:"flex"}}>
        <img   style={{width:'50%',height:'400px',margin:'20px'}}
        src="https://www.cdeco.fr/wp-content/uploads/2018/10/GFE784-GFB206-GFB204-GFB205_0121.jpg"></img>
        <h4 style={{color:"#A9192C",display:"flex",alignItems:"flex-end",alignItems:"center", fontFamily:"Lucida Console"
        ,width:"50%"}}>
            Appeared in the 1920s, the Art Deco style is defined by majestic and generous shapes, bright and rich hues, varied materials,
            luxurious and refined ornaments ... It returns to center stage and refreshes interiors to reflect the voluptuousness,
            elegance and modernity.</h4>
        </div> 
    
    <h3 style={{textAlign:"center",color:"#2217D5",fontFamily:"Lucida Console",padding:'5px'}}>Adopter le style Art déco en quelques astuces</h3>
<div style={{ width:'300',height:'250px',justifyContent:"space-between",margin:'20px',flexWrap:"colum", display:"flex"}}> 
    <img  src="https://www.cdeco.fr/wp-content/uploads/2018/10/Art-D%C3%A9co-No%C3%ABl06-682x1024.jpg"></img>
    <img  src="https://i-mcr.unimedias.fr/sites/art-de-vivre/files/styles/pattern_a_2/public/papier-peint-kaki-rebel-walls.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=410&w=440"></img>
    <img src="https://i-mcr.unimedias.fr/sites/art-de-vivre/files/styles/pattern_a_1/public/bougeoir-en-verre.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=624&w=670"></img>
    <img height="250"width="250" src="https://i-mcr.unimedias.fr/sites/art-de-vivre/files/styles/pattern_single/public/2_bureau_chic_milanais_horiz.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=410&w=900"></img>
</div>
<h3 style={{display:"flex",textAlign:"center",margin:'20px'}}>If contemporary decoration is based on sobriety, transparency and clean lines, the Art Deco style relies on voluptuousness as well as on the exuberance of shapes and colors. The Art Deco style is not particularly difficult to reproduce at home, you just need to respect a few codes: geometric lines, intense colors and voluptuous shapes.</h3>



{/* <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2);",color:"#EFCE46"}} >
    © 2020 Copyright:WJDesign.com    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div> */}
<footer className="bg-light text-center text-white">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <SocialIcon url="http://facebook.com" />

      {/* <!-- Twitter --> */}
      <SocialIcon url="http://twitter.com" />

      {/* <!-- Google --> */}
      <SocialIcon url="http://google.com" />

      {/* <!-- Instagram --> */}
      <SocialIcon url="http://instagram" />

      {/* <!-- Linkedin --> */}
      <SocialIcon url="http://linkedin.com" />
      {/* <!-- Github --> */}
      <SocialIcon url="http://github.com" />
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3 bg-dark" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a className="text-white" href="https://WjDesign.com/">WJ-design</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>

</div>
    
    </> )
}

export default Home
