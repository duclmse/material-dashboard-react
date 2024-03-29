import React from "react";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles";

import styles from "../../assets/js/material-dashboard-react/components/typographyStyle.jsx";

const useStyles = makeStyles(styles);

export default function Muted(props) {
    const classes = useStyles();
    const {children} = props;
    return (
        <div className={`${classes.defaultFontStyle} ${classes.mutedText}`}>
            {children}
        </div>
    );
}

Muted.propTypes = {
    children: PropTypes.node
};
