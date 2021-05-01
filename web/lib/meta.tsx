import { useRouter } from 'next/router'

export type MetadataOptions = {
    opengraph?: boolean,
    twitter?: boolean,
    name?: string,
    description?: string,
    url: string
}

function createMeta(options: MetadataOptions = {
    opengraph: true,
    twitter: true,
    name: 'ttv-nes',
    description: 'ttv-nes is a project that allows twitch chat commands to control a nes game',
    url: 'https://ttv-nes.gm47.cf' + useRouter().asPath
}): React.ReactElement {
    if ((options.opengraph || options.twitter) && !options.url) throw new TypeError("'url' option is required for opengraph or twitter meta tags");
    return (
        <>
            {/* Generic meta tags */}
            <meta name="title" content={options.name} />
            <meta name="description" content={options.description} />
            {/* OpenGraph meta tags */}
            {options.opengraph && (
                <>
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={options.url} />
                    <meta property="og:title" content={options.name} />
                    <meta property="og:description" content={options.description} />
                    <meta property="og:image" content="https://ttv-nes.gm47.cf/social.png" />
                </>
            )}
            {/* Twitter meta tags */}
            {options.twitter && (
                <>
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={options.url} />
                    <meta property="twitter:title" content={options.name} />
                    <meta property="twitter:description" content={options.description} />
                    <meta property="twitter:image" content="https://ttv-nes.gm47.cf/social.png" />
                </>
            )}
        </>
    )
}

export default createMeta;