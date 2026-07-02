import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = () => (
  <Helmet>
    <title>Aman Verma — Full-Stack AI Engineer & Software Developer</title>
    <meta name="description" content="Portfolio of Aman Verma — Full-stack AI engineer building production-ready web platforms with React, Next.js, Node.js, Python, and ML tooling. Based in India, open to remote roles." />
    <meta name="keywords" content="Aman Verma, full-stack developer, AI engineer, React developer, Next.js, Node.js, Python, portfolio, software engineer, Infosys" />
    <meta name="author" content="Aman Verma" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://akaamanverma.vercel.app" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Aman Verma — Full-Stack AI Engineer" />
    <meta property="og:description" content="Full-stack AI engineer for high-impact product teams. React, Next.js, Node.js, Python, and AI automation." />
    <meta property="og:url" content="https://akaamanverma.vercel.app" />
    <meta property="og:site_name" content="Aman Verma Portfolio" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Aman Verma — Full-Stack AI Engineer" />
    <meta name="twitter:description" content="Full-stack AI engineer for high-impact product teams. React, Next.js, Node.js, Python, and AI automation." />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Aman Verma",
        "url": "https://akaamanverma.vercel.app",
        "jobTitle": "Software Engineer — AI and Automation",
        "worksFor": {
          "@type": "Organization",
          "name": "Infosys"
        },
        "sameAs": [
          "https://github.com/AmanVerma2202",
          "https://www.linkedin.com/in/akaamanverma/",
          "https://x.com/akaAmanVerma"
        ]
      })}
    </script>
  </Helmet>
)

export default SEO
