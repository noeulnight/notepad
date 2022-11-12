import './App.css'
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function App() {
  return (
    <div className="App">
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar"

        toolbar={{
          options: ['inline', 'history'],
        }} 
        placeholder="내용을 작성해주세요."
        localization={{
          locale: 'ko',
        }}
      />
    </div>
  )
}

export default App
