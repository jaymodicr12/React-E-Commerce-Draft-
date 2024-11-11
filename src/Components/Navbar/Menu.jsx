import React from 'react'

const Menu = () => {
    return (<>
        <li class="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
            <a id="dropdown-end-2" class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" href="#" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                Products
                <span class="icon-[tabler--chevron-up] dropdown-open:rotate-180 size-4 lg:rotate-180 lg:dropdown-open:rotate-0"></span>
            </a>
            <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                <li><a class="dropdown-item" href="#">Templates</a></li>
                <li><a class="dropdown-item" href="#">UI kits</a></li>
                <li class="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-sm:[--placement:bottom] rtl:[--placement:left-start]">
                    <a id="nested-dropdown-2" class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" href="#" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Components
                        <span class="icon-[tabler--chevron-down] size-4 rtl:rotate-180 lg:-rotate-90" ></span>
                    </a>
                    <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                        <li><a class="dropdown-item" href="#">Basic</a></li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Advanced
                                <span class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                            </a>
                        </li>
                        <li class="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start] max-sm:[--placement:bottom] rtl:[--placement:left-start]">
                            <a id="nested-dropdown-2" class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" href="#" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                Vendor
                                <span class="icon-[tabler--chevron-down] size-4 rtl:rotate-180 lg:-rotate-90"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Data tables
                                        <span class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Apex charts
                                        <span class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                    </a>
                                </li>
                                <li><a class="dropdown-item" href="#">Clipboard</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a class="dropdown-item" href="#">About</a></li>
        <li><a class="dropdown-item" href="#">Careers</a></li>
    </>)
}

export default Menu
