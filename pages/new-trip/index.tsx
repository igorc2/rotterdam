import React, { useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import Router from "next/router"

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { Calendar } from 'primereact/calendar';
import { AutoComplete } from 'primereact/autocomplete';
import Image from "next/image";
import { CardImage } from '../../components/CardImage'
import { Typography } from "../../components/Typography";
import { InputTextarea } from 'primereact/inputtextarea';


const CreateTripMutation = gql`
  mutation CreateTripMutation(
    $title: String!
    $description: String
    $subtitle: String
    $tripLevelId: Int
    $price: Float!
    $departureDate: DateTime
  ) {
    createTrip(title: $title, description: $description, subtitle: $subtitle, tripLevelId: $tripLevelId, price: $price, departureDate: $departureDate) {
      title
      description
      subtitle
      tripLevelId
      price
      departureDate
    }
  }
`

function NewTrip() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState(null);
  const [initialDate, setInitialDate] = useState(null);
  const [initialTime, setInitialTime] = useState(null);
  const [time, setTime] = useState(null);

  const [createTrip, { loading, error, data }] = useMutation(CreateTripMutation)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTrip({
      variables: {
        title,
        description,
        subtitle,
        price,
        tripLevelId: 1,
        departureDate: initialDate,
      },
    })
    Router.push("/home")
  }
  
  return (
    <div className="p-6 pt-12 p-fluid min-h-screen bg-screen">
      <form onSubmit={handleSubmit}> 
        <Typography variant="header1" element="h2" className="mb-4 text-center">Cadastro</Typography>
        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <InputText id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="title">Título</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <InputText id="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            <label htmlFor="subtitle">Subtítulo</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <InputTextarea rows={5} id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="description">Descrição</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <InputNumber
              id="price-input"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.value)}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              className="w-full"
            />
            <label htmlFor="price-input">Valor</label>
          </span>
        </div>
        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <Calendar
              id="initial-date-input"
              value={initialDate}
              onChange={(e) => setInitialDate(e.value)}
            ></Calendar>
            <label htmlFor="initial-date-input">Data de ida</label>
          </span>
        </div>

        <div className="field col-12 md:col-4 mb-4">
          <span className="p-float-label">
            <Calendar mask="99:99"
              inputMode="numeric"
              timeOnly
              timeOnlyhourFormat="24"
              value={initialTime}
              onChange={(e) => setInitialTime(e.value)}
            ></Calendar>
            <label htmlFor="description">Horário de partida</label>
          </span>
        </div>
        <Button
          label="Criar"
          className="p-14"
        ></Button>
      </form>
    </div>
  )
}

export default NewTrip