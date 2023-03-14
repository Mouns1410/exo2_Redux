// ## Exo 2
// Créer un projet React. Il y aura un component qui contiendra une formulaire. Le formulaire aura un input pour un nom, un input pour un prénom et un input pour un age. Quand on submit le formulaire, les informations vont etre rajoutées dans un tableau (qui doit etre géré via Redux). 
// Il y aura un component qui va afficher tous les éléments qui se trouvent dans le tableau en 3 colonnes (nom, prénom, age)

import { useState } from 'react'
import Formulaire from "./components/Formulaire"

export default function App() {

  return (
    <div className="App h-screen w-screen flex justify-center items-center">
      <Formulaire />
    </div>
  )
}
