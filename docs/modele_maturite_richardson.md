Le Modèle de Maturité de Richardson est un modèle qui décrit les niveaux de conformité et de sophistication des API RESTful. Il a été développé par Leonard Richardson et est souvent utilisé comme une échelle pour évaluer à quel point une API suit les principes REST. Le modèle comporte quatre niveaux (de 0 à 3), où chaque niveau introduit de nouvelles contraintes pour améliorer l'architecture de l'API.

Niveau 0 : Le Point de départ

Les API de niveau 0 n'utilisent qu'un seul point d'accès (URI) et un seul verbe HTTP (souvent POST) pour l'ensemble de leurs opérations. Les actions et les ressources sont déterminées en fonction des paramètres envoyés avec chaque requête. Les API de ce niveau sont très éloignées des principes REST et sont considérées comme les moins conformes.
Niveau 1 : Ressources

Les API de niveau 1 introduisent des identifiants de ressources uniques (URI) pour distinguer les ressources individuelles. Cependant, elles continuent d'utiliser un seul verbe HTTP (souvent POST) pour toutes les actions. Bien que ce niveau améliore la gestion des ressources, il ne respecte toujours pas pleinement les principes REST.
Niveau 2 : Verbes HTTP

Les API de niveau 2 exploitent les verbes HTTP standard (GET, POST, PUT, DELETE, etc.) pour décrire les actions sur les ressources. Elles utilisent également les codes de statut HTTP appropriés pour indiquer les résultats des requêtes. Les API de ce niveau sont plus conformes aux principes REST et offrent une meilleure interaction entre le client et le serveur.
Niveau 3 : Hypermedia (HATEOAS)

Les API de niveau 3 implémentent le principe HATEOAS (Hypermedia as the Engine of Application State), qui permet aux clients de découvrir des actions et des ressources disponibles via des liens hypermédia renvoyés par le serveur. Les API de ce niveau sont considérées comme les plus conformes aux principes REST et offrent la meilleure évolutivité, maintenabilité et flexibilité.
En résumé, le Modèle de Maturité de Richardson est un outil utile pour évaluer et améliorer la qualité et la conformité des API RESTful. Les API qui atteignent un niveau supérieur sont généralement plus faciles à utiliser, à maintenir et à faire évoluer.
