import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { get } from "./../features/userSlice"

export default function Formulaire() {
    const data = useSelector((state) => state.user.value)
    const dispatch = useDispatch();   

    console.log(data)
    return (
        <div>
            <form className="w-full max-w-sm mb-10" onSubmit={(e)=>{e.preventDefault(); dispatch(get({nom: e.target[0].value, prenom: e.target[1].value, age: e.target[2].value}))}}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Nom
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="inline-full-name" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Prenom
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="inline-full-name" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Age
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white" id="inline-full-name" type="number" />
                    </div>
                </div>

                <div className="md:flex md:items-center md:justify-center mb-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white ml-16 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                </div>
            </form>
            
            <table className="table-fixed text-center">
                <thead>
                    <tr>
                        <th className="border border-black w-[150px] bg-slate-200 text-lg">Nom</th>
                        <th className="border border-black w-[150px] bg-slate-200 text-lg">Prenom</th>
                        <th className="border border-black w-[150px] bg-slate-200 text-lg">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return  <tr key={index}>
                                        <td className="border border-black w-[150px]">{element.nom}</td>
                                        <td className="border border-black w-[150px]">{element.prenom}</td>
                                        <td className="border border-black w-[150px]">{element.age}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
