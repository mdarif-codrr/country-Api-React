
export default function RegionNamePlate({region}) {  
  
    if(region=='All'){
         return  <div><h4 className="region-name-plate">{`All Country`}</h4></div>
    }  
  return (
    <div className="" >
    <h4 className="region-name-plate">{region}</h4>
  </div>
  )
}
