function GlobalStyle(){
    return(
        <style global jsx>{`
        *{
        background: black;
       margin: 0;
       padding: 0;
       box-sizing: border-box;
        }

        body{
            font-family: sans-serif;
        }
    
    `}</style>
    ); 
}

function Titulo(props){
    console.log(props.children);
    const Tag = props.tag;
    return (
        <>
        
        <Tag>{props.children}</Tag>
        <style jsx>{`
         ${Tag} {
           color: red;
           font-size: 24px;
           font-weight: 600;
         }
          `}</style>
          
        </>
    );
}


//Componente React
function HomePage() {
    //JSX
    return (
    <div>
        <GlobalStyle />
        <Titulo tag="h2"> Boas vidas de volta!</Titulo>
        <h2>Discord - Alura Matrix</h2>
         
         </div>
    )
}
  
  export default HomePage