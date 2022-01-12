import Navbar from "../../Manage_ENI_Cars-1/components/homepage/Navbar"

export default function profile({ user }) {

    console.log(user)

    return (

        <div className="min-h-screen bg-gray-100 w-full">
            <Navbar />
            <div className="flex flex-row justify-center bg-gray-100 pt-12">
                < div className="flex flex-col" >
                    <div className="p-6 flex">
                        <div className="w-60">
                            <div>
                                <div className="bg-white rounded-md shadow-sm mb-6">
                                    <ul>
                                        <li className="p-4 border-b border-grey-300 font-medium">Paramètres</li>
                                        <div className="p-6 space-y-6">
                                            <li className="font-medium text-sm hover:text-indigo-500 cursor-pointer">Profile</li>
                                            <li className="text-sm hover:text-indigo-500 cursor-pointer">Sécurité</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex">
                        <div className="w-60">
                            <div>
                                <div className="bg-white rounded-md shadow-sm mb-6">
                                    <ul>
                                        <li className="p-4 border-b border-grey-300 font-medium mb-2">Réservation</li>
                                        <div className="p-6 space-y-6">
                                            <li className="text-sm hover:text-indigo-500 cursor-pointer">Mes réservations</li>
                                            <li className="text-sm hover:text-indigo-500 cursor-pointer">Mes trajets</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div>
                            <div className="bg-white rounded-md shadow-sm pb-6">
                                <div className="pl-12 p-4 border-b border-grey-300 font-medium mb-8 w-full">Mon profil</div>
                                <div className="flex flex-row">
                                    <div className="w-1/4 flex justify-center mt-4">
                                        <img className="inline object-cover w-32 h-32 rounded-full" src='http://jingculturecommerce.com/wp-content/uploads/2021/11/rtfkt-murakami-clone-x-4-1024x682.jpg' alt="Profile image" />
                                    </div>
                                    <div className="w-3/4 pr-12">
                                        <div className="grid gap-4 gap-y-6 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label for="full_name">Nom</label>
                                                <input type="text" name="full_name" id="full_name" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="full_name">Prénom</label>
                                                <input type="text" name="full_name" id="full_name" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label for="email">Address mail</label>
                                                <input type="text" name="email" id="email" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" placeholder="email@domain.com" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label for="address">Adresse</label>
                                                <input type="text" name="address" id="address" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="city">Ville</label>
                                                <input type="text" name="city" id="city" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="country">Pays</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="country" id="country" placeholder="Pays" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" />
                                                    <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label for="state">Département</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input name="state" id="state" placeholder="Département" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value="" />
                                                    <button tabindex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                    <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                        <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label for="zipcode">Code postal</label>
                                                <input type="text" name="zipcode" id="zipcode" className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="" value="" />
                                            </div>

                                            <div className="md:col-span-5 text-right">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}