import { Box, ImageList, Typography ,ImageListItem ,ImageListItemBar,ListSubheader} from "@mui/material";
import axios from "axios";
import { useEffect , useState} from "react";
import { useRouter } from 'next/router'


export default function Gallary() {
//http://localhost:8080/getImagesOfCategoryId?catId=2

const [categoryImages, setCategoryImages]= useState([])


const router = useRouter()


const [category, setCategory]= useState("")

const callAPI = () => {
    axios.get('http://localhost:8080/getImagesOfCategoryId?catId='+router.query.catId).then
    (function(response){
        setCategoryImages(response.data.imageList)
    })
}

useEffect(()=>{
  if(router.query.catId){
    callAPI()
    setCategory(router.query.categoryName)
  }
   
},[router.query.catId])

    return(
        <Box>
            <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" onClick={()=> window.open("http://localhost:3000/", "_blank")}>{category}</ListSubheader>
      </ImageListItem>
      {categoryImages.map((item) => (
        <ImageListItem key={item.imagesUrl}>
          <img
            src={item.imagesUrl}
            srcSet={item.imagesUrl}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.createdBy}
          />
        </ImageListItem>
      ))}
    </ImageList>
        </Box>
    )
}