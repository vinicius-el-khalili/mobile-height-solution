import style from "./Layout.module.scss"

const Layout = ({children, height, width}) => {
    return (
        <div className={style.Layout} style={{height:`${height}px`}}>
            <div className={style.above}>HEIGHT:{height}</div>
            <div className={style.childrenContainer}>{children}</div>
            <div className={style.below}>HEIGHT:{height}</div>
        </div>
    );
}
 
export default Layout;