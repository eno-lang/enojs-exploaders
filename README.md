# enojs-exploaders

Experimental loaders for the [enojs](https://eno-lang.org/javascript/) library

## Currently available loaders

These loaders are already implemented as a first draft:

- `loaders.boolean` (accepts `true`, `false`, `yes` and `no`)
- `loaders.color` (accepts `#RRGGBB` or `#RGB`)
- `loaders.email`
- `loaders.float`
- `loaders.integer`
- `loaders.latLng`
  - Accepts `dd.dddddd, dd.dddddd`
  - Returns `{ lat: [float], lng: [float] }`
- `loaders.number` (alias for `integer`)
- `loaders.url` (accepts `http(s)://example.com`)

Note that some loaders only perform validation and return their input unaltered
as string (e.g. `color`, `email`), while others both validate and transform the
value into a new type (e.g. `float`, `boolean`) or even object (e.g. `latLng`).

## Example

You can use the loaders with enojs as demonstrated in this example.

```js
const eno = require('enojs');
const loaders = require('enojs-exploaders');

const doc = eno.parse(`
  publish: yes
  location: 36.987094, -25.091719
  email: contact@faulty
`);

doc.field('publish', loaders.boolean);
  // returns true
  
doc.field('location', loaders.latLng);
  // returns {
  //   lat:  36.987094,
  //   lng: -25.091719
  // }
  
doc.field('email', loaders.email);
  // throws an error "'email' must be an email address" through enojs
```

## Purpose

This project seeks to sketch out a foundational set of loaders that could soon
be distributed alongside the enojs core library itself, or in the form of one or
multiple peer packages that are officially provided for use with enojs.

## Questions to explored

### Core loaders

Are there loaders that are so essential that they should be bundled up with the
enojs library itself? E.g. do we want loaders for basic programming types (string,
float, int, boolean, Date) to ship out of the box?

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
