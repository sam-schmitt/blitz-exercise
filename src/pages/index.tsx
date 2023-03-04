import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/core/header";

export default function Home(props: any) {
	return (
		<>
			<Head>
				<title>Blitz Exercise</title>
				<meta
					name='description'
					content='My experience writing a weeklong job application for Blitz NoCode'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className=''>
				<Header selected={"/"} />
				<div className='w-3/6 mx-auto mb-10'>
					<p className='text-3xl font-bold text-center mt-10'>
						Sam Schmitt's Blitz Interface Builder Tree
					</p>
					<p className='text-center'>
						<i>My Experience</i>
					</p>
					<p className='text-2xl font-bold mt-7'>The Tree</p>
					<p className='text-xl mt-5'>Creating the Tree</p>
					<p className='text-lg mt-2'>
						I created a React component for a tree data structure that has nodes
						that are connected to each other in a <i>parent-child</i>{" "}
						relationship. The tree is represented as a nested data structure,
						where each node is an object with an id, name, content, and
						children. The <b>'root'</b> object represents the top-level node of
						the tree, and it can have any number of child nodes.
					</p>
					<p className='text-lg mt-2'>
						The tree supports several operations like adding a new child node to
						a selected parent node, editing a node's content, and deleting a
						node. I used the <code>`useState hook'</code> to manage state and
						render updates. The code uses recursion to traverse the tree to find
						the selected node and to update the children's content when a parent
						node is deleted or when new children are added to a node. This tree
						data structure is used to represent hierarchical data structures
						like file systems, organization charts, and family trees, and the{" "}
						<b>interface builder</b>.
					</p>
					<p className='text-lg mt-2'>
						Creating the tree was a bit complicated at first, as I wanted to use
						a single state variable to control the state of the entire tree,
						beginning with a root.
					</p>
					<p className='text-lg mt-2'>
						Once I began the <code>`addChild`</code> function, then I began to
						figure out how I was going to relate each node and pursue most of
						the movement functions.
					</p>
					<p className='text-xl mt-5'>Testing the Tree</p>
					<p className='text-lg mt-2'>
						As I was coding the tree in React, I decided to test it using both
						the console and the UI. I began by logging the tree structure to the
						console and verifying that it matched my expectations.{" "}
					</p>
					<p className='text-lg mt-2'>
						From there, I used the UI to visualize the tree and identify any
						issues that needed fixing. As I interacted with the tree in the UI,
						I noticed that some of the nodes were not behaving as expected.{" "}
					</p>
					<p className='text-lg mt-2'>
						By examining the console logs and carefully stepping through the
						code, I was able to identify the issue and make the necessary fixes
						to ensure that the tree was functioning correctly.{" "}
					</p>
					<p className='text-lg mt-2'>
						This process of testing and debugging was a valuable learning
						experience, and I feel more confident in my ability to create
						complex data structures in React moving forward. The{" "}
						<code>`createReference`</code>
						function was the most interesting problem to solve.
					</p>
					<p className='text-xl mt-5'>What more would I do?</p>
					<p className='text-lg mt-2'>
						If I were to work on a tree data structure again in the future,
						there are a few things that I would do differently to improve upon
						it. First and foremost, I would focus on writing more comprehensive
						test cases to cover a wider range of potential scenarios and edge
						cases. This would allow me to catch any bugs or errors early on and
						ensure that my implementation is robust and reliable.
					</p>
					<p className='text-lg mt-2'>
						Additionally, I would make an effort to better organize my code and
						make it more modular, so that it is easier to read, understand, and
						maintain over time.{" "}
					</p>
					<p className='text-lg mt-2'>
						Finally, backend requests can help optimize the performance of the
						tree by only retrieving the necessary data on-demand. This can help
						reduce the amount of data that needs to be stored and processed on
						the client-side, resulting in faster load times and a more
						responsive user interface.
					</p>
					<p className='text-2xl font-bold mt-7'>The Interface Builder</p>
					<p className='text-xl mt-5'>Creating the Builder</p>
					<p className='text-lg mt-2'>
						After creating the tree, I knew I needed to reuse the standard tree
						component in order to show how dynamic it was. The tree accepts a{" "}
						<code>`ContentController`</code> prop which is what controls how
						this instance of the <b>Tree</b> will behave.
					</p>
					<p className='text-lg mt-2'>
						From reading more about what the assignment was asking, I started to
						understand the purpose of the B1, B2, R1, R2, and R3 datatypes. It
						certainly is a unique way of classifying these kinds of components.
					</p>
					<p className='text-lg mt-2'>
						I decided that in order to simplify the UX of the site, I would have
						to relay to the user an easier way of understanding what the types
						meant.
					</p>
					<p className='text-lg mt-2'>
						I separated the types into 3 sections: sections, text, and
						components. These are common ways of referring to types of building
						blocks for an application.
					</p>
					<p className='text-lg mt-2'>
						I then positioned functional buttons where I though they were best
						fitting and began to test the UX.
					</p>
					<p className='text-xl mt-5'>Testing the Builder</p>
					<p className='text-lg mt-2'>
						In order to test UX, I needed more sets of eyes. I asked friends to
						take a look and only told them that this was a UI interface builder.
						They struggled a bit at first, which was expected, as this is a
						fast-built prototype but I was able to get more feedback that I
						could put bag in the design.
					</p>
					<p className='text-lg mt-2'>
						There are still a few bugs to work through, but nothing a few more
						casual days of debugging wouldn't fix.
					</p>
					<p className='text-lg mt-2'>
						The concept of a no-code UI interface builder is right there.
					</p>
					<p className='text-xl mt-5'>What more would I do?</p>
					<p className='text-lg mt-2'>
						Coding this up was actually very fun, so I might continue this
						project afterwards for personal amusement.
					</p>
					<p className='text-lg mt-2'>
						<i>Not joking.</i>
					</p>
					<p className='text-lg mt-2'>
						But some things I would add are flex alignment on all components to
						have a friendly layout customization interface in the group and page
						section-types.
					</p>
					<p className='text-lg mt-2'>
						I would also add robust color customization so that builders could
						create really vivid themes that fit right with their app.
					</p>
				</div>
			</main>
		</>
	);
}
