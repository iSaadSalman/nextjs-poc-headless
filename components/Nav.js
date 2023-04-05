import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export function Nav( {links, links_ar} ) {

  console.log( links, links_ar )

  const router = useRouter();

  const { locale } = useRouter()

  const onChangeLanguage = (e) => {
    e.preventDefault()

    router
      .push(router.asPath, null, { locale: locale == 'en'? 'ar' : 'en' })
      .then(() => router.reload());

    // refresh window

    return false
  };

  const getCurrentLocaleForURL = () => {
      return locale == 'en' ?  "" :  "/ar"
  }

  const drawDynamicLinks = () => {

    if (links && locale == 'en') {
      return links.map((link) => (

          <a
          key={link.page.title}
          className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
          href={ getCurrentLocaleForURL() + link.page.url}
        >
          {link.page.title}
        </a>
      ))
    }  else if (links_ar && locale == 'ar') {
      return links_ar.map((link) => (

        <a
        key={link.page.title}
        className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
        href={ getCurrentLocaleForURL() + link.page.url.replace('/arabic','')}
      >
        {link.page.title}
      </a>
    ))
    
    }else {
      return null
    }

    
  }


  return (
    <nav style={{direction: locale == "en" ? "ltr" : "rtl"}}>
      <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
      <div className="flex items-center justify-between w-full md:w-auto">
          <a className="w-28 dark:hidden" href="/">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "39.3939% 0px 0px",
                }}
              />
              <img
                alt="Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                src="https://brackets-tech.com/images/logo.svg"
                decoding="async"
                data-nimg="responsive"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              <noscript />
            </span>
          </a>
          <a className="hidden w-28 dark:block" href="/">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "39.3939% 0px 0px",
                }}
              />
              <img
                alt="Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                src="https://brackets-tech.com/images/logo.svg"
                decoding="async"
                data-nimg="responsive"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              <noscript />
            </span>
          </a>
          <button
            aria-label="Toggle Menu"
            className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 "
            id="headlessui-disclosure-button-:r4:"
            type="button"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
          {/* <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            href="/"
          >
            Home
          </a> */}
        {drawDynamicLinks()}     
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            href={ getCurrentLocaleForURL() + "/contact"}
          >
            Contact
          </a>

          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            target
            rel
            href={ getCurrentLocaleForURL() + "/news"}
          >
            <span> News</span>
          </a>
  

          { locale   == 'en' ? <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            onClick={onChangeLanguage}>
            <span> Arabic</span>
          </a> : <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            onClick={ onChangeLanguage}

          >
            <span> English</span>
          </a> }
        </div>


      </div>
    </nav>
  );
}

// export async function getStaticProps() {
//   const client = new ApolloClient({
//         uri: graphQLUrl(),
//         cache: new InMemoryCache(),
//       });

//   const { data } = await client.query({
//     query: gql`
//     query NavigationQuery {
//       nav(handle: "main_nav") {
//         handle
//         title
//         tree {
//           page {
//             title
//             url
//           }
//         }
//       }
//     }`,
//   });

//   return {
//     props: {
//       links: data.nav.tree,
//     },
//   };
// }



// export async function getStaticProps(prop) {
  
//   const client = new ApolloClient({
//     uri: graphQLUrl(),
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//     query NavigationQuery {
//       nav(handle: "main_nav") {
//         handle
//         title
//         tree {
//           page {
//             title
//             url
//           }
//         }
//       }
//     }
    
//     `,
//   });

//   return {
//     props: {
//       data: data,
//     },
//   };
// }


// export default withStaticProps(async () => {
//   const client = new ApolloClient({
//     uri: graphQLUrl(),
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//     query NavigationQuery {
//       nav(handle: "main_nav") {
//         handle
//         title
//         tree {
//           page {
//             title
//             url
//           }
//         }
//       }
//     }
    
//     `,
//   });

//   return {
//     props: {
//       data: data,
//     },
//   };
// })(Nav);

