import { Container } from '@mui/material'
import React from 'react'
import NewsCard from "../newsCard/NewsCard"
import "./NewsContent.css"

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        {newsArray.map((newsItem) => {
            return <NewsCard newsItem={newsItem} key={newsItem.title} />
        })}

        {
            loadmore <= newsResults && (
                <>
                    <hr/>
                    <button 
                        onClick={() => setLoadmore(loadmore+20)}
                        className='loadmore'
                    >
                    Load More
                    </button>
                </>
            )
        }
        
      </div>
    </Container>
  )
}

export default NewsContent
