import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { graphQLUrl, backendURL } from "../functions/functions";

import Head from "next/head";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import About from "../templates/about"
import Contact from "./contact"

export default function Dynamic(data) {

  console.log( data )
  const renderTemplate = (template) => {

      if (template == 'about_blueprint') {

        return <About data={data} />
        return "about template"
      } else {
        return <h1>common template</h1>
      }
  };
    return (<>
             <Head>
                <title>Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
                    <div className="grow">
                        <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                            <Nav />
                        </div>
                    </div>

                    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
                      {data.data &&
                    renderTemplate(data.data.entry.blueprint)
                  }
                    </div>
                    <Footer />
                </div>
            </main>
    </>)
}



 export async function getStaticPaths( params ) {



  const client = new ApolloClient({
    uri: graphQLUrl(),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    query Query {
      entries(collection: "pages", filter:{locale: "default"}) {
        data {
          blueprint
          id
          locale
          title
            locale
            slug
      }
  }
}`,
    });



    // const paths = data.entries.data.map((entry) => ({
    //   params: { 
    //     slug: entry.slug, 
    //   }
    // }));

    const paths = data.entries.data.map(post => ({
      params: { slug: post.slug, blueprint: post.blueprint}
    }))

    return { paths, fallback: true }


}


export async function getStaticProps( context ) {


    const client = new ApolloClient({
      uri: graphQLUrl(),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
        query: gql`
        query Query {
          entry(slug: "${context.params.slug}", filter:{locale: "default"}) {
            id
            title
            blueprint
            slug
            ... on Entry_Pages_AboutBlueprint {
              ...AboutBlueprintFields
            }
          }
        }
        
        fragment AboutBlueprintFields on Entry_Pages_AboutBlueprint {
          # Fields specific to the 'about' blueprint
          intro_text
          team_members {
            ... on Set_TeamMembers_NewSet {
              name
              image {
                url
                permalink
                src(width: 285, height: 285)
              }
            }
          }
        }`,
      });


    return {
        props: {
          data: data,
        },
    };
 }
    