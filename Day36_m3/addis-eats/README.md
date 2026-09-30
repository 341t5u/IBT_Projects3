# Addis Eats - Next.js App Router Mini-Project

An exploration of file-system-based routing using Next.js App Router.

## Route Map

| URL Route     | File Path               | Description                                     |
| :------------ | :---------------------- | :---------------------------------------------- |
| `/`           | `app/page.js`           | Home page                                       |
| `/menu`       | `app/menu/page.js`      | Full menu listing page                          |
| `/menu/[id]`  | `app/menu/[id]/page.js` | Dynamic dish details page (reads `params`)      |
| `/cart`       | `app/cart/page.js`      | Shopping cart page                              |
| `/checkout`   | `app/checkout/page.js`  | Checkout page                                   |
| `404 Handler` | `app/not-found.js`      | Triggered by invalid URLs or `notFound()` calls |

## Colocated Components

- `app/menu/DishList.jsx`: Renders the menu list within `/menu`. Because it does not use the `page.js` naming convention, it is **not routable** directly via URL.

## Special Segment Files

- `app/menu/loading.js`: Renders automatically when navigating to `/menu` while async server work completes.
- `app/menu/error.js`: Handles uncaught exceptions within the menu segment (`"use client"`).
