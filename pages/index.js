import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-3xl m-5 py-5 ">Container</h1>
                <div className="container bg-red text-white p-5 mx-auto border-2 border-red-dark">
                    <p>Eu sou um Container! Possuo tamanho fixo e incluo outros elementos como este texto. </p>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-3xl m-5 py-5 ">
                    Border-box e Box-content
                </h1>

                <div className="container border-box bg-blue text-white p-5 m-5  border-2 border-blue-dark ">
                    <p>Eu sou um Border-box! O meu tamanho total inclui a margin e o padding.<br /> Tamanho total = ((tamanho do elemento) - padding - margin)</p>
                </div>

                <div className="container box-content bg-green text-white p-5  border-2 border-green-dark ">
                    <p>Eu sou um Box-content! O meu tamanho total é somado a margin e o padding. <br /> Tamanho total = ((tamanho do elemento) + padding + margin)</p>
                </div>
            </div>
        </div>

    )
}

export default Index