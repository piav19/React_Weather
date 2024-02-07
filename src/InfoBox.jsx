import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1673081112888-f877c594ad18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg=";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    
    return (
        
        <div className="InfoBox">
          <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL: info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ?<ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;</p>
          <p>Humidity={info.humidity}</p>
          <p>Min. Temperature={info.tempMin}&deg;</p>
          <p>Max. Temperature={info.tempMax}&deg;</p>
          <p>Weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike}</b>&deg;.</p>
        </Typography>
      </CardContent>
      </Card>
        </div>
        </div>
        
    );
};