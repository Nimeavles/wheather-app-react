
export const RecentSearch = (recentSearch: string) => {
  return (
    <li className="capitalize text-white font-semibold text-lg border border-transparent hover:cursor-pointer hover:border-slate-300">
        { recentSearch }
    </li>   
  )
}
