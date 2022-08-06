function Catalog ({src, title, subtitle}) {

  const toggleLike = () =>{

  }

  return (
    <div
      className="relative max-w-md bg-center bg-cover h-64 rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 254, 252, 0.), rgba(33, 33, 43, 0.83)), url(${src})`,
      }}
    >
      <div className="flex flex-col h-full justify-between p-4">
        <div className="bg-screen rounded-md h-7 w-7 flex items-center justify-center self-end">
          <i className="pi pi-heart text-alert" style={{'fontSize': '1.1rem'}}></i>
        </div>
        <div>
          <h6 className="p-text-white">Diamantina</h6>
          <small className="p-text-white">Cidade histórica</small>
        </div>
      </div>
    </div>
  )
}

export default Catalog