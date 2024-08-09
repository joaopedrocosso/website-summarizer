import React from 'react'

interface PageProps{
    params: {
        url: string | string[] | undefined
    }
}

function fixUrl({ url }: { url: string[] }){
    const decode = url.map((component) => decodeURIComponent(component))
    return decode.join('/')
}

const Page = async ({ params }: PageProps) => {
  
    const fixedUrl = fixUrl({
        url: params.url as string[]
    })

    return (
        <div>
            
        </div>
  )
}

export default Page