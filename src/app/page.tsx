import { 
  Header,
  Summary,
  Wark,
  Contact,
  Faq,
  Members,
  Cards
} from '@/section'

const Home = () => {
  return (
    <>
      <Header />
      <main>
      <Cards/>
      {
        // <Summary />
        // <br/>
        // <br/>
        // <br/>
        // <Members/>
        // <br/>
        // <br/>
        // <br/>
        // <Wark />
        // <br />
        // <br />
        // <br />
        // <Faq />
      }
      <br/>
      <br/>
      <br/>
        <Faq />
      <br/>
      <br/>
      <br/>
        <div className="w-[100vw] flex justify-center">
        <Contact />{
//           
//         <StarsCanvas color="#dd69e0" rotX={11} rotY={11} />
//         <StarsCanvas color="#02efff" rotX={12} rotY={13}  />
        }
        </div>
        {
/*         <StarsCanvas color="#dd69e0" rotX={11} rotY={11} />
        <StarsCanvas color="#02efff" rotX={12} rotY={13}  />
        <StarsCanvas color="#ffdc36" rotX={15} rotY={7} />
        <StarsCanvas color="#dd69e0" rotX={11} rotY={11} /> */
        }
      </main>
    </>
  )
}

export default Home