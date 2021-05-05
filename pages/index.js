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
      <h1>Linkdzilla :D by linkdzilla.com</h1>
      <SampleComponent alert={alertMessage}/>
      <SampleComponent alert={alertMessage1}/>
    </div>
  )
}

export default Home;