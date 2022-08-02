# Réalisation de l'application finale de la formation next udemy

`npx create-next-app`

`npm install axios js-cookie jwt-decode mdbreact moment-timezone nprogress react-moment react-paginate swr`

allez sur npms pour importer les styles de mdbreact et les coller dans \_app.js, on peut allez sur mdbootstrap.com pour chécker la doc (cette librairie fonctionne bien côté serveur)

# crétion du composant Header et Layout

On crée le composant header grâce a mdbreact <a>https://mdbootstrap.com/docs/react/</a>

On crée ensuite le composant Layout pour englober notre app avec

Le footer

# Récupération des biens sponsorisés avec getStaticProps sur https://aqueous-meadow-07678.herokuapp.com/api/properties/vip

On récupére la liste des biens sponsorisés et on la rend dans le composant propertyVip grace a mdbReact, on crée une fonction de formatage de prix dans helpers.js pour mettre en forme le prix
