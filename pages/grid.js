import React from 'react'

const Grid = () => {
    return (

        <div className="m-5 p-5">
            <h1 className="text-2xl">
                Eu sou o Grid! Organizo o layout através de linhas e colunas.
            </h1>
            <div className="py-5">
                <h2 className=" text-xl py-2">Grid-cols-x - determina o número de colunas</h2>
                <div className="grid grid-cols-3">
                    <div className="bg-red-dark">1</div>
                    <div className="bg-red-light">2</div>
                    <div className="bg-red-dark">3</div>
                    <div className="bg-red-light">4</div>
                    <div className="bg-red-dark">5</div>
                    <div className="bg-red-light">6</div>
                    <div className="bg-red-dark">7</div>
                    <div className="bg-red-light">8</div>
                    <div className="bg-red-dark">9</div>
                </div>
            </div>

            <div className="py-5">
                <h2 className="text-xl py-2">Grid-cols-x - controlar o número de colunas</h2>
                <div className="grid grid-cols-6 ">
                    <div className="col-span-1 bg-yellow">
                        <ul>
                            <li>Home</li>
                            <li>Produto</li>
                            <li>Contato</li>
                            <li>Blog</li>
                        </ul>

                    </div>
                    <div className="col-span-5 bg-yellow-light">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    </div>
                </div>

                <div className="grid grid-cols-4 py-5 text-white">
                    <div className="col-span-4 bg-gray-dark">
                        Barra de Navegação
                    </div>
                    <div className="col-span-1 bg-gray">
                        <div>Barra Lateral Esquerda</div>
                    </div>
                    <div className="col-span-2 bg-gray-light">
                        <p>
                            Eiusmod nisi esse elit sit cupidatat cillum ipsum non mollit enim commodo do. Consequat nulla fugiat do sint. Officia do velit nulla qui amet culpa ullamco duis dolore cillum voluptate nisi consequat. Occaecat proident cupidatat amet velit tempor adipisicing amet. Veniam voluptate aliquip cupidatat ex proident laboris et ex in deserunt pariatur.
                            Ad sunt ea ullamco id sunt fugiat. Sint consectetur anim duis occaecat ullamco ullamco. Ea duis culpa nulla magna ex Lorem commodo magna officia proident mollit ipsum. Ut amet ullamco laboris Lorem irure ex. Tempor enim adipisicing excepteur consectetur esse laboris est cillum magna laboris ut sint. Ut ea id anim nisi ad consequat elit consectetur ipsum laborum ex eiusmod ad.
                        </p>
                    </div>
                    <div className="col-span-1 bg-gray">
                        <div>Barra Lateral Direita</div>
                    </div>
                    <div className="col-span-4 bg-gray-dark">
                        Footer
                    </div>
                </div>

                <div className="grid grid-cols-4 text-white">
                    <div className="col-span-4 bg-blue-dark ">
                        Barra de Navegação
                    </div>
                    <div className="col-span-1 bg-blue">
                        <div>Barra Lateral Esquerda</div>
                    </div>
                    <div className="col-span-3 bg-blue-light">
                        <p>
                            Eiusmod nisi esse elit sit cupidatat cillum ipsum non mollit enim commodo do. Consequat nulla fugiat do sint. Officia do velit nulla qui amet culpa ullamco duis dolore cillum voluptate nisi consequat. Occaecat proident cupidatat amet velit tempor adipisicing amet. Veniam voluptate aliquip cupidatat ex proident laboris et ex in deserunt pariatur.
                            Ad sunt ea ullamco id sunt fugiat. Sint consectetur anim duis occaecat ullamco ullamco. Ea duis culpa nulla magna ex Lorem commodo magna officia proident mollit ipsum. Ut amet ullamco laboris Lorem irure ex. Tempor enim adipisicing excepteur consectetur esse laboris est cillum magna laboris ut sint. Ut ea id anim nisi ad consequat elit consectetur ipsum laborum ex eiusmod ad.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h2 className="text-xl py-2">Grid-rows-x - controlar o número de linhas</h2>
                <div className="grid grid-rows-3 grid-flow-col">
                    <div className="bg-green">1</div>
                    <div className="bg-green-light">2</div>
                    <div className="bg-green">3</div>
                    <div className="bg-green-light">4</div>
                    <div className="bg-green">5</div>
                    <div className="bg-green-light">6</div>
                    <div className="bg-green">7</div>
                    <div className="bg-green-light">8</div>
                </div>
            </div>
            <div className="py-5">
                <h2 className="text-xl py-2">Gap-x - controlar o espaço entre linhas e colunas</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div className="bg-red">1</div>
                    <div className="bg-red-light">2</div>
                    <div className="bg-red">3</div>
                    <div className="bg-red-light">4</div>
                    <div className="bg-red">5</div>
                    <div className="bg-red-light">6</div>
                    <div className="bg-red">7</div>
                    <div className="bg-red-light">8</div>
                </div>
            </div>
        </div>
    )
}
export default Grid