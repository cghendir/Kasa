import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="erreur-lien">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
