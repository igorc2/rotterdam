export function TextArea({label, placeholder, altLabel}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label> 
      <textarea className="textarea textarea-bordered h-24" placeholder={placeholder}></textarea>
      <label className="label">
        <span className="label-text-alt">{altLabel}</span>
      </label> 
    </div>
  )
}