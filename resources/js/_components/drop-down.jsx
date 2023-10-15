import { useState } from "react";
import { Link } from "@inertiajs/react";
export default function DropDownComponent() {
    const [hide, setHide] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setHide(!hide)}
                type="button"
                className=" mt-1 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
            >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </button>
            <div
                className={`${
                    hide ? "" : "hidden"
                } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
            >
                <div className="py-1">
                    <Link
                      href={route('profile.edit')}
                        className="text-gray-700 block px-4 py-2 text-sm"
                    >
                        Account settings
                    </Link>
                    <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                    >
                        Support
                    </a>
                    <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                    >
                        License
                    </a>
                    
                        <Link
                            method="post" 
                            href={route('logout')}
                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        >
                            Sign out
                        </Link>
                  
                </div>
            </div>
        </div>
    );
}
