import { TextArea } from "../../components/TextArea";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar'
import { useState, useEffect } from "react";
import { app, database } from '../../config/firebase'
import { collection, addDoc } from "@firebase/firestore";
import { InputField } from "../../components/InputField";


export function TravelForm() {

  const initialState = {
    title: '',
    price: '',
    // agencyId
    // departureTime
    // arrivalTime
    description: ''
    // passengers
    // pictures
    // categories	
    // originCity
    // originStops - Pontos

  }

  const dbInstance = collection(database, 'offerings');

  const [state, setState] = useState(initialState);
  const { title, price, description, departureDate, arrivalDate, paxNumber, city } = state;
  const [ selectedCity, setSelectedCity ] = useState('');
  
  const handleInputChange = (e) => {
    
    let { name, value } =  e.target || e.originalEvent.target;
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('title :>> ', title);
    try {
      addDoc(dbInstance, {
        title,
        price,
        description,
        departureDate,
        arrivalDate,
        paxNumber,
        city, 
      })
      console.log('oa')
    } catch(e) {
      console.error(e)
    }
  }
 
  const cities = [
    { name: 'Lapinha', code: 'lpa' },
    { name: 'Tabuleiro', code: 'tbl' },
    { name: 'Tiradentes', code: 'tir' },
    { name: 'Catas Altas', code: 'cat' },
    { name: 'Serra dos Alves', code: 'ser' }
  ];


  return (
    <div className="container p-6 mx-auto bg-teal-50">
      <form onSubmit={handleSubmit}>
        <InputField inputId="title-input" label="Título">
          <InputText
            id="title-input"
            className="w-full" 
            aria-describedby="title-input"
            name="title"
            onChange={handleInputChange}
          ></InputText>
        </InputField>
        <InputField inputId="description-input" label="Descrição">
          <InputTextarea
            id="description-input"
            aria-describedby="description-input"
            className="w-full"
            rows={5}
            name="description"
            onChange={handleInputChange}
          ></InputTextarea>
        </InputField>
        <InputField inputId="price-input" label="Preço">
          <InputNumber
            id="price-input"
            name="price"
            onChange={handleInputChange}
            mode="currency"
            currency="BRL"
            locale="pt-BR"
            className="w-full"
          />
        </InputField>
        <InputField inputId="departure-input" label="Data de ida">
          <Calendar
            dateFormat="dd/mm/yy"
            name="departureDate"
            id="departure-input" 
            onChange={handleInputChange}
            className="w-full"
          ></Calendar>
        </InputField>
        <InputField inputId="arrival-input" label="Data de volta">
          <Calendar
            dateFormat="dd/mm/yy"
            id="arrival-input"
            name="arrivalDate"
            onChange={handleInputChange}
            className="w-full"
          ></Calendar>
        </InputField>
        <InputField inputId="passenger-input" label="Número de passageiros">
          <InputNumber
            id="passenger-input"
            mode="decimal"
            name="paxNumber"
            useGrouping={false}
            onChange={handleInputChange}
            className="w-full"
          />
        </InputField>

        {/* <InputField inputId="city-input" label="Número de passageiros">
          <MultiSelect
            value={selectedCities}
            id="city-input"
            options={cities}
            name="city"
            onChange={handleInputChange}
            optionLabel="name"
            placeholder="Select a City"
            display="chip"
          />
        </InputField> */}

        <InputField inputId="city-input" label="Destino">
          <Dropdown
            value={selectedCity}
            options={cities}
            onChange={(e) => { setSelectedCity(e.value); handleInputChange(e);}}
            optionLabel="name"
            name="city"
            filter
            showClear
            filterBy="name"
            id="city-input"
            className="w-full"
            placeholder="Select a Country"
          />
        </InputField>
        <div className="mt-8">
          <Button type="submit" label="Salvar"/>
        </div>
      </form>
      {/* 
      <TextField label="Location" placeholder="Fill up the title"></TextField>
      <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
      <TextArea label="Description"></TextArea>
      <Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput /> */}

    </div>
  )
}