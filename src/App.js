import React, { useState } from 'react'
import './App.css';
import Modal from './modal'
function App() {
  const [value ,setValue ] = useState('');
  const [ visible, setVisible] = useState(true)
  const handleSetValue = value => {
    setValue(value)
  }
  const onOk = () => {
    setVisible(false)
  }
  const onCancel = () => {
    setVisible(false)
  }
  return (
    <div className="App">
      <button className="btn" onClick={() => setVisible(true)}>打开对话框</button>
      <Modal
        visible={visible}
        title="这里是标题"
        content={"确认删除账号？"}
        onOk={onOk}
        onCancel={onCancel}
      />
    </div>
  );
}

export default App;
