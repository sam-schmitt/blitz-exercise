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
					<p className='text-center'>
						<i>My Experience</i>
					</p>
					<p className='text-2xl font-bold mt-7'>The Tree</p>
					<p className='text-xl mt-5'>Creating the Tree</p>
					<p className='text-lg mt-2'>
						My tree component has nodes that are connected to each other in a{" "}
						<i>parent-child</i> relationship. The tree is represented as a
						nested data structure, where each node is an object with an id,
						name, content, and children. The <b>'root'</b> object represents the
						top-level node of the tree, and it can have any number of child
						nodes.
					</p>
					<p className='text-lg mt-2'>
						The tree supports several operations, as they were specified in the
						assignment: like adding a new child node to a selected parent node,
						editing a node's content, and deleting a node. I used the{" "}
						<code>`useState'</code>hook to manage state and render updates. The
						code uses recursion to traverse the tree to find the selected node
						and to update the children's content when a parent node is deleted
						or when new children are added to a node. This tree data structure
						is used to represent hierarchical data structures like file systems,
						organization charts, and family trees, and the{" "}
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
						code, I was able to identify most of the issues and make some
						necessary fixes.
					</p>
					<p className='text-lg mt-2'>
						I learned a lot about state and how it can be managed through a
						recursive tree. The <code>`createReference`</code>
						function was the most interesting problem to solve.
					</p>
					<p className='text-xl mt-5'>What more would I do?</p>
					<p className='text-lg mt-2'>
						If I were to work on a tree data structure again in the future,
						there are a few things that I would do differently to improve upon
						it. I would try to write more comprehensive test cases to cover a
						wider range of potential scenarios for the data. This would allow me
						to catch any bugs or errors earlier on to save time.
					</p>
					<p className='text-lg mt-2'>
						Additionally, I would make an effort to better organize my code and
						make it more modular, so that it is easier to read, understand, and
						maintain over time.
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
						section-types. I would also add robust color customization so that
						builders could create really vivid themes that fit right with their
						app.
					</p>
					<p className='text-lg mt-2'>
						There are also a ton of edge cases unaccounted for in functionality.
						For example, if a tree moves all the way down to being the last
						child, it should then automatically move out of the tree it's in and
						maybe into the next one.
					</p>
					<p className='text-2xl font-bold mt-7'>The TypeDB Backend</p>
					<p className='text-xl mt-5'>Learning TypeDB</p>
					<p className='text-lg mt-2'>
						I've never used TypeDB before but that didn't stop me from reading
						into it. I was impressed by its marketing use-cases and saw why it
						would be a good fit for an exercise like this. I started to play
						with TypeDB studio to get a better grasp on how the data could be
						related.
					</p>
					<p className='text-lg mt-2'>
						I then proceeded to sketch out the schema based on the JSON that my
						root state outputted from the client. I knew that linking to a DB
						would increase performance of the tree significantly, as you
						wouldn't need the entire state of the tree to exist on the client,
						only the visible nodes. So I designed the schema so that you would
						only ever need to make requests to smaller pieces of the root tree,
						and you could request the full tree as you went and expanded.
					</p>
					<p className='text-xl mt-5'>Trying Blitz Orm</p>
					<p className='text-lg mt-2'>
						I'm not going to lie, trying out Blitz Orm was a bit difficult but I
						could see the potential of the new package. Since it is in an early
						stage, I still made a good attempt to try and get it functional,
						however, I did experience some compatibility issues with other
						packages and decided to focus on other aspects of the assignment to
						better dedicate my time.
					</p>
					<p className='text-lg mt-2'>
						I would be very interested in taking a peak into a backend that is
						already using Blitz Orm to its fullest capabilities, so that I could
						see how well it can fit into a stack.
					</p>
					<p className='text-xl mt-5'>What more would I do?</p>
					<p className='text-lg mt-2'>
						I definitely want to do more research on TypeDB and TQL to just
						satisfy my curiosity, it seems like a very neat DB solution. As for
						Blitz Orm, it would make the best sense to learn from the developer
						how it should be applied best, if I'd be given the opportunity to do
						so.
					</p>
					<p className='text-lg mt-2'>
						As state in the assignment details, it is difficult to link JSON to
						TypeDB, so I would try different formatting on the client to better
						fit with TQL.
					</p>
					<p className='text-2xl font-bold mt-7'>Final Thoughts</p>
					<p className='text-lg mt-2'>
						As stated in my brief application (prior to this exercise), I am
						very interested in building no-code solutions as I've been a part of
						an entrepreneurial community that has always waited for the day that
						we could build out all of our ideas without needing to focus on so
						much code work.
					</p>
					<p className='text-lg mt-2'>
						This exercise was a lot of fun for me, and I would love to continue
						to work on this problem alongside a strong team of developers,
						bringing in a polished UX and backend that could serve a
						distinguished no-code solution to many developers.
					</p>
					<p className='text-lg mt-2'>
						Feel free after assessing this submission to check out my{" "}
						<a
							target={"_blank"}
							style={{ color: "blue" }}
							href='https://samschmitt.net'
						>
							portfolio
						</a>
						.
					</p>
				</div>
			</main>
		</>
	);
}
