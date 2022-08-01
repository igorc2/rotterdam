import { InputText } from 'primereact/inputtext'

export function TextField({label, placeholder, altLabel, ...rest }) {
  return (
    <div className="field">
      <label htmlFor="username1" className="block">{label}</label>
      <InputText id="username1" aria-describedby="username1-help" className="block" {...rest}/>
      <small id="username1-help" className="block">{altLabel}</small>
    </div>
  )
}