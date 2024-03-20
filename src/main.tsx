import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "react-loading-skeleton/dist/skeleton.css";
import ApiService from './utils/ApiService.ts'

ApiService.init()

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
