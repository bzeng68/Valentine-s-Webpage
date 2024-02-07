import './App.css';
import { useState } from 'react';
import { Stack, Button } from '@mui/material';
import YesPage from './YesPage';
import pokeBearsGif from './media/poke-bears.gif';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 90, y: e.clientY - 21});
  };

  return (
    <div className="page" onMouseMove={handleMouseMove}>
      <header className="page-header"> 
        {yesPressed ? <YesPage/> :
            <div className="page">
              <header className="page-header">
                  <img style={{ border: '10px solid #000000', filter: 'brightness(90%)' }} src={pokeBearsGif}/>
                  <h3 className="question-text">
                      will you be my little valentine's bear?
                  </h3>
                  <Stack direction="row" spacing={15}>
                      { noPressed ?                         
                        <Button sx={{ backgroundColor: "#C77398", color: "lightpink", ':hover': { backgroundColor:'#b9517f' }, position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, zIndex: 1000 }}
                                startIcon={<FavoriteIcon sx={{ color: "lightpink" }}/>}
                                size="large"
                                variant="contained"
                                onClick={() => setYesPressed(true)}>
                        Of course!  
                        </Button>
                        :
                        <Button sx={{ backgroundColor: "#C77398", color: "lightpink", ':hover': { backgroundColor:'#b9517f' } }}
                                startIcon={<FavoriteIcon sx={{ color: "lightpink" }}/>}
                                size="large"
                                variant="contained"
                                onClick={() => setYesPressed(true)}>
                        Of course!  
                        </Button>
                      }
                      <Button sx={{ color: "#FF9A98" }}
                              startIcon={<CloseIcon sx={{ color: "#FF9A98" }}/>}
                              color="error"
                              size="large"
                              variant="contained"
                              onClick={() => setNoPressed(true)}>
                      Wrong answer
                      </Button>
                  </Stack>
              </header>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
