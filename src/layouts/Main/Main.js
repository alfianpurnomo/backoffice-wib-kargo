import React, { useState, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { connect } from 'react-redux'
import { Sidebar, Topbar, Footer } from './components';
import routes from '../../config/Routes'
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));
const loading = () => (<></>)
const Main = props => {
  
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <Suspense fallback={loading()}>
            <Switch>
                {
                    
                  routes.private.map((route, idx) => {
                      return route.component ? (
                          <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              render={props => {
                                  return (
                                      <route.component
                                          {...props}
                                          title={route.name}
                                          tag={route.tag}
                                      />
                                  )
                              }}
                          />
                      ) : null
                  })
                            
                }
            </Switch>
        </Suspense>
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps)(Main)

