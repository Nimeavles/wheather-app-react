import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecentSearch } from './RecentSearch';
import searchIcon from '../../assets/search.svg';
import close from '../../assets/close-icon.svg';
import '../../../styles/searcher-animation.css';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Searcher: React.FC<Props> = ({ open, setOpen }) => {

    useEffect(() => {
        getSearchs()
    }, [])

    const navigate = useNavigate()

    const [location, setLocation] = useState('');
    const [recentSearchs, setRecentSearchs] = useState([]);

    const handleChange = (e: any) => {
        setLocation(e.target.value);
    }

    const saveOnLocalStorage = (search: string) => {
        let recentSearchs: any = localStorage.getItem('recentSearchs');
        if (recentSearchs) {
            recentSearchs = JSON.parse(recentSearchs);
            if (recentSearchs.length >= 5) recentSearchs.shift()
            recentSearchs.filter(search === search)
            localStorage.setItem('recentSearchs', JSON.stringify([...recentSearchs, search]))
        } else {
            localStorage.setItem('recentSearchs', JSON.stringify([search]))
        }
    }

    const getSearchs = () => {
        const searchs = localStorage.getItem('recentSearchs');
        searchs ? setRecentSearchs(JSON.parse(searchs)) : '';
    }

    const handleSubmit = (location:string) => {
        navigate(`/location/${location}`);
        navigate(0)
        setOpen(!open)
        saveOnLocalStorage(location)
    }

    return (
        <>
            <div className={open ? "bg-[#191927] btn-searcher h-screen" : "bg-[#191927] hidden"}>
                <div className="flex justify-end">
                    <button className='bg-none mt-3 mr-3' onClick={() => setOpen(!open)}>
                        <img src={close} alt="icon" className='h-5 w-5' />
                    </button>
                </div>
                <div className="flex justify-evenly pt-5 max-w-md m-auto">
                    <input
                        type="text"
                        className="rounded-full px-7 focus:outline-0 w-48 sm-mobile:w-60 lg:w-56"
                        placeholder="Introduce una ciudad"
                        onChange={handleChange}
                    />
                    <button
                        className="bg-blue-900 text-slate-200 text-lg font-bold focus:outline-0
                        flex justify-evenly items-center rounded-md p-3 sm-mobile:w-[7.8125rem] 
                        sm-mobile:p-2 lg:w-[7rem]"
                        onClick={() => handleSubmit(location)}
                    >
                        <p className='hidden mr-2 sm-mobile:block'>Buscar</p>
                        <img src={searchIcon} alt={"icon"} className="h-[18px]" />
                    </button>
                </div>
                <ul className='max-w-[90%] flex flex-col m-auto justify-start gap-3 mt-20'>
                    <h3 className='font-semibold text-xl text-white italic'>Búsquedas Recientes: </h3>
                    {
                        recentSearchs ? (
                            recentSearchs.map((search: string, index: number) => {
                                return (
                                    <li key={index} 
                                        className="py-2 capitalize text-white font-semibold text-lg border border-transparent hover:cursor-pointer hover:border-slate-300"
                                        onClick={() => handleSubmit(search)}    
                                    >
                                        <p className='ml-4'>{search}</p>
                                    </li>
                                )
                            }
                            )
                        ) : ''

                    }
                </ul>
            </div>
        </>
    )
}
