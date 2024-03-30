import React from 'react'
import "../css/articleItem.css"

export default function articleItem({article}) {
  return (
    <div className='articleitem' style={{display:'flex',flexDirection:'column',gap:'10px',width:'600px',height:'250px',backgroundColor:'#54D6F0',padding:'0px 10px',border:'1px solid white',borderRadius:'6%'}}>
      <h4 style={{marginBottom:'-10px'}}>{article.heading}</h4>
      <p >{article.content}</p>
      <div className='content'>
        <p >{article.update}</p>
        <p >Article - {article.time} min read</p>
      </div>
    </div>
  )
}
