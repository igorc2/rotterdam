
import React, { useRef, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { AutoComplete } from 'primereact/autocomplete';
import Image from "next/image";
import { CardImage } from '../../components/CardImage'
import { Typography } from "../../components/Typography";

// import 'primereact/resources/themes/md-light-deeppurple/theme.css'


function Search () {

  const buttonRef = useRef(null);

  const [value1, setValue1] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [selectedCountry2, setSelectedCountry2] = useState(null);
  const [passengersQuantity , setPassengersQuantity] = useState(1);

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

  const groupedItemTemplate = (item) => {
    return (
      <div className="flex align-items-center country-item">
        <img alt={item.name} src={`images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
        <div>{item.label}</div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-12 p-fluid min-h-screen bg-screen">
      <Typography variant="header1" element="h2" className="mb-4 text-center">Passeios saindo de Belo Horizonte</Typography>
      {/* <div className="field col-12 md:col-4 mb-4">
        <span className="p-float-label">
          <InputText id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
          <label htmlFor="inputtext">Origem</label>
        </span>
      </div> */}

      <div className="field col-12 md:col-4 mb-4">
        <span className="p-float-label">
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
      <h5 className="p-text-secondary">Tipo</h5>
      <div className="flex gap-3 mt-2 mb-4">
        <Button label="1 dia" className="p-button-outlined p-button-secondary p-button-sm p-button-pill"  />
        <Button label="Fim de semana" className="p-button-secondary p-button-sm p-button-pill"/>
        <Button label="2 dias ou mais" className="p-button-outlined p-button-secondary p-button-sm p-button-pill"  />
      </div>
      <div className="field col-12 md:col-4 mb-4">
        <span className="p-float-label">
        <Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
          <label htmlFor="inputtext">Datas</label>
        </span>
      </div>
      <h5 className="p-text-secondary">Viajantes</h5>
      <div className="field w-40 md:col-3 mt-1 mb-6">
        <InputNumber
          inputId="horizontal"
          value={passengersQuantity}
          onValueChange={(e) => setPassengersQuantity(e.value)}
          showButtons
          className="text-center"
          buttonLayout="horizontal"
          mode="decimal"
          decrementButtonClassName="p-button-secondary"
          incrementButtonClassName="p-button-secondary"
          min={1}
          max={8}
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
      </div>
      <Button
        label="Buscar"
        className="p-14"
      ></Button>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <CardImage src={src1} title="Diamantina" subtitle="Cidade histórica" ></CardImage>
        <CardImage src={src2} title="Serro" subtitle="Muito queijo" ></CardImage>
      </div>
    </div>

  )
}

export default Search