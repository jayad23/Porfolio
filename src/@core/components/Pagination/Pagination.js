import * as React from 'react'
import styles from "./Paginate.module.scss"
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Paginate = ({ countBtn, setIndex, skin }) => {
  const [clicked, setClicked] = React.useState(false)
  console.log("Fuera", clicked)
  const handlerClick = (idx) => {
    setIndex(idx)
    setClicked(true)
  }
  return (
    <div className={styles['container']}>
      <ChevronLeft size={30} className={styles['chevron']} />
      {
        countBtn && countBtn.map((repo, idx) => ( 
          <button 
            skin={skin} 
            className={
              clsx(`${(idx + 1) > countBtn.length - 1 && styles['d-none']}`,
                   styles['buttonPaginate'],
                   `${(!clicked && idx === 0) && styles['focused']}`
              )} 
              key={repo.id} 
              onClick={() => handlerClick(idx)}
            >
              {idx + 1}
            </button>
          )
        )
      }
      <ChevronRight size={30} className={styles['chevron']} />
    </div>
  )
}

export default Paginate