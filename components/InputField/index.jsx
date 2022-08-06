


export function InputField({label, inputId, children }) {
  return (
    <div className="field mb-4">
      <label htmlFor={inputId} className="block">{label}</label>
      {children}
    </div>
  )
}