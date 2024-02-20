import {useLocation, useNavigate} from "react-router-dom";
import {logoutUser, setUser} from "../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setLoading} from "../store/sessionSlice";

export function Header() {
    const menu = [
        {
            name: 'Home',
            link: '/home',
        },
        {
            link: '/contact-us',
            name: 'Contact-us',
        }
    ]
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    const data = useSelector(state => state.user)

    // Header logic
    const onLogoutClicked = () => {
        dispatch(logoutUser());
    }

    const onLoginClicked = () => {
        navigate('/login');
    }

    return (
        <>
            {location.pathname === '/auth'
                ? ''
                : <div className="d-flex mb-5 justify-content-between align-items-center pt-2">
                    <div className="logo">
                        <img width="100"
                             src="https://seeklogo.com/images/C/creative-honey-logo-DF1AD5F440-seeklogo.com.png"
                             alt="Logo"/>
                    </div>
                    <ul className="nav-item d-flex gap-5 list-unstyled">
                        {
                            menu.map((menuItem) => {
                                return (
                                    <li key={menuItem.link} onClick={() => navigate(menuItem.link)}>
                                        <span className={`${location.pathname === menuItem.link
                                            ? 'active'
                                            : 'text-black'} cursor-pointer text-decoration-none link-warning list-unstyled fw-bold`}>{menuItem.name}</span>
                                    </li>
                                )
                            })
                        }
                        <div className="position-relative"><i className=" cursor-pointer  fa fa-cart-shopping fw-bold text-black">30</i></div>
                        <div className="d-flex gap-3 align-items-center">
                            {
                                data.user ?
                                    <div className="d-flex gap-3">
                                         <div className="fw-bold text-black">{data.user.name}</div>
                                        <div
                                            className="cursor-pointer  text-decoration-none text-black list-unstyled fw-bold"
                                            onClick={onLogoutClicked}><i className="fa fa-sign-out"></i>
                                        </div>
                                    </div>
                                    : <div
                                        className="cursor-pointer  text-decoration-none text-black list-unstyled fw-bold"
                                        onClick={onLoginClicked}>Login
                                    </div>
                            }
                        </div>
                    </ul>
                </div>
            }
        </>
    )
}