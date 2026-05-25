import Panel from "./components/Panel"
import { BookContextProvider } from "./context/BookContext"
import PageContent from "./layout/PageContent"
import { ToastContainer } from "react-toastify"
import "./App.css"

function App() {

  return (
    <>
      <BookContextProvider>
        <div className="flex flex-col md:flex-row">
          <section className="md:w-[20%]">
            <Panel />
          </section>
          <section className="md:w-[80%]">
            <PageContent />
          </section>
        </div>
        <ToastContainer />
      </BookContextProvider>
    </>
  )
}

export default App
