import logo from './logo.svg';
import './App.css';

const APP_ID = '2b42fe09';
const APP_KEY = '7e5499ad5fab50cd20734741056baf8a';
const APP_SEARCH = 'aple'

const expReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${APP_SEARCH}&app_id=${APP_ID}&app_key=${APP_KEY}`
const App = () => {
    return (
    <div className="App">
    <h1>Hellow React</h1>

    </div>
    );
}

export default App;
