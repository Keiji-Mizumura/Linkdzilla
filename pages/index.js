import Head from "next/head"

import SampleComponent from "../components/sample-component";


function Home(){

  function alertMessage(){
    alert("HELLO WORLD HAHAHA");
  }

  function alertMessage1(){
    alert("HELLO HAHAHAHA");
  }

  return(
    <div>
      <Head>
        <title>Linkdzilla</title>
      </Head>

      <h1>HI I'm JOSHUA</h1>
      <h1>Linkdzilla :D by linkdzilla.com</h1>
      <SampleComponent alert={alertMessage}/>
      <SampleComponent alert={alertMessage}/>
      <SampleComponent alert={alertMessage1}/>
    </div>
  )
}

export default Home;