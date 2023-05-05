// App.js

import Nav from "./Nav" /** import Nav **/
import "./App.css"

/** add this **/
const wrapperStyle = {
  height: "200vh",
}

export default function App() {
  return (
    <div className='App' style={wrapperStyle}>
      <Nav />
    </div>
  )
}
