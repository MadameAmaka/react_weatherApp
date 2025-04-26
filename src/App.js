import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div>
     <Weather defaultCity="New York" />
     <footer> This project was coded by <a href='https://github.com/MadameAmaka' target='_blank' rel="noreferrer"> Amaka Onwuli </a> and is open-sourced <a href='https://github.com/MadameAmaka/react_weather_project' target='_blank' rel="noreferrer" > on Github,
    </a> and hosted on <a href='https://amakas-react-weather-project.netlify.app/' target='_blank' rel="noreferrer"> Netlify. </a></footer>
    </div></div>
  );
}