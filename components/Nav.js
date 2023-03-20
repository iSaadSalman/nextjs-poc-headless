import { useRouter } from "next/router";

export function Nav() {
  const router = useRouter();

  const onChangeLanguage = (e) => {
    e.preventDefault()

    // console.log( router.asPath, router.query)
    router
      .push(router.asPath, null, { locale: locale == 'en'? 'ar' : 'en' })
      .then(() => router.reload());

    // refresh window

    return false
  };

  const { locale } = useRouter()

  return (
    <nav style={{direction: locale == "en" ? "ltr" : "rtl"}}>
      <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
        <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            href="/"
          >
            Home
          </a>
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            href="/about"
          >
            About
          </a>
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            href="/contact"
          >
            Contact
          </a>
        </div>
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
        <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            target
            rel
            href="/news"
          >
            <span> News</span>
          </a>
          <a
            className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500"
            target="_blank"
            rel="noopener"
            href=""
          >
            <span> Link 2</span>
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
