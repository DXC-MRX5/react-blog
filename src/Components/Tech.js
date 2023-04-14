import React,{useState} from 'react'
import { dataStore } from "../ContextApi/CntxtAPI"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import {BsFillArrowDownSquareFill, BsFillArrowUpSquareFill} from 'react-icons/bs'

const Tech = () => {
  const [contextdata] =useContext(dataStore);
  const [load,setLoad]=useState(true)
  const loadMore=()=>{
    setLoad(!load);
  }
  return (
    <div className='Tech'>
    <div className='catagory-leftPart'>
    <h1 className='catagory-heading'>Technology</h1>
      <div className='cntxtdata-cntnr'>
            {load ? <>{contextdata.filter(
          (info)=>info.cat === "tech"
          ).filter((data)=>
            data.id < 45
          ).map((elmnt,index)=>{
            return(
              <div key={index} className='catagory-element'>
              <Link to={"/actual/"+elmnt.id}>
                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                </Link>
                <div>
                <h3>{elmnt.title}</h3>
                <h4>{elmnt.heading}</h4>
                <h5>{elmnt.date}</h5>
                </div>
              </div>
            )
            })
          }</> : <>
          {contextdata.filter(
          (info)=>info.cat === "tech"
          ).map((elmnt,index)=>{
            return(
              <div key={index} className='catagory-element-new'>
              <Link to={"/actual/"+elmnt.id}>
                <img src={elmnt.poster} alt='' className='catagory-poster'/>
                </Link>
                <div>
                <h3>{elmnt.title}</h3>
                <h4>{elmnt.heading}</h4>
                <h5>{elmnt.date}</h5>
                </div>
              </div>
            )
            })
          }
          </>}
          <div className="catagory-btndiv">{load ? <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowDownSquareFill style={{width:'40px', height:'40px'}}/> More</button>
      : <button onClick={loadMore} style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}}><BsFillArrowUpSquareFill style={{width:'40px', height:'40px'}}/> Less</button>}</div>
      </div>
    </div>
    <div className='catagory-rightPart'>
      <div className='top-cntnr'>
        <h1>Top Posts</h1>
        {contextdata.filter((info)=>info.cat==="top-tech"
        ).map((elmnt,index)=>{
          return(
            <div className='topBox'>
                  <Link to={"/actual/"+elmnt.id}>
                  <img src={elmnt.poster} alt='' className='top-poster'/>
                  </Link>
                  <div className="topTopic">
                    <h4>{elmnt.heading}</h4>
                    <h6>{elmnt.date}</h6>
                  </div>
                  <h2>{index+1}</h2>
            </div>
          )
        })}
      </div>
      <div className="catagory-adBox"><h3>Advertisement</h3></div>
    </div>
    </div>
  )
}

export default Tech