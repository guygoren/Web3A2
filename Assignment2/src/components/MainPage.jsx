// Mainpage which calls all the components
import { Header } from "./Header"
import { RaceList } from "./RaceList"
import { DataSection } from "./DataSection"
import "../styles/MainPage.css"

export const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main-columns">
        <RaceList />
        <DataSection />
      </div>
    </div>
  )
}
