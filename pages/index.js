import React from 'react'

const Index = () => {
    return (
        <div>
            <div className="p-5">
                <h1 className="text-2xl m-5 ">Container</h1>
                <div className="container bg-red text-white p-5 mx-auto border-2 border-red-dark">
                    <p>Eu sou um Container! Possuo tamanho fixo e incluo outros elementos como este texto. </p>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5  ">
                    Border-box e Box-content
                </h1>

                <div className="container border-box bg-yellow text-white p-5 m-5  border-2 border-yellow-dark ">
                    <p>Eu sou um Border-box! O meu tamanho total inclui a margin e o padding.<br /> Tamanho total = ((tamanho do elemento) - padding - margin)</p>
                </div>

                <div className="container box-content bg-green text-white p-5 m-5 border-2 border-green-dark ">
                    <p>Eu sou um Box-content! O meu tamanho total é somado a margin e o padding. <br /> Tamanho total = ((tamanho do elemento) + padding + margin)</p>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5 ">
                    Display Inline
                </h1>

                <span className=" inline-block bg-blue text-white p-5 m-5  border-2 border-blue-dark ">
                    <p>Permito que mais de um elemento seja colocado na mesma linha.</p>
                </span>

                <span className=" inline-block bg-green text-white p-5 m-5 border-2 border-green-dark ">
                    <p>Display Inline.</p>
                </span>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5 ">
                    Display Block
                </h1>

                <span className=" container block bg-gray text-white p-5 m-5  border-2 border-gray-dark ">
                    <p>Possuo somente um elemento por linha.</p>
                </span>

                <span className=" container block bg-red text-white p-5 m-5 border-2 border-red-dark ">
                    <p>Display Block.</p>
                </span>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5 ">
                    Display Hidden - Eu escondo o elemento
                </h1>

                <span className=" hidden bg-gray text-white p-5 m-5  border-2 border-gray-dark ">
                    <p>Eu escondo o elemento.</p>
                </span>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5">
                    Overflow Hidden
                </h1>

                <div className="overflow-hidden h-20 bg-green text-white p-5 m-6  border-2 border-green-dark ">
                    <p>Eu oculto o overflow</p>
                    <p>Eu oculto o overflow</p>
                    <p>Eu oculto o overflow</p>
                    <p>Eu oculto o overflow</p>
                </div>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5">
                    Overflow Auto
                </h1>

                <div className="overflow-auto h-20 bg-green text-white p-5 m-6  border-2 border-green-dark ">
                    <p>Barra de Naveação Horizontal e Vertical automática.</p>
                    <p>Barra de Naveação Horizontal e Vertical automática.</p>
                    <p>Barra de Naveação Horizontal e Vertical automática.</p>

                </div>
            </div>

            <div className="p-5">
                <h1 className="text-2xl m-5">
                    Overflow X Auto
                </h1>

                <div className="overflow-x-auto h-24 bg-green text-white p-5 m-6  border-2 border-green-dark ">
                    <p>Eu faço a navegação horizontal.</p>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>

            <div className="container block p-5">
                <h1 className="text-2xl m-5">
                    Z Index - Eu faço sobreposição de elementos
                </h1>

                <div className="container relative ">
                    <div className="absolute z-10   bg-gray text-white p-5 m-6  ">Frente </div>
                    <div className="absolute m-4 bg-gray-dark text-white p-5">Atrás</div>
                </div>
            </div>
        </div>
    )
}

export default Index