import { Container } from '@mui/material'
import React from 'react'
import NewsCard from "../newsCard/NewsCard"
import "./NewsContent.css"

const NewsContent = ({newsArray, newsResults, loadmore}) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        {newsArray.map((newsItem) => {
            return <NewsCard newsItem={newsItem} key={newsItem.title} />
        })}

        {
            loadmore && (
                <>
                    <hr/><a href={loadmore}>
                    <button className='loadmore'>
                    Load More
                    </button>
                    </a>
                </>
            )
        }
        
      </div>
    </Container>
  )
}

export default NewsContent
