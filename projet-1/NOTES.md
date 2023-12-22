# Notes

Options d'une commande

Forme longue: 
--no-verify
=> 2 tirets

Forme courte:
-nv
=> 1 tiret

# Volta

## Installation

En administrateur : 
```
volta install node
volta install typescript
```

## Pinner une version à un projet spécifique

Pour pinner une version à un projet.

```
volta pin node@[laversion]
```

# Package managers

## NPM

=> lent mais complet

## Yarn

=> plus rapide mais un peu moins de features.


### Installer un package

```
yarn add <lepackage> 
```

`@types/<lepackage>` => installe les types d'un package qui ne possède pas de types.

[Exemple de package](https://www.npmjs.com/package/mime-types)
symbole bleu sur npm => types
symbole vide => types installable avec @types/
pas de symbole, pas de typage pour le package.

## Bun

Très rapide.
Run time, c'est à dire que l'on peut remplacer node par bun. Avec certaines instabilités vu que c'est nouveau.

```
bun install
bun add <lepackage>
```

## PNPM

Installation

```
volta install pnpm
```

### Ajouter un package

```
pnpm add <lepackage>
```

