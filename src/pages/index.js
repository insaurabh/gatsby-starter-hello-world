import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
	<Layout>
	  <div style={{ color: `purple` }}>
	    

	    <Header headerText="Hello Gatsby!" />
	    <p>What a world.</p>
	    <img srcSet="https://source.unsplash.com/random/400x200" alt="" className="lazyload"/>
	    <div>
		    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
		    <p>
		      What do I like to do? Lots of course but definitely enjoy building
		      websites.
		    </p>
	    </div>

	  </div>
    </Layout>

)
