import * as React from 'react'
import styles from "./Paginate.module.scss"
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'react-feather'
const Paginate = ({ countBtn, setIndex, skin, index }) => {
  const [clicked, setClicked] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const handlerClick = (idx) => {
    setIndex(idx)
    setClicked(true)
    setSelectedIndex(idx + 1)
  }
  const handlerChevron = (inst, ind) => {
    if (inst === "prev" && index > 0) {
      setIndex(index - 1)
      setSelectedIndex(selectedIndex - 1)
    } else if (inst === "next" && index < countBtn.length - 2) {
      setIndex(selectedIndex)
      setSelectedIndex(selectedIndex + 1)
    }
    setClicked(true)
  }
  
  return (
    <div className={styles['container']}>
      <ChevronLeft
        onClick={() => handlerChevron("prev", index)}
        size={30} 
        className={styles['chevron']} 
      />
      {
        countBtn && countBtn.map((repo, idx) => ( 
          <button 
            skin={skin} 
            className={
              clsx(`${(idx + 1) > countBtn.length - 1 && styles['d-none']}`,
                   styles['buttonPaginate'],
                   `${(!clicked && idx === 0) && styles['focused']}`,
                   `${(selectedIndex === (idx + 1)) && styles['focused']}`
              )} 
              key={repo.id} 
              onClick={() => handlerClick(idx)}
            >
              {idx + 1}
            </button>
          )
        )
      }
      <ChevronRight
        onClick={() => handlerChevron("next", index)} 
        size={30} 
        className={styles['chevron']} 
      />
    </div>
  )
}

export default Paginate