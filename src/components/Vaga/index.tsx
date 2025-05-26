import { VagaLink, Vagas, VagaTitulo } from './styles'
// import styles from './Vaga.module.css'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>{' '}
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}{' '}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink>Ver detalhes e candidatar-se</VagaLink>
  </Vagas>
)

export default Vaga
