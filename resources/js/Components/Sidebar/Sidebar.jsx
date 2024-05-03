export default function Sidebar(){
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
            <div className="flex flex-grow flex-col overflow-y-auto bg-gray-800 pt-5 pb-4">
                <a className="flex flex-shrink-0 items-center px-4 border-b border-cyan-800" target="_blank" href="http://whykaren.com.wm/home">
                    <div className="w-full pb-2 text-white">

                        <img className="mx-auto h-12 w-auto object-contain" src="https://webmaestro.com.ua/img/wm-white.svg" alt="Laravel"/>
                    </div>
                </a>
                <nav className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                    <div className="space-y-1 px-2">
                        <a href="http://whykaren.com.wm/wmpanel/orders" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path>
                                </svg>
                            </div>
                            Orders
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/categories" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                                </svg>
                            </div>
                            Categories
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/vocabulary" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            Vocabulary
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/cars" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                                </svg>
                            </div>
                            Cars
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/sliders" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"></path>
                                </svg>
                            </div>
                            Sliders
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/pages" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path>
                                </svg>
                            </div>
                            Pages
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/promocode" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 15L15 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14.4945 14.5H14.5035" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9.49451 9.5H9.50349" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </div>
                            Promo codes
                        </a>
                        <a href="http://whykaren.com.wm/wmpanel/frequently-asked-questions" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                            <div className="mr-4 flex-shrink-0 text-cyan-200">
                                <svg className="w-6 h-6" fill="#fff" viewBox="0 -0.06 33.834 33.834" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(-95.748 -577)">
                                        <path d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"></path>
                                        <path d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"></path>
                                    </g>
                                </svg>
                            </div>
                            Frequently Asked Questions
                        </a>
                    </div>
                    <div className="mt-6 pt-6">
                        <div className="space-y-1 px-2">
                            <a href="http://whykaren.com.wm/wmpanel/settings" className=" text-cyan-100 hover:bg-cyan-600 hover:text-white  group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6" aria-current="page">
                                <div className="mr-4 flex-shrink-0 text-cyan-200">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"></path>
                                    </svg>
                                </div>
                                Settings
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="flex flex-shrink-0 bg-gray-700 p-4">
                    <div className="relative ml-3" x-data="{ open: false }">
                    <div className="cursor-pointer">
                        <button type="button" className="flex max-w-xs items-center rounded-full text-white text-sm focus:outline-none lg:p-2" id="user-menu-button">
                            <img className="h-8 w-8 rounded-full" src="/img/avatar.png"/>
                                <span className="ml-3 hidden text-sm font-medium lg:block">Kostya Kostya E</span>

                                <svg className="ml-1 hidden h-5 w-5 flex-shrink-0 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                </svg>
                        </button>
                    </div>

                    <div className="absolute mt-2 w-32 rounded-md shadow-lg origin-top bottom-10 right-0">
                        <div className="rounded-sm ring-1 ring-black ring-opacity-5 py-1 bg-white dark:bg-gray-700 text-gray-700">
                            <form method="POST" action="http://whykaren.com.wm/wmpanel/logout" x-data=""><input type="hidden" name="_token" value="5QdVaxSC1qZ5AZgE5KdgiSwBoUhKBI6QdJZxBJJR" autoComplete="off"/>
                                <a className="cursor-pointer block w-full px-4 py-2 text-left text-sm leading-5 dark:text-gray-300 hover:bg-cyan-100 focus:outline-none focus:bg-cyan-100 transition duration-150 ease-in-out" href="http://whykaren.com.wm/wmpanel/logout">Log out</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}