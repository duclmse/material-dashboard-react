import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/js/material-dashboard-react/components/cardHeaderStyle.jsx";
// @material-ui/icons

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
    const classes = useStyles();
    const {className, children, color, plain, stats, icon, ...rest} = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[`${color}CardHeader`]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderStats]: stats,
        [classes.cardHeaderIcon]: icon,
        [className]: className !== undefined
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}

CardHeader.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    plain: PropTypes.bool,
    stats: PropTypes.bool,
    icon: PropTypes.bool,
    children: PropTypes.node
};
