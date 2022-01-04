import { Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>

            <Header {...propsRoute} />

            <Component {...propsRoute} />
            <hr />
            <Footer />
        </Fragment>
    }} />
}