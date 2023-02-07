import React, { Component } from "react";
// import {Link} from "react-router-dom";

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default class Navbar extends Component {
  render() {
    console.log(this.props.totalCart);
    return (
      <>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <AppBar
          position="static"
          color="primary"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              E-Commerce App
            </Typography>

            <Link href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              {this.props.totalCart > 0 && (
                <Badge badgeContent={this.props.totalCart} color="success">
                  <ShoppingCartIcon color="action" />
                </Badge>
              )}
              {/* <Badge badgeContent={4} color="success">
                <ShoppingCartIcon color="action" />
              </Badge> */}
            </Link>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
