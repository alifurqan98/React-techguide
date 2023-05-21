import React from 'react'
import vg from '../assets/2.webp';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
          <main>
            <h1>TechGuide</h1>
            <p>Solution to all your problem</p>
          </main>
      </div>

      <div className="home2">
      <img src={vg} alt="Graphics" />

       <div>
         <p>
           We are your one and only solution to the tech problems you face
           every day. We are leading tech company whose aim is to increase the
           problem solving ability in children.
         </p>
       </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, porro ducimus dolor ab dignissimos repudiandae provident tempore, illo, earum eveniet placeat nisi quaerat nihil quod reprehenderit! Provident iure voluptate sit.
          Voluptate omnis quas rem iste, nisi veritatis quisquam aliquid ex hic labore maiores dicta! Accusamus soluta deleniti suscipit exercitationem, facilis, temporibus molestias voluptatum animi nostrum non dolor praesentium, voluptatem sint.
          Nam velit accusamus optio quae eveniet eius nisi sapiente est iste quasi! Id iste pariatur veritatis voluptatibus unde asperiores atque nesciunt, consectetur officiis quis quibusdam vel explicabo, quisquam, dolorum nemo.
          Laboriosam ducimus dolore consectetur officiis cum omnis modi ipsum libero, maiores, vitae explicabo! Neque autem sit ratione praesentium fuga, necessitatibus odio. Eum id sed nihil deserunt aperiam doloribus, repellendus autem.
          Iusto nemo labore, commodi illo harum quia tenetur doloribus cupiditate eligendi omnis dolore non vel at exercitationem atque facere vitae! Incidunt dignissimos amet ratione 
  
         </p>
        </div>
      </div>


      <div className="home4" id='brands'>
        <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:'0.3s'
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>      
         </div>

         <div style={{
            animationDelay:'0.5s'
            }}>
            <AiFillAmazonCircle />  
            <p>Amazon</p>      
          </div>

          <div style={{
            animationDelay:'0.7s'
          }}>
            <AiFillYoutube />
            <p>Youtube</p>      
          </div>


          <div style={{
            animationDelay:'0.1s'
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>      
          </div>

        </article>
        </div>
     </div>
    </>
  )
}

export default Home

