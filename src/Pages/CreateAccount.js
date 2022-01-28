import React from 'react';
import CreateAccountView from '../Componants/CreateAccountView';
import Footer from '../Componants/Footer';
import NavBar from '../Componants/NavBar';
function CreateAccount() {
  return (
    <div>
        <NavBar />
        <CreateAccountView />
        <Footer/>
    </div>
  );
}

export default CreateAccount;
