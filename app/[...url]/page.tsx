import { ragChat } from '@/lib/rag-chat'
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

    await ragChat.context.add({
        type: 'html',
        source: fixedUrl,
        config: {chunkOverlap: 50, chunkSize: 200}
    })

    return (
        <div>
            
        </div>
  )
}

export default Page