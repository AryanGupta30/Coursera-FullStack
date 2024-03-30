import React from 'react'
import {articles} from '../constants/data'
import ArticleItem from './articleItem'
import { Link } from 'react-router-dom';

export default function article() {
  return (
    <div style={{backgroundColor:'white',marginLeft:'50px',paddingTop:'60px'}}>
        <div style={{display:'flex',flexDirection:'row',margin:'20px', justifyContent: 'space-between'}}>
            <h2>Gain helpful insight on degree-related topics</h2>
            <Link to="/articles" style={{backgroundColor:'white',color:'#0056d2', marginTop: '25px', marginRight: '24px'}}>Explore all articles<span>&#8594;</span></Link>
        </div>
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'white',gap:'20px',marginLeft:'10px',marginRight:'50px',marginBottom:'50px'}}>
        {articles.map((article, index) => (
                <ArticleItem key={index} article={article} />
            ))}
        </div>
    </div>
  )
}
