import React, { useState } from "react"
import ImageGrid from "./comps/ImageGrid"
import Modal from "./comps/Modal"
import Title from "./comps/Title"
import UploadForm from "./comps/UploadForm"

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </div>
  )
}

export default App
