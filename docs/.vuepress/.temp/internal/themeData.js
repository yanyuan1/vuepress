export const themeData = {
  "navbar": [
    {
      "text": "home",
      "link": "/"
    },
    {
      "text": "功能",
      "children": [
        {
          "text": "about",
          "link": "/about"
        },
        {
          "text": "food",
          "link": "/food"
        },
        {
          "text": "make",
          "link": "/make"
        }
      ]
    },
    {
      "text": "TimeLine",
      "link": "/timeline/",
      "icon": "rec-date"
    }
  ],
  "logo": "images/logo.png",
  "sidebar": [
    "about",
    "food",
    [
      "/page-b",
      "Explicit link text"
    ]
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    },
    "/zh/": {
      "selectLanguageName": "简体中文"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
