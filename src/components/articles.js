import React from 'react'
import {articles} from '../constants/data'
import ArticleItem from './articleItem'
import { Link } from 'react-router-dom';

export default function article() {
  return (
    <div style={{backgroundColor:'white',marginLeft:'50px',paddingTop:'60px'}}>
        <div style={{display:'flex',flexDirection:'row',marginTop:'-10px',marginBottom:'20px'}}>
            <h2>Gain helpful insight on degree-related topics</h2>
            <Link to="/articles" style={{backgroundColor:'white',color:'blue',marginLeft:'500px',marginTop:'20px'}}>Explore all articles<span>&#8594;</span></Link>
            {/* <button style={{backgroundColor:'white',color:'blue',marginLeft:'500px',marginTop:'-10px'}}>Explore all articles</button> */}
        </div>
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:'20px',marginLeft:'10px',marginRight:'50px',marginBottom:'50px'}}>
        {articles.map((article, index) => (
                <ArticleItem key={index} article={article} />
            ))}
        </div>
    </div>
  )
}
