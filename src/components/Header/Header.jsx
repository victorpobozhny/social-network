import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
        <img
          className={s.logo}
          src="https://image.flaticon.com/icons/png/512/1253/1253332.png"
          alt="PrimeBook"
        ></img>
        <div className={s.headerText}>ANDREY PUPSEN</div>
      </header>
    )
}

export default Header;