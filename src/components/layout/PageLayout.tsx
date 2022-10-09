import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
        { children}
    </>
  )
}
