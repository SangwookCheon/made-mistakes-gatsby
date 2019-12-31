import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from '../styles/menu.module.css'

const MainMenu = ({ mainMenu }) => {
  const menu = mainMenu.slice(0)

  const items = menu.map((menuItem, index) => (
    <li key={index} className={style.primaryMenuItem}>
      <Link
        to={menuItem.path}
        itemProp="url"
        activeStyle={{ textDecoration: 'line-through' }}
        partiallyActive
      >
        {menuItem.title}
      </Link>
    </li>
  ))

  return <ul className={style.primaryMenu}>{items}</ul>
}

const Menu = ({
  mainMenu,
  menuMoreText,
  isMenuVisible,
  onToggleMenu,
  onChangeTheme,
}) => {
  return (
    <>
      <nav
        id="nav-primary"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
        aria-label="Primary navigation"
        className={
          isMenuVisible
            ? style.primaryNavigationIsVisible
            : style.primaryNavigation
        }
      >
        <MainMenu mainMenu={mainMenu} />
      </nav>
      <div className={style.siteControls}>
        <button
          className={style.menuToggle}
          onClick={onToggleMenu}
          type="button"
          aria-label="Menu"
        >
          {menuMoreText}
        </button>
        <button
          className={style.themeToggle}
          onClick={onChangeTheme}
          type="button"
          title="Toggle dark mode"
        >
          <div className={style.themeToggleInner}>
            <div className={style.themeToggleIcon} />
            <div className="sr-only">Toggle dark mode</div>
          </div>
        </button>
      </div>
    </>
  )
}

Menu.propTypes = {
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  menuMoreText: PropTypes.string,
  isMenuVisible: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onChangeTheme: PropTypes.func,
}

export default Menu
