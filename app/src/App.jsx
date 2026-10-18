import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return <>
      <h1>Hello World !</h1>
      <p className='lorem-text'>Some Lorem ipsum you know just simple placeholder to fill</p>
      <button className="btn color-scheme-btn" onClick={() => document.body.classList.toggle("light")}>Switch Color Scheme</button>
      <button className="btn alerts-btn" onClick={() => document.getElementById('alerts-dialog').showModal()}>Show Alerts</button>
      <button className="btn count-btn" onClick={() => increment()}>Count : {count}</button>

      <dialog id='alerts-dialog'>
        <button class="close-modal" onClick={() => document.getElementById('alerts-dialog').close()}>X</button>
        <div className='alert danger-alert'>
          <h4>Payment failed</h4>
          <p>Your bank account has rejected the payment.</p>
        </div>
        <div className='alert warning-alert'>
          <h4>Plan expiring soon</h4>
          <p>Your plan will expire in 3 days.</p>
        </div>
        <div className='alert success-alert'>
          <h4>Video Upload</h4>
          <p>Your video has been successfully uploaded on the platform.</p>
        </div>
      </dialog>
    </>
}

export default App
