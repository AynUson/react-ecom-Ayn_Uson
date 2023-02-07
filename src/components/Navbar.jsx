import React, { Component } from "react";
import { Link as NavLink, useLocation } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";

export default class Navbar extends Component {
  // changeLink = () => {
  //   <p>Test</p>;
  //   if (this.props.curPage === "/") {
  //     return (
  // <NavLink variant="outlined" sx={{ my: 1, mx: 1.5 }} to="/total">
  //   {this.props.totalCart > 0 && (
  //     <Badge badgeContent={this.props.totalCart} color="success">
  //       <ShoppingCartIcon color="action" />
  //     </Badge>
  //   )}
  //   {/* <Badge badgeContent={4} color="success">
  //       <ShoppingCartIcon color="action" />
  //     </Badge> */}
  // </NavLink>
  //     );
  //   } else {
  //     return (
  //       <NavLink variant="outlined" sx={{ my: 1, mx: 1.5 }} to="/">
  //         {this.props.totalCart > 0 && (
  //           <Badge badgeContent={this.props.totalCart} color="success">
  //             <HomeIcon color="action" />
  //           </Badge>
  //         )}
  //       </NavLink>
  //     );
  //   }
  // };

  render() {
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
              E-Commerce App {this.props.curPage}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item>
                  <NavLink
                    variant="outlined"
                    sx={{ my: 1, mx: 1.5 }}
                    to="/total"
                  >
                    {this.props.totalCart > 0 && (
                      <Badge
                        badgeContent={this.props.totalCart}
                        color="success"
                      >
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    )}
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink variant="outlined" sx={{ my: 1, mx: 1.5 }} to="/">
                    {this.props.totalCart > 0 && <HomeIcon color="action" />}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
