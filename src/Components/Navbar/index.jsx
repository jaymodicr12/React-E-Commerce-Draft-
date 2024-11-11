import React from "react";
import Menu from "./menu.jsx";

const Navbar = () => {
    return (
        <div class="h-96 max-sm:h-[31.25rem]">
            <nav class="navbar rounded-box shadow">
                <div class="navbar-start">
                    <a class="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">
                        FlyonUI
                    </a>
                </div>
                <div class="navbar-center max-sm:hidden">
                    <ul class="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                        <li class="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
                            <a id="dropdown-end-2" class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" href="#" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Products
                                <span class="icon-[tabler--chevron-up] dropdown-open:rotate-180 size-4 lg:rotate-180 lg:dropdown-open:rotate-0"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                            
                            </ul>

                        </li>
                        <Menu></Menu>
                    </ul>
                </div>
                <div class="navbar-end items-center gap-4">
                    <div class="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
                        <button id="dropdown-default" type="button" class="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <span class="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                            <span class="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                            <Menu></Menu>
                        </ul>
                    </div>
                    <a class="btn btn-primary" href="#">Login</a>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
