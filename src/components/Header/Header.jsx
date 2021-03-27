import s from './Header.module.scss';

const Header =()=>{
    return(
        <div className={s.header}>
            <div className="container">
                <div className={s.inner}>
                    <a href="/" className={s.logo}>
                        <img className={s.img} src="http://demo.nrgthemes.com/projects/nrgnetwork/img/logo.png" alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Header;