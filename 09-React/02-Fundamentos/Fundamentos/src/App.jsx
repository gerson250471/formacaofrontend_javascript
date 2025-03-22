import './App.css';
// 02 - Importando Componente
import FirstComponent from './components/FirstComponet';
import MyComponent from './components/MyComponent';

// 04 - Template expression
import TemplateExpression from './components/TemplateExpression';

// 06 - Eventos
import Events from './components/Events';

function App() {
  // 03 - Comentários
  return (
    <>
      <div>
        {/* 03 - Comentando no Componente */}
        <h1>02-Fundamentos do React</h1>
       <FirstComponent/>
       <TemplateExpression/>
       <MyComponent/>
       <Events/>
      </div>
      
    </>
  )
}

export default App
