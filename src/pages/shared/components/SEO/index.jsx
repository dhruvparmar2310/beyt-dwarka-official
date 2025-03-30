import Head from 'next/head'
import React from 'react'

const SEO = ({ title, keywords, description, socialTitle, socialDescription, url }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name='keywords' content={keywords} />
                <meta name="description" content={description} />
                <meta property="og:title" content={socialTitle} />
                <meta property="og:description" content={socialDescription} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content="assets/img/favicon.png" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="assets/img/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
        </>
    )
}

export default SEO
