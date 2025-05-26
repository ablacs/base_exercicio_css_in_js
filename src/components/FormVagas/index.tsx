import { FormEvent, useState } from 'react'

import { BtnPesquisar, Campo, StyledForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    // <form className={styles.form} onSubmit={aoEnviarForm}>
    //   <input
    //     className={styles.campo}
    //     placeholder="Front-end, fullstack, node, design"
    //     onChange={(e) => setTermo(e.target.value)}
    //     type="search"
    //   />
    //   <button className={styles.btnPesquisar} type="submit">
    //     Pesquisar
    //   </button>
    // </form>
    <StyledForm onSubmit={aoEnviarForm}>
      <Campo
        onChange={(e) => setTermo(e.target.value)}
        type="search"
        placeholder="Front-end, fullstack, node, design"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </StyledForm>
  )
}
export default FormVagas
