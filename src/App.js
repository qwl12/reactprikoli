
import './App.css';
import { Layout } from './сomponents/LayoutContent/layout';
import { useState } from 'react';


function App() {



  let [NavLinks] = useState ([
    
    {title: "Белый", href: 'https://vkvideo.ru/video178039956_456239067'},
    {title: "Белый", href: 'https://vkvideo.ru/video-88133688_171381010'},
    {title: "WW", href: 'https://www.youtube.com/watch?v=xvFZjo5PgG0'},
  ])

  return (
    <div className="App">
      
      <Layout links={NavLinks} h3='фУТЕР УРА УРА'/>
      


    </div>
  );
}

export default App;
