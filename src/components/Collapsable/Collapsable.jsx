import { useState } from "react";

export default function Collapsable({title, children}) {
    const [isOpen, setState] = useState(false);

    const handleClickCollapsable = () => {      
        setState(!isOpen)
    }

    const arrow = isOpen ? 'less' : 'more';

    return (
      <div className='collapsable' open={isOpen}>
        <button 
        className='collapsable__trigger'
        onClick={handleClickCollapsable}>
          {title}
          <span className="material-symbols-rounded">expand_{arrow}</span>
        </button>

        <div className='collapsable__content'>
            <div className='collapsable__content-inner'>
                {children}
            </div>
        </div>
      </div>
    )
}