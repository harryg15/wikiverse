import React, { useState } from 'react';

export const Page = ({page}) => {
  const [moreInfo, setMoreInfo] = useState(false)

  return <>
    <h3 className="title" onClick={() => setMoreInfo(!moreInfo)}>{page.title}</h3>
    {moreInfo && <p>{page.content}</p>}
  </>
} 
	