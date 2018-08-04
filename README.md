# enojs-exploaders

Experimental loaders for the [enojs](https://eno-lang.org/javascript/) library

## Installation

```
npm install enojs-exploaders
```

## Currently available loaders

These loaders are currently available in the experimental track:

- `slug` (accepts only strings using the `0-9A-Za-z_-` set of characters)
- `enum` (generate the loader with `enumFactory(choices)`, the returned loader accepts any of `choices`, returns the value unaltered or throws an error)

## Example

You can use the loaders with enojs as demonstrated in this example.

```js
const eno = require('enojs');
const { enumFactory, slug } = require('enojs-exploaders');

const doc = eno.parse(`
  good-slug: the-article
  bad-slug: The Article!
  
  good-choice: sunscreen
  bad-choice: motor oil
`);


doc.field('good-slug', slug);
  // returns 'the-article'

doc.field('bad-slug', slug);
  // throws an error "'bad-slug' must be a slug" through enojs
  
  
const beachItem = enumFactory(['beach ball', 'sunscreen', 'shovel']);  
  
doc.field('good-choice', beachItem);
  // returns 'sunscreen'

doc.field('bad-choice', beachItem);
  // throws an error: 'bad-choice' must be one of 'beach ball', 'sunscreen', 'shovel'.
```

## Purpose

Trying out new, innovative, cool and stupid loader ideas and seeing how they fit
into real life usecases. Based on the findings they might be repackaged, integrated
into the enojs core, or who knows what!

## Questions to explored

### Core loaders

Are there more loaders not yet thought of that are so essential that they should
be bundled up with the enojs library itself?

### Translations

There could be a considerable amount of useful loaders, which all will require
one or multiple error messages each - how can the translations for this be
managed, versioned, updated, etc.?

From the insights gained with the core eno libraries it is safe to say that if
there is to be some form of a shared translation repository, it should probably
be shared by all (exp)loaders packages across different programming languages.

### Categorization

How should the loaders be categorized? Types (numbers, strings, ...)? Fields
(IT, Communication, Geography)? Countries (International, country specific)?

### API

How are the loaders imported, accessed and used in applications?

#### Scope

What kinds of loaders are actually sensible and useful to bundle for everyone,
and where do we reach the limit of including too much bloat?
