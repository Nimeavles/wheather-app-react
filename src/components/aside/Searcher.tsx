import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/search.svg';
import close from '../../assets/close-icon.svg';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Searcher: React.FC<Props> = ({ open, setOpen }) => {

    const navigate = useNavigate()

    const [location, setLocation] = useState('');

    const handleChange = ( e: any ) => {
        setLocation(e.target.value);
    }

    const handleSubmit = () => {
        navigate(`/location/${location}`);
        navigate(0)
        setOpen(!open)
    }

  return (
    <>
        <button 
            className={ open ? 'hidden' : 'bg-slate-600 p-2 rounded-md text-white font-bold mt-3 ml-3' }
            onClick={ () => setOpen(!open) }
        >
            Buscar un lugar
        </button>
        <div className={ open ? "h-screen bg-[#242539] sticky" : "hidden" }>
            <div className="flex justify-end">
                <button className='bg-none mt-3 mr-3' onClick={ () => setOpen(!open) }>
                    <img src={ close } alt="icon" className='h-5 w-5' />
                </button>
            </div>
            <div className="flex justify-evenly pt-5 max-w-md m-auto">
                <input 
                    type="text" 
                    className="rounded-full px-7 focus:outline-0 w-48 sm-mobile:w-60" 
                    placeholder="Introduce una ciudad"
                    onChange={ handleChange }
                />
                <button
                    className="bg-blue-900 text-slate-200 text-lg font-bold focus:outline-0
                    flex justify-evenly items-center rounded-md p-3 sm-mobile:w-[7.8125rem] 
                    sm-mobile:p-2"
                    onClick={ handleSubmit }
                >
                <p className='hidden mr-2 sm-mobile:block'>Buscar</p>
                <img src={ searchIcon } alt={ "icon" } className="h-[18px]" />
                </button>
            </div>
        </div>
    </>
  )
}
