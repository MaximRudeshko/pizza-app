import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={462}
    viewBox="0 0 280 462"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="498" cy="258" r="90" /> 
    <circle cx="133" cy="129" r="130" /> 
    <rect x="7" y="276" rx="0" ry="0" width="260" height="26" /> 
    <rect x="8" y="314" rx="0" ry="0" width="262" height="80" /> 
    <rect x="9" y="418" rx="0" ry="0" width="90" height="36" /> 
    <rect x="142" y="418" rx="0" ry="0" width="133" height="35" />
  </ContentLoader>
)

export default MyLoader

