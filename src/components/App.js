import mainRoutes from 'constants/routes/mainRoutes';
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import Navigation from './Navigation';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <>
          <Navigation />

          <Container>
            <Suspense fallback={null}>
              <Routes>
                {Object.values(mainRoutes).map(
                  ({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                  )
                )}
                <Route
                  path="*"
                  element={<Navigate to={mainRoutes.contacts.path} />}
                />
              </Routes>
            </Suspense>
          </Container>
        </>
      ) : (
        <Spinner
          animation="border"
          role="status"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default App;
