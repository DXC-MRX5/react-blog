import React from 'react'
import {FaYoutube} from 'react-icons/fa'
import { dataStore } from "../ContextApi/CntxtAPI"
import { useContext } from "react"
import { Link, useParams } from 'react-router-dom'
import ShareOnFacebookButton from './share/ShareonFb'
import iconMan from "./images/maleicon.jpg"
import iconWoman from "./images/femaleicon.jpg"
import iconDesk from "./images/editoricon.png"
import iconMy from "./images/my avatar.jpg"

const Actualdata = () => {
  const {Data} = useParams();
  const [contextdata] =useContext(dataStore)
  const action=contextdata[Data].cat
  const handleIcon=()=>{
    const checker=contextdata[Data].gen;
    switch (checker){
      case 'g':
        return iconMy;
      case 'm':
        return iconMan;
      case 'f':
        return iconWoman;
      default:
        return iconDesk;
    }
  }
  switch (action){
    case 'latest':
      return(<>
        <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{contextdata[Data].heading}</h1>
          <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
          <h5>{contextdata[Data].date}</h5>
          <h3>{contextdata[Data].subheading}</h3>
          <p className='dscrptn'>{contextdata[Data].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
        </>
      );
    case 'food':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{contextdata[Data].title}</h1>
          <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
          <h5>{contextdata[Data].date}</h5>
          <h3>{contextdata[Data].heading}</h3>
          <p className='dscrptn'>{contextdata[Data].description}</p>
          <a href={contextdata[Data].process} target='blank' style={{color:'#05386B', display:'flex', alignItems:'center', gap:'10px'}}><span><FaYoutube style={{width:'35px', height:'35px'}}/></span>Check the recipe</a>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
        </>
      );
    case 'bollywood':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{contextdata[Data].title}</h1>
          <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4>A movie released in {contextdata[Data].date}</h4>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
          <h4>Genre : {contextdata[Data].genre}</h4>
          <h3>Director : {contextdata[Data].derector}</h3>
          <h3>Cast : {contextdata[Data].cast}</h3>
          <p className='dscrptn'>{contextdata[Data].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
        </>
      );
    case 'hollywood':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
        <div className='Actualdata'>
          <h1>{contextdata[Data].title}</h1>
          <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
          <h4>A movie released in {contextdata[Data].date}</h4>
          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
          <h4>Genre : {contextdata[Data].genre}</h4>
          <h3>Director : {contextdata[Data].derector}</h3>
          <h3>Cast : {contextdata[Data].cast}</h3>
          <p className='dscrptn'>{contextdata[Data].description}</p>
          <ShareOnFacebookButton/>
        </div>
        <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div></>
      );
    case 'fitness':
      return(<>
      <div className='getbox'><p>Get Started</p></div>
            <div className='Actualdata'>
              <h1>{contextdata[Data].title}</h1>
              <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
              <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
              <h5>{contextdata[Data].date}</h5>
              <h3>{contextdata[Data].heading}</h3>
              <p className='dscrptn'>{contextdata[Data].description}</p>
              <p className='prcs'><span style={{fontSize:'22px', textDecoration:'underLine'}}>Process:</span>  {contextdata[Data].process}</p>
              <ShareOnFacebookButton/>
            </div>
            <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
          </>
          );
          case 'tech':
            return(<>
            <div className='getbox'><p>Get Started</p></div>
              <div className='Actualdata'>
                <h1>{contextdata[Data].heading}</h1>
                <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                <h5>{contextdata[Data].date}</h5>
                <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                <h3>{contextdata[Data].subheading}</h3>
                <p className='dscrptn'>{contextdata[Data].description}</p>
                <ShareOnFacebookButton/>
              </div>
              <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
              </>
            );
            case 'top-tech':
              return(<>
              <div className='getbox'><p>Get Started</p></div>
                <div className='Actualdata'>
                  <h1>{contextdata[Data].heading}</h1>
                  <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                  <h5>{contextdata[Data].date}</h5>
                  <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                  <h3>{contextdata[Data].subheading}</h3>
                  <p className='dscrptn'>{contextdata[Data].description}</p>
                  <ShareOnFacebookButton/>
                </div>
                <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                </>
              );
              case 'top-fit':
                return(<>
                <div className='getbox'><p>Get Started</p></div>
                  <div className='Actualdata'>
                    <h1>{contextdata[Data].heading}</h1>
                    <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                    <h5>{contextdata[Data].date}</h5>
                    <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                    <h3>{contextdata[Data].subheading}</h3>
                    <p className='dscrptn'>{contextdata[Data].description}</p>
                    <ShareOnFacebookButton/>
                  </div>
                  <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                  </>
                );
              case 'top-food':
                  return(<>
                  <div className='getbox'><p>Get Started</p></div>
                    <div className='Actualdata'>
                      <h1>{contextdata[Data].heading}</h1>
                      <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                      <h5>{contextdata[Data].date}</h5>
                      <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                      <h3>{contextdata[Data].subheading}</h3>
                      <p className='dscrptn'>{contextdata[Data].description}</p>
                      <ShareOnFacebookButton/>
                    </div>
                    <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                    </>
                  );
                  case 'top-bolly':
                    return(<>
                    <div className='getbox'><p>Get Started</p></div>
                      <div className='Actualdata'>
                        <h1>{contextdata[Data].heading}</h1>
                        <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                        <h5>{contextdata[Data].date}</h5>
                        <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                        <h3>{contextdata[Data].subheading}</h3>
                        <p className='dscrptn'>{contextdata[Data].description}</p>
                        <ShareOnFacebookButton/>
                      </div>
                      <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </>
                    );
                    case 'top-holly':
                      return(
                        <>
                        <div className='getbox'><p>Get Started</p></div>
                        <div className='Actualdata'>
                          <h1>{contextdata[Data].heading}</h1>
                          <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                          <h5>{contextdata[Data].date}</h5>
                          <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                          <h3>{contextdata[Data].subheading}</h3>
                          <p className='dscrptn'>{contextdata[Data].description}</p>
                          <ShareOnFacebookButton/>
                        </div>
                        <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        </>
                      );
                      case 'more':
                        return(<>
                        <div className='getbox'><p>Get Started</p></div>
                          <div className='Actualdata'>
                            <h1>{contextdata[Data].heading}</h1>
                            <img src={contextdata[Data].poster} alt='' style={{width:'55vw', borderRadius:'15px'}}/>
                            <h5>{contextdata[Data].date}</h5>
                            <h4 style={{display:"flex", alignItems:"center", gap: '30px'}}><img src={handleIcon()} alt='' style={{width:"80px", height:'80px', borderRadius: '50%'}}/>  {contextdata[Data].author}</h4>
                            <h3>{contextdata[Data].subheading}</h3>
                            <p className='dscrptn'>{contextdata[Data].description}</p>
                            <ShareOnFacebookButton/>
                          </div>
                          <h2 className='more-heading'>More from TheSIREN</h2>
                        <div className='moreBox'>
                          {contextdata.filter((info)=>info.cat==="more"
                          ).map((elmnt, index)=>{
                            return(
                              <div className='more-element' key={index}>
                                <Link to={"/actual/"+elmnt.id}>
                                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                                </Link>
                                <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                                <h3>{elmnt.heading}</h3>
                                <h5>By : {elmnt.author}</h5>
                                <h6>{elmnt.date}</h6>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                          </>
                        );
    default:
      return <h1>Nothing to Show</h1>
  }}


export default Actualdata