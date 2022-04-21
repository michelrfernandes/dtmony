import { Container, Content } from "./styles";
import imgLogo from '../../assets/logo.svg';

interface HeaderProps {
  clickModal : () => void
}
export function Header({ clickModal }: HeaderProps){ 
  return ( 
    <>    
    <Container> 
      <Content>
        <img src={imgLogo} alt="Dt Money" />
        <button onClick={clickModal} type="button">
          Nova Transação
        </button>  
      </Content>     
    </Container>    
    </>
  )
}