import React from 'react'
import "./NewsCard.css"

const NewsCard = ({ newsItem }) => {
    const fulldate = new Date(newsItem.publishedAt);
    var date = fulldate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
    const time = hour > 12 ? true : false;


  return (
    <div className='newsCard'>
      <img 
        alt={newsItem.title} 
        src={newsItem.urlToImage
         ? newsItem.urlToImage
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
                <span className='muted'> by {newsItem.author?newsItem.author:"unknown"} / {" "}
                    {
                        time?`${hour-12}:${date[4].substring(3,5)} PM`
                        : `${hour}:${date[4].substring(3,5)} AM`
                    } on {date[2]} {date[1]} {date[3]}, {date[0]} 
                </span>
            </span>
          </div>
          <div className='lowerNewsText'>
            <div className='description'> {newsItem.description} </div>
            <span className='readmore'>
                read more at{" "}
                <a href={newsItem.url} target='__blank'>
                <b style={{color:"#222"}}>{newsItem.source.name}</b>
                </a>
            </span>
          </div>
      </div>

    </div>
  )
}

export default NewsCard
