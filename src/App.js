import './assets/css/bootstrap.min.css';
import './App.css';

//Components
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MapComponent from './components/MapComponent/MapComponent';

function App() {
  return (
    <>

      <HeaderComponent></HeaderComponent>
      
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>

          </div>
          <div className='col-md-6'>
            <MapComponent></MapComponent>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
