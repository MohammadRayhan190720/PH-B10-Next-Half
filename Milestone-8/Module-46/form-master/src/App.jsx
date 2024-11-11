
import './App.css'
import CustomHookForm from './components/CustomHookForm/CustomHookForm'
import RefFrom from './components/RefForm/RefFrom'
import ReuseAbleForm from './components/ReuseableForm/ReuseAbleForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateForm from './components/StateForm/StateForm'

function App() {

  const handleSingIn = data =>{
   console.log('sing Up done' , data)
  }
  const handleUpdateProfile = data =>{
  console.log('Update Profile' , data) 
 }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReuseAbleForm title={"SIng Up"} handleSubmit={handleSingIn}>
        <div>
          <p>SIgn Up </p>
          <p>Sing Up Right Now</p>
        </div>
      </ReuseAbleForm>
      <ReuseAbleForm
        title={"Update Profile"}
        buttonText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <p>Update Profile </p>
          <p>ALways Keep Your Profile Updated</p>
        </div>
      </ReuseAbleForm>
    </>
  );
}

export default App
