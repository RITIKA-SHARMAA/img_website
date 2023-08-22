import { Typography,Divider, Grid, Card, CardActionArea, CardContent, CardMedia ,Button, Box, Container} from '@mui/material'

export default function CatTile({value}) {


    return(
        <Card sx={{ maxWidth: 345}}> 
        <CardActionArea onClick={()=> window.open("http://localhost:3000/gallary?catId="+value?.id+"&categoryName="+value?.categoryName, "_blank")}>
          <CardMedia
            component="img"
            height="300"
            image={value?.thumbnailImageUrl}
            alt= {value?.categoryName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
            {value?.id}. {value?.categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}