import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/js/material-dashboard-react/components/cardBodyStyle.jsx";
// @material-ui/icons

const useStyles = makeStyles(styles);

export default function CardBody(props) {
    const classes = useStyles();
    const {className, children, plain, profile, ...rest} = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [classes.cardBodyPlain]: plain,
        [classes.cardBodyProfile]: profile,
        [className]: className !== undefined
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
}

CardBody.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    profile: PropTypes.bool,
    children: PropTypes.node
};
