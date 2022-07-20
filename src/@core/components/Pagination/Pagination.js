import * as React from 'react'
import "./Paginate.scss"
import clsx from 'clsx'

const Paginate = ({ countBtn, setIndex, skin }) => {
  return (
    <div className='container'>
      {
        countBtn && countBtn.map((repo, idx) => <button skin={skin} className={clsx(`${(idx + 1) > countBtn.length - 1 && 'd-none'}`, 'buttonPaginate')} key={repo.id} onClick={() => setIndex(idx)}>{idx + 1}</button>
        )
      }
    </div>
  )
}

export default Paginate