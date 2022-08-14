import { useState, useRef } from 'react'
import * as XLSX from 'xlsx'

function App() {
  const [file, setFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const fileRef = useRef('')
  const handleFile = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    //Read excel
    const data = await file.arrayBuffer()
    const wb = XLSX.read(data)
    console.log(wb)

    setFile(file)
    setFileName(file.name)
  }
  const removeFile = () => {
    fileRef.current.value = ''
    setFile(null)
    setFileName(null)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">上傳檔案</h2>
      <p className="text-muted mb-0">{fileName ? fileName : '請上傳檔案'}</p>
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              上傳excel
            </label>
            <input
              ref={fileRef}
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={(e) => handleFile(e)}
            />
          </div>
          <button className="btn btn-danger" onClick={removeFile}>
            刪除
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
