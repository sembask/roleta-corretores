const admin = require('firebase-admin');

console.log("Configuração do Firebase: ", {
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n').slice(0, 30) + '...' : 'N/A',
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  UNIVERSE_DOMAIN: process.env.UNIVERSE_DOMAIN
});

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMxO/Luer2A99Q\nQKmnIt2Fh03zRJF6PuQfBB6hWhKEPceH2gKTNn2R6YBFMuDOnmIZ3HKo68kHPQVI\ncjulGY3/ty9sS7I0WEI/aetP+zCUdf1BMS1GDGPfvFFqodqPyk8fVYpcbaRwCWn4\nJ6rgbvHaHCecDvRDs6cwSOyelFEwbyjjhozNOO+rB8VTV5REppQ42To6oYr3lr7o\n3mbOC9Wpt0ErPf2UYIvoTnon1ywsow9v/ZT+crhBYPYnTVaAbSzrAsHIiC+xYhEl\ncJa6uJdO2325zdkTVaHrKXxa0RZYgGeRAdVatjCc21p0JEtqOi4QLCO6Qk0zikcu\nJJ9bSRhbAgMBAAECggEACdHBiOOZDUPxajftT1d99WLW7arEzpMxxrOOTQo0kNKS\nvQ24kr+Ank8PfS+5jFgXt+6dn0KplDTaLrecxporipyuWsfSe22K6gPaaneYMhHF\n0oZZCd6/qZzS786Ik0syuiBd2FP387SUbwnUgAix8ugMJ+xd8WwJU2i3QTik+3sX\nuWCkl6qefH9hEwjVIh+4vQn9xQAhx/yrqsJKFxiL2BahoxCgJuLXBp3FYhU6az10\nH8tLUCpaKqPghLfUCPNNaj9ul2QfrSUuV+ncRXgnxLf8EX1iAxUDIWr/alKvVSuT\nHloHm2RMqwea2q/OA9Ne9NKgeWp4EA16OoZoHGUFQQKBgQDxMg22j1JprgMaEhuo\nzUPPjoSrJkWL+Qb65Ik2ijULYBUG4RJZzRLTf4P55Capocz3mRMXajKeO154dYKi\n4WwKAriKa9i7MW/v4ygX6e4/OGLZ/a5zkPxfQc69eFiZZGYATOraG5Zr1sYJpifO\nEoQtGlYOqeC+EdAs0WzSrsa8+wKBgQDZVoLtsyjsNX3MHl2qLN/+DgK7c6CCM8lu\ncGt2UpbcqzSJlcEEOt7ICRIjRjYhYfdeROKsZ0cdbAzSwh0HjYKOLZCt2ga57UY/\nhM5rwyzmnXS/N6twyEjP0SFsm+V47WVtGiBvF6jMwM0YS59oOn6DdsKryBL1nzXK\nuBXs0ct0IQKBgGl8EI9FAzAA0I54WOxsSTnfBJqtdEEROkJD7NaTfztoXAnUKWho\nzdD9tcR2SYpqnu+yXK0i3txg7qIUEnwVxmBibD7th63moyPw3roGrxGrIWBhGAim\n4hju+PHYTjdXt1xuR0/4PMMQ/S9/IW14n6HyIKztEsNNmxPey48grP49AoGAfb/X\na27w65KboaGkMhVa2KUEoa7qHMuX7aVwF/r7PNx2PnD+R9NEGVteOjiikzgap1mW\nCYiMFhLxbHRR1Y/kDR2CC4UNxT/rGE9gG+vGq/xIk2bDdDL+JffrreqZoBlDSRgH\n0h9PVIDtafQ/XFAT6T6qrjfJ+IHQ3uUaEnbkj+ECgYEAwVKEjgyGm3frbBKUkQkP\nFRoHau0V8fzilB/Ij3oVUV8Ml7lNVsL43UmsdoEtMJDPifla2csKCb99ZXGHfgAa\nhkz8cBZvBfSneYC6TafgHxqB7NAvv5MjrbifiPdYNTwP1hhrlU094mn26ULzJUbP\nog+84hVjhmLuwowmQ/0gHu0=\n-----END PRIVATE KEY-----\n",
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL,
  "universe_domain": process.env.UNIVERSE_DOMAIN
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
