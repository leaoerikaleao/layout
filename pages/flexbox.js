import React from 'react'

const Flexbox = () => {
    return (

        <div className="m-5 p-5">
            <h1 className="text-2xl">
                Eu sou o Flexbox! Organizo os elementos dentro de seus containers de forma dinâmica.
            </h1>
            <div className="py-5">
                <h2 className=" text-xl py-2">Flex-row (row - linha) - Distribui os elementos na linha.</h2>
                <div className="flex flex-row bg-red-light text-white">
                    <div className="bg-red-dark p-6 m-2 ">1</div>
                    <div className="bg-red-dark p-6 m-2">2</div>
                    <div className="bg-red-dark p-6 m-2">3</div>
                </div>
            </div>

            <div className="py-5">
                <h2 className="text-xl py-2">Flex-col (col - coluna) - Distribui os elementos na colunas.</h2>
                <div className="flex flex-col bg-green-light text-white">
                    <div className="bg-green-dark p-6 m-2 ">1</div>
                    <div className="bg-green-dark p-6 m-2">2</div>
                    <div className="bg-green-dark p-6 m-2">3</div>
                </div>
            </div>

            <div className="py-5">
                <h2 className="text-xl py-2">Flex-wrap (col - coluna) - adaptabilidade dos elementos em telas menores</h2>
                <div className="flex flex-row flex-wrap bg-yellow-light text-white">
                    <div className="bg-yellow p-6 m-2 ">1</div>
                    <div className="bg-yellow-dark p-6 m-2">2</div>
                    <div className="bg-yellow p-6 m-2">3</div>
                    <div className="bg-yellow-dark p-6 m-2 ">4</div>
                    <div className="bg-yellow p-6 m-2">5</div>
                    <div className="bg-yellow-dark p-6 m-2">6</div>
                </div>
            </div>

            <div className="py-5">
                <h2 className="text-xl py-2">Order - ordenar os elementos  </h2>
                <div className="flex flex-row flex-wrap bg-gray-light text-white ">
                    <div className="bg-gray-dark p-6 m-2 order-last">1</div>
                    <div className="bg-gray-dark p-6 m-2">2</div>
                    <div className="bg-gray-dark p-6 m-2">3</div>
                    <div className="bg-gray-dark p-6 m-2 ">4</div>
                    <div className="bg-gray-dark p-6 m-2">5</div>
                    <div className="bg-gray-dark p-6 m-2 order-first">6</div>
                </div>
                <div className="flex flex-row flex-wrap bg-gray-light text-white ">
                    <div className="bg-gray-dark p-6 m-2 lg:order-3">1</div>
                    <div className="bg-gray-dark p-6 m-2">2</div>
                    <div className="bg-gray-dark p-6 m-2">3</div>
                </div>
            </div>
        </div>

    )
}
export default Flexbox