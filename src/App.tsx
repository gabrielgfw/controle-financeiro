import './App.css'
import ControleFinanceiro from './pages/controle-financeiro'
import fonts from 'google-fonts';

fonts.add({
  'Inter': ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

function App() {
  return (
    <>
      <ControleFinanceiro />
    </>
  )
}

export default App
