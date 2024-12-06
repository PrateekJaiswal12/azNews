import React from 'react'
import "./NewsCard.css"

const NewsCard = ({ newsItem }) => {

  return (
    <div className='newsCard'>
      <img 
        alt={newsItem.title} 
        src={newsItem.image_url
         ? newsItem.image_url
         : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        }
        className='newsImage'
      />
      <div className='newsText'>
          <div>
            <span className='title'>{newsItem.title}</span>
            <br/> {' '}
            <span className='author'>
                <a href={newsItem.url} target='__blank'>
                <b style={{color:"#222"}}>short</b>
                </a>
                <span className='muted'> by {newsItem.creator?newsItem.creator:"unknown"} / {" "}
                    {newsItem.pubDate}
                </span>
            </span>
          </div>
          <div className='lowerNewsText'>
            <div className='description'> {newsItem.description} </div>
            <span className='readmore'>
                read more at{" "}
                <a href={newsItem.urlinkl} target='__blank'>
                <b style={{color:"#222"}}>{newsItem.source_name}</b>
                </a>
            </span>
          </div>
      </div>

    </div>
  )
}

export default NewsCard
