import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import Home from './components/home/Home.jsx'
import Navbar from './components/Navbar.jsx'
import BaseLayout from './components/BaseLayout.jsx';
import Terminal from './components/about/Terminal.jsx';
import About from './components/about/About.jsx';
import { Stack } from './components/stacks/Stack.jsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>,
)
