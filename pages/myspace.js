import MySpace from "../Components/MySpace/MySpace";
import NavbarMySpace from "../Components/MySpace/NavbarMySpace";

function myspace() {
    return (
        <>
            <div className={`container-myspace mx-auto`}>
                <NavbarMySpace />
                <MySpace />
            </div>
        </>
    )
}

export default myspace