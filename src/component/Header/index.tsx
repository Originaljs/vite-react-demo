import Style from './input.module.less'
import { NavLink } from 'react-router-dom'
export default function () {
    return (
        <header className={Style.header}>
            <nav className={Style.headerNav}>
                <ul className={Style.headerNavList}>
                    {/* <NavLink><li></li></NavLink>
                    <NavLink><li></li></NavLink>
                    <NavLink><li></li></NavLink>
                    <NavLink><li></li></NavLink> */}
                </ul>
            </nav>
        </header>
    )
}