import { TextArea } from "../../components/TextArea";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar'
import { useState, useEffect } from "react";
import { app, database } from '../../config/firebase'
import { collection, addDoc } from "@firebase/firestore";


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
  const { title, price, description } = state;
  
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
      })
      console.log('oa')
    } catch(e) {
      console.error(e)
    }
  }
 
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title-input" className="block">Título</label>
          <InputText
            id="title-input"
            aria-describedby="title-input"
            className="block" 
            name="title"
            onChange={handleInputChange}
          ></InputText>
        </div>
        <div className="field">
          <label htmlFor="title-input" className="block">Descrição</label>
          <InputTextarea
            id="description-input"
            aria-describedby="description-input"
            className="block" 
            name="description"
            onChange={handleInputChange}
          ></InputTextarea>
        </div>
        <div className="field">
          <label htmlFor="title-input" className="block">Preço</label>
          <InputNumber name="price" onChange={handleInputChange} mode="currency" currency="BRL" locale="pt-BR" />
        </div>
        <Button type="submit" label="Salvar"/>
      </form>
      {/* 
      <TextField label="Location" placeholder="Fill up the title"></TextField>
      <MultiSelect value={selectedCities} options={cities} onChange={(e) => setSelectedCities(e.value)} optionLabel="name" placeholder="Select a City" display="chip" />
      <TextArea label="Description"></TextArea>
      <Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput /> */}

    </div>
  )
}