import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-3xl m-4 p-4 text-center mx-auto">Container</h1>
                <div className="container bg-red-800 text-white m-4 p-4 mx-auto border-2 border-red-900">
                    <p>Eu sou um Container! Possuo tamanho fixo e incluo outros elementos como este texto. </p>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-3xl m-4 p-4 text-center mx-auto">
                    Border-box e Box-content
                </h1>

                <div className="container border-box bg-blue-800 text-white m-4 p-4 mx-auto border-2 border-blue-900">
                    <p>Eu sou um Border-box! O meu tamanho total inclui a margin e o padding.<br /> Tamanho total = (tamanho do elemento) - padding - margin)</p>
                </div>

                <div className="container box-content bg-green-700 text-white m-4 p-4 mx-auto border-2 border-green-800">
                    <p>Eu sou um Box-content! O meu tamanho total é somado a margin e o padding. <br /> Tamanho total = (tamanho do elemento) + padding + margin)</p>
                </div>
            </div>
        </div>


    )
}

export default Index