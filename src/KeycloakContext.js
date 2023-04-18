import React from 'react';
import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8080/',
  realm: 'reporting',
  clientId: 'react-app',
};

const keycloak = new Keycloak(keycloakConfig);

export const KeycloakContext = React.createContext(keycloak);
