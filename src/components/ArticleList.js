import React from "react";
import Article from "./Article";
function ArticleList({posts}) {
const articleElements=posts.map((postObj,index)=>{
  return(
    <Article
    key={index}
    title={postObj.title}
    date={postObj.date}
    preview={postObj.preview}
    />
  )
})
return(
  <main>
    {articleElements}
  </main>
)
    
  
  }
export default ArticleList