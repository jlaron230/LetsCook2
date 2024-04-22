import footer from '../../images/footer.svg'
import download from '../../images/download.jpg'

const Footer = () => {
    return (
        <footer>
            {/* Image du pied de page */}
            <div>
                <img src={footer} alt="footer"/>
            </div>

            {/* Section principale du pied de page */}
            <div className="py-10 bg-red-800 flex justify-center flex-col items-center whitespace-nowrap:bg-slate-900">
                {/* Bouton de téléchargement */}
                <div className='flex flex-end mr-8 justify-end w-full'>
                    <button className="duration-300 text-dark-3 hover:text-dark dark:text-dark-4 dark:hover:text-dark-6">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9062 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9062 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9062 18.625 17.625L11 10Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                {/* Section de téléchargement */}
                <div className="flex justify-center">
                    <div className="border-l-yellow dark:bg-dark-2 flex max-w-[800px] items-center rounded-md p-5 pl-6">
                        {/* Image de téléchargement */}
                        <div className="bg-yellow mr-5 flex max-w-72 w-full items-center justify-center rounded-full">
                            <img src={download} alt="downolad"/>
                        </div>

                        {/* Contenu du téléchargement */}
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <h3 className="mb-1 text-lg font-medium text-white dark:text-white">
                                    Téléchargez Notre Livre de Recettes Gratuit !
                                </h3>
                                <p className="text-sm text-body-color text-white dark:text-dark-6">
                                    Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !
                                </p>
                                {/* Bouton de téléchargement */}
                                <button className='bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                    Get Started
                                </button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mention de droit d'auteur */}
            <div className='flex justify-center bg-red-900'>@Copyright 2024 Let's Cook</div>
        </footer>
    )
}

export default Footer;
