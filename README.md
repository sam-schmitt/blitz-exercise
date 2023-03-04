# Blitz Exercise

This README contains:

1. A link to a [demo video](https://youtube.com/watch?v=9MaZ0NR4_QM&feature=shares)
2. My [notes](/README.md#my-notes) on my experience
3. Instructions on [installation](/README.md#installation)

## [Demo Video](https://youtube.com/watch?v=9MaZ0NR4_QM&feature=shares)

## My Notes

## The Tree

### Creating the Tree

My [tree](/src/components/Tree.tsx) component has [nodes](/src/components/TreeNode.tsx) that are connected to each other in a parent-child relationship. The tree is represented as a nested data structure, where each node is an object with an id, name, content, and children. The `root` object represents the top-level node of the tree, and it can have any number of child nodes.

The tree supports several operations, as they were specified in the assignment: like adding a new child node to a selected parent node, editing a node's content, and deleting a node. I used the `useState()` hook to manage state and render updates. The code uses recursion to traverse the tree to find the selected node and to update the children's content or when new children are added to a node. This tree data structure is used to represent hierarchical data structures like file systems, organization charts, and family trees, and the **interface builder**.

_A screenshot of a tree with multiple nested children_

!['Tree'](/assets/tree.png)

Creating the tree was a bit complicated at first, as I wanted to use a single state variable to control the state of the entire tree, beginning with a root. Once I began the `addChild` function, then I began to figure out how I was going to relate each node and pursue most of the movement functions.

#### Testing the Tree

As I was coding the tree in React, I decided to test it using both the console and the UI. I began by logging the tree structure to the console and verifying that it matched my expectations.

From there, I used the UI to visualize the tree and identify any issues that needed fixing. As I interacted with the tree in the UI, I noticed that some of the nodes were not behaving as expected.

By examining the console logs and carefully stepping through the code, I was able to identify most of the issues and make some necessary fixes. I learned a lot about state and how it can be managed through a recursive tree. The `createReference` function was the most interesting problem to solve.

_Referrer Group Component_

!['Login Referrer'](/assets/referrer.png)

_Referee Group Component_

!['Login Referee'](/assets/referee.png)

#### What more would I do?

If I were to work on a tree data structure again in the future, there are a few things that I would do differently to improve upon it. I would try to write more comprehensive test cases to cover a wider range of potential scenarios for the data. This would allow me to catch any bugs or errors earlier on to save time.

Additionally, I would make an effort to better organize my code and make it more modular, so that it is easier to read, understand, and maintain over time.

Finally, backend requests can help optimize the performance of the tree by only retrieving the necessary data on-demand. This can help reduce the amount of data that needs to be stored and processed on the client-side, resulting in faster load times and a more responsive user interface.

## The Interface Builder

### Creating the Builder

After creating the tree, I knew I needed to reuse the standard tree component in order to show how dynamic it was. The tree accepts a [`<ContentController />`](/src/components/ContentController.tsx) prop which is what controls how this instance of the Tree will behave.

From reading more about what the assignment was asking, I started to understand the purpose of the B1, B2, R1, R2, and R3 data types. It certainly is a unique way of classifying these kinds of components.

I decided that in order to simplify the UX of the site, I would have to relay to the user an easier way of understanding what the types meant. I separated the types into 3 groups: _sections, text, and components_. These are more common ways of referring to types of building blocks for an application.

!['Types'](/assets/types.png)

I then positioned functional buttons where I thought they were best fitting and began to test the UX.

### Testing the Builder

In order to test UX, I needed more sets of eyes. I asked friends to take a look and only told them that this was a UI interface builder. They struggled a bit at first, which was expected, as this is a fast-built prototype but I was able to get more feedback that I could put back in the design.

This feedback brought me to implement the drag and drop methods using dndkit and I made it so that the wire icon on the left side of each component is where you can initiate a drag action.

!['UI'](/assets/ui.png)

!['Options'](/assets/options.png)

There are still a few bugs to work through, but nothing a few more casual days of debugging wouldn't fix. One thing that was great to add is the ability to see a [preview](/src/components/PreviewController.tsx) of your interface as it is being built.

_Login Form Being Built with Interface Builder_

!['Login Builder'](/assets/login-builder.png)

_Preview of Built Login Form_

!['Login Preview'](/assets/login-preview.png)

### What more would I do for the interface builder?

Coding this up was actually very fun, so I might continue this project afterwards for personal amusement.

> > Not joking.

But some things I would add are flex alignment on all components to have a friendly layout customization interface in the group and page section-types. I would also add robust color customization so that builders could create really vivid themes that fit right with their app.

I also made it very simple to add new component types to the system (which I probably will wind up doing for fun). It's as simple as creating a new editor component and a new preview component and calling them in the [`<ContentController />`](/src/components/ContentController.tsx) and [`<PreviewController />`](/src/components/PreviewController.tsx) respectively.

In terms of UX there are a ton of edge cases unaccounted for in functionality. For example, if a tree moves all the way down to being the last child, it should then automatically move out of the tree it's in and maybe into the next one.

## The TypeDB Backend

### Learning TypeDB

I've never used **TypeDB** before but that didn't stop me from reading into it. I was impressed by its marketing use-cases and saw why it would be a good fit for an exercise like this. I started to play with **TypeDB studio** to get a better grasp on how the data could be related. I wrote out and defined the schema for the Tree and it includes:

- Attributes to be owned by entities and relations
- Entities for the trees and content
- Relations between parent nodes and their children
- Relations between references and trees
- Relations between nodes and their content

I then proceeded to sketch out the schema based on the JSON that my root state outputted from the client. I knew that linking to a DB would increase performance of the tree significantly, as you wouldn't need the entire state of the tree to exist on the client, only the visible nodes. So I designed the [schema](/src/typedb/tql/schema.tql) so that you would only ever need to make requests to smaller pieces of the root tree, and you could request the full tree as you went and expanded.

### Trying Blitz Orm

I'm not going to lie, trying out **Blitz Orm** was a bit difficult but I could see the potential of the new package. Since it is in an early stage, I still made a good attempt to try and get it functional, however, I did experience some compatibility issues with other packages and decided to focus on other aspects of the assignment to better dedicate my time.

I would be very interested in taking a peak into a backend that is already using **Blitz Orm** to its fullest capabilities, so that I could see how well it can fit into a stack. I did take a crack at the [schema](/src/typedb/schema.ts) for **Blitz Orm** and it is based off of the library's syntax.

### What more would I do for the backend?

I definitely want to do more research on **TypeDB** and **TQL** to just satisfy my curiosity, it seems like a very neat DB solution. As for **Blitz Orm**, it would make the best sense to learn from the developer how it should be applied best, if I'd be given the opportunity to do so.

As state in the assignment details, it is difficult to link JSON to **TypeDB**, so I would try different formatting on the client to better fit with **TQL**.

## Final Thoughts

As stated in my brief application (prior to this exercise), **I am very interested in building no-code solutions** as I've been a part of an entrepreneurial community that has always waited for the day that we could build out all of our ideas without needing to focus on so much code work.

> > This exercise was a lot of fun for me, and I would love to continue to work on this problem alongside a strong team of developers, bringing in a polished UX and backend that could serve a distinguished no-code solution to many developers.

Feel free, after assessing this submission, to check out my [portfolio](https://samschmitt.net).

## Installation

### To install this package, please follow these steps

1. Clone this repository
2. Open a terminal and navigate to the project directory
3. Run `npm install` to install all the necessary dependencies

## Usage

### This package contains the following scripts

- `dev`: runs the application in development mode
- `build`: builds the application for production
- `start`: starts the application in production mode
- `lint`: runs ESLint to check for linting errors

To run a script, open a terminal and navigate to the project directory. Then run `npm run [script name]`, where _[script name]_ is the name of the script you want to run.

## Dependencies

### This package has the following dependencies

- @blitznocode/blitz-orm: Blitz ORM
- @dnd-kit/core: DnD Kit core library
- @dnd-kit/sortable: DnD Kit sortable library
- @dnd-kit/utilities: DnD Kit utilities library
- @types/node: TypeScript definitions for Node.js
- @types/react: TypeScript definitions for React
- @types/react-dom: TypeScript definitions for React DOM
- fs: Node.js file system module
- net: Node.js networking module
- next: Next.js framework
- react: React library
- react-dom: React DOM library
- react-icons: React icons library
- tls: Node.js TLS/SSL module
- typedb-client: TypeDB client library
- typescript: TypeScript language
- uuid: UUID library

## Dev Dependencies

### This package has the following dev dependencies

- @types/uuid: TypeScript definitions for UUID
- autoprefixer: Autoprefixer postprocessor
- postcss: PostCSS library
- tailwindcss: Tailwind CSS library
