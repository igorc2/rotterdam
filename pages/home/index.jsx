
import React, { useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { AutoComplete } from 'primereact/autocomplete';
import { GiWaterfall, GiMountainRoad, GiFamilyHouse, GiMountainCave } from "react-icons/gi";
import { HorizontalCardImage } from '../../components/HorizontalCardImage'
import { Typography } from "../../components/Typography";

// import 'primereact/resources/themes/md-light-deeppurple/theme.css'


function Home () {

  const buttonRef = useRef(null);

  const [value1, setValue1] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [passengersQuantity , setPassengersQuantity] = useState(1);
  const [activeButton, setActiveButton] = useState('item1');

  const [dates, setDates] = useState(null);
    

  const originCities = [
    {"name": "Belo Horizonte", "code": "BHZ"},
    {"name": "São Paulo", "code": "SPO"},
  ];

  const destinationPlaces = [
    {"name": "Angola", "code": "AO"},
    {"name": "Anguilla", "code": "AI"},
    {"name": "Antarctica", "code": "AQ"},
    {"name": "Antigua and Barbuda", "code": "AG"},
    {"name": "Argentina", "code": "AR"},
    {"name": "Armenia", "code": "AM"},
  ];

  const searchCountry = (event) => {
    setTimeout(() => {
      let _filteredPlaces;
      if (!event.query.trim().length) {
          _filteredPlaces = [...destinationPlaces];
      }
      else {
        _filteredPlaces = destinationPlaces.filter((place) => {
          return place.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredPlaces);
    }, 100);
  }

  const itemTemplate = (item) => {
    return (
      <div className="country-item">
        {/* <img alt={item.name} src={`images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} /> */}
        <div>{item.name}</div>
      </div>
    );
  }
  const openDropdown = (event) => {
    buttonRef.current.search(event, '', 'dropdown');
  }

  const src1 = '/diamantina1.jpg';
  const src2 = '/serro-1.jpg';
  const src3 = '/serra1.jpg';
  const src4 = '/floripa1.jpg';
  const src5 = '/inhotim1.jpg';
  const src6 = '/matinhos1.jpg';
  const src7 = '/morretes1.jpg';
  const src8 = '/caraca1.jpg';


  const groupedItemTemplate = (item) => {
    return (
      <div className="flex align-items-center country-item">
        <img alt={item.name} src={`images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
        <div>{item.label}</div>
      </div>
    );
  }

  const toggleLike = () =>{
    if (icon === 'pi-heart' ) {
      setIcon('pi-heart-fill')
    } else {
      setIcon('pi-heart')
    }
  }

  const opa = (e) => {
    console.log(e)
    console.log(e.target.id)
  }


  return (
    <div className="p-6 pt-12 p-fluid min-h-screen bg-screen">
      <Typography variant="header3" element="h2" className="mb-4 text-center p-text-primary">Qual será o seu próximo passeio?</Typography>

      <div className="field col-12 md:col-4 mb-4">
        <span className="p-float-label ">
          <AutoComplete
            value={selectedCountry2}
            ref={buttonRef}
            suggestions={filteredCountries}
            completeMethod={searchCountry}
            field="name"
            forceSelection
            itemTemplate={itemTemplate}
            onFocus={openDropdown}
            onClick={openDropdown}
            onChange={(e) => setSelectedCountry2(e.value)}
            aria-label="Countries"
          />
          <label htmlFor="inputtext">Destino</label>
        </span>
      </div>
      <div className="overflow-auto -ml-6 pl-6 -mr-6 pr-6 scrollbar-hide">
        <div className="flex gap-3 mt-2 mb-4 whitespace-nowrap w-fit">
          <Button
            icon={GiWaterfall}
            label="Cachoeira"
            onClick={() => setActiveButton('item1')}
            className={`${activeButton !== 'item1'? 'p-button-outlined' : ''} p-button-secondary p-button-sm p-button-pill gap-2`}
          />
          <Button
            icon={GiMountainRoad}
            label="Trilha"
            onClick={() => setActiveButton('item2')}
            className={`${activeButton !== 'item2'? 'p-button-outlined' : ''} p-button-secondary p-button-sm p-button-pill gap-2`}
          />
          <Button
            id="button3asdfasdfasdfasdf"
            icon={GiFamilyHouse}
            label="Cidade histórica"
            onClick={(e) => {opa(e); setActiveButton('item3');}}
            className={`${activeButton !== 'item3'? 'p-button-outlined' : ''} p-button-secondary p-button-sm p-button-pill gap-2`}
          />
          <Button
            id="button1"
            icon={GiMountainCave}
            label="Montanha"
            onClick={() => setActiveButton('item4')}
            className={`${activeButton !== 'item4'? 'p-button-outlined' : ''} p-button-secondary p-button-sm p-button-pill gap-2`}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-3">
        <HorizontalCardImage
          src={src1}
          title="Parque das Andorinhas, Ouro Preto"
          subtitle="Dia: 15/08 - Segunda Feira"
          price="R$ 160,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src2}
          title="Cachoeira da fonte, Barbacena"
          subtitle="Dia: 20/08 - Sábado"
          price="R$ 120,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src3}
          title="Pico da girafa, Mariana"
          subtitle="Dia: 20/08 - Sábado"
          price="R$ 220,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src4}
          title="Parque das Zebras, Gamoa"
          subtitle="Dia: 20/08 - Sábado"
          price="R$ 250,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src5}
          title="Cachoeira do macaco, Moeda"
          subtitle="Dia: 20/08 - Sábado"
          price="R$ 160,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src6}
          title="Trilha do leão, Juiz de fora"
          subtitle="Dia: 21/08 - Domingo"
          price="R$ 320,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src7}
          title="Cachoeira da fumaça, Carrancas"
          subtitle="Dia: 21/08 - Domingo"
          price="R$ 460,00"
        ></HorizontalCardImage>
        <HorizontalCardImage
          src={src8}
          title="Serra do Tiranossauro, Brumadinho"
          subtitle="Dia: 21/08 - Domingo"
          price="R$ 110,00"
        ></HorizontalCardImage>
      </div>
    </div>
  )
}

export default Home