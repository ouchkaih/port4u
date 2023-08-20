import './App.css'
import MainRoutes from "./Routes/Route";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {  faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faFontAwesome, faTwitter)

function App() {
  return (
    <div className="bg-[#FDFAF6] dark:bg-[#0A192F] min-h-screen">
      <MainRoutes/>
    </div>
  );
}

export default App;
