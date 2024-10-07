import sideItems from '../constants/sideItems.js'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='shadow-sm'>
      <div className='py-2'>
        {sideItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path} 
              className='d-flex text-color-primary-black py-2 ps-4'
            >
              <div>
                <i className={`${item.icon} mx-3`}></i>
                {item.label}
              </div>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar