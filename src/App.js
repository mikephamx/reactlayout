
import './App.css';
import FilmHeader from './FilmRenderExercise/FilmHeader';
import FilmRender from './FilmRenderExercise/FilmRender';
// import LayoutExcercise from './component/LayoutExcercise';
// import RenderWithLoop from './RenderWithLoop/RenderWithLoop';

function App() {
  return (
    <div className="App">
     {/* <LayoutExcercise/> */}
     {/* <RenderWithLoop/> */}
     <FilmHeader/>
     <FilmRender/>
    </div>
  );
}

export default App;
