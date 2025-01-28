import './Layout.css';
import { Main } from '../MainContent/Main';
import { useState } from 'react';

const Layout = ({h3,links,btnText})=> {
    
    const [isShow,setIsShow]= useState(false);

    const [isTextbtn, setIsTextbtn] = useState('Показать')




    const ChangeShow = ( ) => {
      if(!isShow){
        setIsTextbtn('Показать')
        setIsShow(true)
      } else {
        
        setIsTextbtn('Скрыть')
        setIsShow(false)
      }
  
      setIsShow(!isShow);
    }
    
 
    return (
        
        <div className='layoutBlock'>
            
            <header className="header">

                {
                    links.map((links) => {
                        return <a key={links.href} href={links.href}>{links.title}</a>
                    })
                }

            </header>
            <button onClick={ChangeShow}><p>{isTextbtn}</p></button>
  
           {isShow ?  <Main h1='КУприв' p='Текст контента клянусь'/>: null}
          
            <footer>
                    <h3>{h3}</h3>
                    <p className="underline">@2025 privacy polite</p>
            </footer>
        </div>
     )
};

export { Layout };