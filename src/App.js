import React, { Suspense } from 'react';
import { Switch,BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { PublicRoute, PrivateRoute } from './helpers/Routes'
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

import Routes from './config/Routes'
import { Main as MainLayout } from './layouts';


const loading = () => {
  return(
    <></>
  )
}
const App = () =>{
  return (
      <ThemeProvider theme={theme}>
        <Router basename={'/'}>
            <Suspense fallback={loading()}>
                <Switch>

                    {Routes.public.map((route, idx) => {
                        return route.component ? (
                            <PublicRoute
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={props => {
                                    return <route.component {...props} title={route.name} />
                                }}
                            />
                        ) : null
                    })}
                    <PrivateRoute path="/" component={MainLayout} />
                </Switch>
            </Suspense>
        </Router>
      </ThemeProvider>
  )
}

export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <ThemeProvider theme={theme}>
//         <Router>
//           <Switch>
//             {Routes.public.map((route, idx) => {
//                 return route.component ? (
//                     <PublicRoute
//                         key={idx}
//                         path={route.path}
//                         exact={route.exact}
//                         name={route.name}
//                         component={props => {
//                             return <route.component {...props} title={route.name} />
//                         }}
//                     />
//                 ) : null
//             })}
//             {/* <PrivateRoute path="/" component={DefaultLayout} /> */}
//           </Switch>
//         </Router>
//       </ThemeProvider>
//     );
//   }
// }
