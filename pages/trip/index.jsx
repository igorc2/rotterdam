import { Button } from "primereact/button";
import { Typography } from "../../components/Typography";


function Trip() {

  const src1 = '/diamantina1.jpg';

  return (
    <div className="p-4 pt-6 p-fluid min-h-screen bg-screen">
      <Typography variant="header4" element="h2" className="mb-4 text-center p-text-primary">Parque das Andorinhas</Typography>
      <div
        className="bg-center bg-cover h-64 rounded-3xl"
        style={{ backgroundImage: `url(${src1})`}}
      >
      
        
      </div>
      <div className="flex">
        <Typography variant="header6" element="h2" className="mt-4 mb-4 text-left p-text-primary">Parque das Andorinhas</Typography>

      </div>
      <Typography variant="header6" element="h2" className="mt-4 mb-4 text-left p-text-primary">
      📅 Dia: 15/08- Segunda
      Feriado em Belo Horizonte  

      💦Parque das Andorinhas em Ouro Preto
      📍Cachoeira das Andorinhas, Pedra do Jacaré, Praça Tiradentes, Cachoeira Véu das Noivas, Mirante das Lajes e retirada e carimbo do Passaporte da Estrada Real

      📍Informações sobre a trilha:
      🥾 Distância: 4Km (total) 
      Nível da Trilha: Fácil

      Valores e formas de pagamento:
      💰 Valor: R$140,00
      ▶️Boleto ou Pix (nubank).
      💳Cartão de crédito pelo Picpay com acréscimo no valor(R$145,00
      </Typography>
      <Button
        label="Reservar"
        className="mt-3 p-14"
      ></Button>
    </div>
  )

}

export default Trip;