Modèle client-serveur : L'architecture REST sépare les responsabilités entre le client et le serveur. Le serveur se concentre sur la gestion des données et la logique métier, tandis que le client est responsable de la présentation des données et de la gestion des interactions utilisateur. Cette séparation permet une meilleure évolutivité, une meilleure organisation et une indépendance entre les deux parties.

Stateless (sans état) : Chaque requête envoyée par le client au serveur doit contenir toutes les informations nécessaires pour que le serveur comprenne et traite la demande. Le serveur ne doit pas stocker d'informations sur l'état de la session entre les requêtes. Cela permet de simplifier le serveur et d'améliorer sa performance et sa fiabilité.

Mise en cache : Les réponses du serveur peuvent être mises en cache par le client afin d'améliorer les performances et de réduire la charge sur le serveur. Les réponses doivent indiquer si elles peuvent être mises en cache ou non, et pendant combien de temps.

Interface uniforme : Les API REST doivent suivre un ensemble de conventions pour faciliter leur utilisation et leur compréhension. Cela inclut l'utilisation des verbes HTTP standard (GET, POST, PUT, DELETE, etc.), la gestion des ressources via des URI uniques et la fourniture de réponses structurées (généralement en JSON ou XML).

Système en couches : Les API REST peuvent être conçues en utilisant une architecture en couches pour séparer les différentes préoccupations, telles que la logique métier, la gestion des données, l'authentification et la gestion des erreurs. Cela permet une meilleure organisation et une évolutivité accrue.
